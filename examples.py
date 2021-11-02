from IPython.core.magic import Magics, magics_class, line_magic
from roundtrip import Roundtrip as RT
import json
import pandas as pd



def _to_js(data):
    return data.to_json()

def _from_js(data):
    data = json.loads(data)
    return pd.DataFrame(data)


@magics_class
class Basic(Magics):

    def __init__(self, shell):
        super(Basic, self).__init__(shell)
        self.shell = shell

    @line_magic
    def basic(self, line):
        args = line.split(' ')

        #load files
        RT.load_web_files(["Examples/source/Basic/basic.js", "Examples/source/Basic/basic.html"])

        print(args)

        #do arg mapping
        RT.var_to_js(args[1], "test")

        RT.data_to_js(4, "test_2")

        RT.var_to_js(args[0], "js_df", watch=True,  to_js_converter=_to_js, from_js_converter=_from_js)

        RT.initialize()

        pass
    
    @line_magic
    def fetch_basic(self, line):
        args = line.split(' ')
        RT.fetch_data('test', args[0])


@magics_class
class BindingExample(Magics):

    def __init__(self, shell):
        super(BindingExample, self).__init__(shell)
        
    @line_magic
    def binding_example(self, line):
        args = line.split(' ')

        #load files
        RT.load_web_files(["Examples/source/BindingExample/binding.js", "Examples/source/BindingExample/binding.html"])
        
        #load variables
        RT.var_to_js(args[0], "binding_df", watch=True, to_js_converter=_to_js, from_js_converter=_from_js)

        #initialize roundtrip
        RT.initialize()


# @magics_class
# class WebpackExample(Magics):

#     def __init__(self, shell):
#         super(WebpackExample, self).__init__(shell)
    
#     @line_magic
#     def webpack_example(self, line):
#         RT.load_web_files(["Examples/dist/index.html"])
#         RT.initialize()


@magics_class
class BarGraph(Magics):

    def __init__(self, shell):
        super(BarGraph, self).__init__(shell)
    
    @line_magic
    def bargraph(self, line):
        args = line.split(' ')

        #load files
        RT.load_web_files(["Examples/source/BarGraph/bgraph.js", "Examples/source/BarGraph/bgraph.html"])

        #do arg mapping
        RT.data_to_js("Examples/source/BarGraph/barsdata.json", "data")

        RT.initialize()
        # load javascript code (Roundtrip call)
        # bind variables (Roundtrip call)

        pass
    
    @line_magic
    def fetch_bars(self, line):
        args = line.split(' ')
        # RT.fetch_data('test', args[0])


@magics_class
class Table(Magics):
    def __init__(self, shell):
        super(Table, self).__init__(shell)
    
    @line_magic
    def show_table(self, line):
        args = line.split(' ')

        RT.load_webpack('Examples/dist/table_bundle.html')

        RT.var_to_js(args[0], "table_src", watch=True, to_js_converter=_to_js, from_js_converter=_from_js)
    
        RT.initialize()

@magics_class
class Scatter(Magics):
    def __init__(self, shell):
        super(Scatter, self).__init__(shell)

    @line_magic
    def scatter_plt(self, line):
        args = line.split(' ')

        RT.load_webpack('Examples/dist/scatter_bundle.html')

        RT.var_to_js(args[0], "scatter_src", watch=True, to_js_converter=_to_js, from_js_converter=_from_js)

        if len(args) > 1:
            RT.var_to_js(args[1], "subselection", watch=True, to_js_converter=_to_js, from_js_converter=_from_js)
    
        RT.initialize()
    
    @line_magic
    def get_filter(self, line):
        args = line.split(' ')
        RT.fetch_data("exclude", args[0])



def load_ipython_extension(ipython):
    ipython.register_magics(Basic)
    ipython.register_magics(BindingExample)
    ipython.register_magics(BarGraph)
    ipython.register_magics(Table)
    ipython.register_magics(Scatter)
