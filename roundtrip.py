from re import I
from IPython.display import Javascript, HTML, display
from IPython import get_ipython

# ------------------------------------------
# PRE VACATION CONNOR NOTES TO SELF
#-------------------------------------------


class Roundtrip():

    def __init__(self, ipy_shell=get_ipython()):
        self.shell = ipy_shell
        self.tags ={
            "script": "<script src='{src}' type='{type}'></script>",
            "style": "<link rel='stylesheet' href='{}'>"
        } 
        self.line = '{tags}\n'
        self.bridges = {}
        self.last_id = None

        # Provide a function to cleanup the namespace of our javascript
        # display(HTML("<script>function cleanUp() { argList =[]; element = null; cell_idx = -1}</script>"))

    script_map = {"js": "text/javascript",
                "csv": "text/csv",
                "json": "text/json"}

    def _get_file_type(self, file):
        return file.split(".")[-1]
    
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


    def load_web_files(self, files):
        # argList = '<script> var argList = []; var elementTop = null; var cell_idx = -1</script>'
        output_html = "<script src='roundtrip.js' type='text/javascript'></script>"
        
        # load files based on their individual properties
        if type(files) is type([]):
            for file in files:
                output_html += self._file_formatter(file)
                
        elif type(files) is type(''):
            file = files
            output_html += self._file_formatter(file)

        bdg = Bridge(output_html, self.shell)
        self.bridges[bdg.id] = bdg
        self.last_id = bdg.id
        return id
    
    # Passing to JS is working now
    def pass_to_js(self, js_variable, data):
        self.bridges[self.last_id].add_javascript("Roundtrip.{} = {}".format(js_variable, str(data)))

    def initialize(self):
        self.bridges[self.last_id].run()

class Bridge():

    def __init__(self, html, ipy_shell=get_ipython()):
        self.html = html
        self.shell = ipy_shell
        self.display = display(HTML(''),display_id=True)
        self.id = self.display.display_id
        args = []

    def run(self):
        self.display.update(HTML(self.html))

    def add_javascript(self, code):
        self.html += '<script>{}</script>'.format(code)

    #overloaded = operator?
    def pass_to_js(self, js_variable, data):
        pass

    #overloaded = operator?
    def retrieve_from_js(self, js_variable):
        pass

    def pass_by_ref(self, varmap, to_js_converter, from_js_converter):
        print(varmap)