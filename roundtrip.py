
from IPython.display import Javascript, HTML, display, clear_output
from IPython import get_ipython
import io
import tokenize
import json
import inspect



def _default_converter(data):
    if type(data) in [type(''), type(0), type(0.0)]:
        return str(data)
    elif type(data) in [type({}), type([])]:
        return json.dumps(data)
    elif 'DataFrame' in str(type(data)) or 'Series' in str(type(data)): 
        return data.to_json()
    return data

class RoundTrip():

    def __init__(self, ipy_shell=get_ipython()):
        self.shell = ipy_shell
        self.tags ={
            "script": "<script src='{src}'></script>",
            "style": "<link rel='stylesheet' href='{}'>"
        } 
        self.line = '{tags}\n'
        self.bridges = {}
        self.last_id = None
        self.watched = {}

        display(HTML(self.tags["script"].format(src="roundtrip.js")))

    script_map = {"csv": "text/csv",
                "json": "text/json"}


    def _get_file_type(self, file):
        return file.split(".")[-1];
    
    def _file_formatter(self, file):
        ft = self._get_file_type(file)
        if ft in self.script_map.keys():
            tag = self.tags['script'].format(src=file, type=self.script_map[ft])
            return self.line.format(tags=tag)
        if ft == "css":
            tag = self.tags['style'].format(src=file)
            return self.line.format(tags=tag)
        elif ft == "html":
            return open(file).read()

    def load_webpack(self, file):
        output_html = ''
        file = file
        output_html += self._file_formatter(file)

    def load_web_files(self, files):
        output_html = ''

        #this initial string is where variable bindings go
        scripts = ['']
        
        # load files based on their individual properties
        for file in files:
            ft = self._get_file_type(file)
            if ft == "js":
                scripts.append(open(file).read())
            else:
                output_html += self._file_formatter(file)

        bdg = Bridge(output_html, scripts, self.shell)

        # bdg.add_javascript("cells = Jupyter.notebook.get_cell_elements();")

        self.bridges[bdg.id] = bdg
        self.last_id = bdg.id

        return id
    
    # Passing to JS is working now
    def data_to_js(self, data, js_variable):
        self.bridges[self.last_id].pass_to_js(js_variable, data)


    #consider seperating watchable and reloadable?
    def var_to_js(self, jup_var, js_variable, watch=False, to_js_converter=_default_converter, from_js_converter=None):

        if jup_var[0] == '?':
            if watch is False:
                raise SyntaxError("""
                This magic function does not support automatic reloading. 
                Please remove the '?' character in front of '{0}'.""".format(jup_var[1:]))
            jup_var = jup_var[1:]

            if(jup_var in self.watched.keys() and js_variable not in self.watched[jup_var]['js_var']):
                 self.watched[jup_var]['js_var'].append(js_variable)
            else:
                self.watched[jup_var] = {'converter':to_js_converter, "js_var": [js_variable]}

        data = self.shell.user_ns[jup_var]


        if watch is True:
            watch = 'true'
        else:
            watch = 'false'

        self.bridges[self.last_id].pass_to_js(js_variable, 
                                                data,
                                                two_way=watch, 
                                                python_var=jup_var,
                                                py_to_js_converter=to_js_converter, 
                                                js_to_py_converter=from_js_converter)


    def manage_jupter_change(self):
        '''
            Checks to see if the cell which was just run '_ih', 
            has an assignment to one or more watched variables.
            Causes cells with '?<varaible>' refrences to run automatically 
        '''
        tokens = [token for token in tokenize.tokenize(io.BytesIO(self.shell.user_ns['_ih'][-1].encode('utf-8')).readline)]
        assignment_tokens = ['=', '+=', '-=', '*=', '/=', '%=', '//=', '**=', '&=', '|=', '^=', '>>=', '<<=']
        update_flags = {}
        update_hook = """\n (function(){{window.Roundtrip[\'{js_var}\'] = \'{data}\';}})();\n"""
        code = ''

        for var in self.watched.keys():
            for i, token in enumerate(tokens):
                if token.string == var:
                    lookahead = i 
                    while lookahead < len(tokens) and \
                        tokenize.tok_name[tokens[lookahead].type] != 'NL':
                        if tokens[lookahead].string in assignment_tokens:
                            update_flags[var] = True
                            break
                        else:
                            lookahead += 1

                    if (var in update_flags.keys()):
                        break

        for flag in update_flags:
            new_data = self.watched[flag]['converter'](self.shell.user_ns[flag])
            for var in self.watched[flag]['js_var']:
                code += update_hook.format(js_var=var, data=new_data)
        if code != '':
            display(Javascript(code))
          
    def fetch_data(self, js_var, ipy_var):
        self.bridges[self.last_id].retrieve_from_js(js_var, ipy_var)

    def initialize(self):
        self.bridges[self.last_id].run()

class Bridge():

    def __init__(self, html, js, ipy_shell=get_ipython()):
        self.html = html
        self.scripts = js
        self.shell = ipy_shell
        self.display = display(HTML(''), display_id=True)
        self.id = self.display.display_id
        self.converter = _default_converter
        args = []

    def _extract_simple_dt(self, dt_str):
        return dt_str.split("'")[1]

    def run(self):
        js_exe = ''
        for script in self.scripts:
            js_exe += script
        
        self.display.update(HTML(self.html))
        display(Javascript(js_exe))


    def add_javascript(self, code):
        display(Javascript(code))


    # put down explicit write notification (maybe)
    # watch errors with user documentation
    # run some stress tests on this
    # with weird waits for java script
    # watch gives us an explicit way to link views
    def pass_to_js(self, js_variable, data, two_way='false', python_var='', datatype=None, py_to_js_converter=None, js_to_py_converter=None):
        pass_hook = """\n (function(){{ 
            window.Roundtrip[\'{js_var}\'] = {{ 
            \'two_way\':\'{binding}\',
            \'python_var\':\'{py_var}\', 
            \'type\':\'{type}\', 
            \'data\':\'{data}\', 
            \'converter\':{converter}, }} 
        }})();\n"""

        if datatype is None:
            datatype = type(data)
            datatype = self._extract_simple_dt(str(datatype))
            
        try:
            #some default conversion
            # we may want to push this off to the application
            # developer
            if py_to_js_converter == None:
                data = self._default_converter(data)
            else:
                data = py_to_js_converter(data)
                self.converter = py_to_js_converter
        except:
            pass

        conv_spec = None

        if js_to_py_converter is not None:
            conv_spec = {
                "name":js_to_py_converter.__name__, 
                "code":inspect.getsource(js_to_py_converter)
            }
        

        self.add_javascript(
            pass_hook.format(
                js_var=js_variable, 
                binding=two_way, 
                py_var=python_var, 
                type=datatype, 
                data=data, 
                converter=json.dumps(conv_spec)))

    #overloaded = operator?
    def retrieve_from_js(self, js_variable, notebook_var):
        #TODO: add validator(s)
        hook_template = """
            (function(){{
                    var holder = Roundtrip['{src}'];
                    holder = `\'${{holder}}\'`;
                    var code = `{dest} = ${{holder}}`;
                    console.log(code);
                    IPython.notebook.kernel.execute(code);
                    }})()
               """
        hook = hook_template.format(src=str(js_variable), dest=str(notebook_var))
        display(Javascript(hook))
        # self.add_javascript(hook)

Roundtrip = RoundTrip()
Roundtrip.shell.events.register('post_run_cell', Roundtrip.manage_jupter_change)
