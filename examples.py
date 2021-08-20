from IPython.core.magic import Magics, magics_class, line_magic
from roundtrip import Roundtrip
import pandas as pd

@magics_class
class Basic(Magics):

    def __init__(self, shell):
        super(Basic, self).__init__(shell)
        self.RT = Roundtrip(shell)
    
    @line_magic
    def basic(self, line):
        args = line.split(' ')
        #load files
        self.RT.load_web_files(["Examples/source/Basic/basic.js", "Examples/source/Basic/basic.html"])

        df = pd.DataFrame({
            "x": [1,2,3,4,5],
            "y": [.2,.8,10.7,3.0,2.1]
        })
        #do arg mapping
        self.RT.pass_to_js("test", df.to_json())

        self.RT.initialize()
        # load javascript code (Roundtrip call)
        # bind variables (Roundtrip call)

        pass

def load_ipython_extension(ipython):
    ipython.register_magics(Basic)
