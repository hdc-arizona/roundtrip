from IPython.core.magic import Magics, magics_class, line_magic
from roundtrip import Roundtrip
import pandas as pd

@magics_class
class Basic(Magics):

    def __init__(self, shell):
        super(Basic, self).__init__(shell)
        self.RT = Roundtrip(shell)
        self.shell = shell
    
    @line_magic
    def basic(self, line):
        args = line.split(' ')

        #load files
        self.RT.load_web_files(["Examples/source/Basic/basic.js", "Examples/source/Basic/basic.html"])

        
        #do arg mapping
        self.RT.pass_to_js("test", self.shell.user_ns[args[1]])

        self.RT.pass_to_js("test2", 4)

        self.RT.watch_variable(args[0], "js_df")

        self.RT.initialize()
        # load javascript code (Roundtrip call)
        # bind variables (Roundtrip call)

        pass
    
    @line_magic
    def fetch_basic(self, line):
        args = line.split(' ')
        self.RT.fetch_data('test', args[0])


@magics_class
class BindingExample(Magics):

    def __init__(self, shell):
        super(BindingExample, self).__init__(shell)
        self.RT = Roundtrip(shell)
    
    @line_magic
    def binding_example(self, line):
        args = line.split(' ')

        #load files
        self.RT.load_web_files(["Examples/source/BindingExample/binding.js", "Examples/source/BindingExample/binding.html"])


        self.RT.watch_variable(args[0], "binding_df")

        # self.RT.pass_to_js("test2", 4)

        self.RT.initialize()
        # load javascript code (Roundtrip call)
        # bind variables (Roundtrip call)

@magics_class
class LineChart(Magics):

    def __init__(self, shell):
        super(LineChart, self).__init__(shell)
        self.RT = Roundtrip(shell)
    
    @line_magic
    def line_chart(self, line):
        args = line.split(' ')

        #load files
        self.RT.load_web_files(["Examples/dist/linechart_bundle.js", "Examples/source/LineChart/linechart.html"])


        self.RT.watch_variable(args[0], "line_df")

        # self.RT.pass_to_js("test2", 4)

        self.RT.initialize()
        # load javascript code (Roundtrip call)
        # bind variables (Roundtrip call)


@magics_class
class BarGraph(Magics):

    def __init__(self, shell):
        super(BarGraph, self).__init__(shell)
        self.RT = Roundtrip(shell)
    
    @line_magic
    def bargraph(self, line):
        args = line.split(' ')

        #load files
        self.RT.load_web_files(["Examples/source/BarGraph/bgraph.js", "Examples/source/BarGraph/bgraph.html"])

        #do arg mapping
        self.RT.pass_to_js("data", "Examples/source/BarGraph/barsdata.json")

        # self.RT.pass_to_js("test2", 4)

        self.RT.initialize()
        # load javascript code (Roundtrip call)
        # bind variables (Roundtrip call)

        pass
    
    @line_magic
    def fetch_bars(self, line):
        args = line.split(' ')
        # self.RT.fetch_data('test', args[0])



def load_ipython_extension(ipython):
    ipython.register_magics(Basic)
    ipython.register_magics(BindingExample)
    ipython.register_magics(BarGraph)
    ipython.register_magics(LineChart)
