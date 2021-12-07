from IPython.core.magic import Magics, magics_class, line_magic
from roundtrip.manager import Roundtrip as RT
import json
import pandas as pd
from os import path
from os.path import dirname

vis_path = path.join(dirname(dirname(path.abspath(__file__))),"vis_source")

def _to_js(data):
    if data is None:
        return "{}"
    return data.to_json()


def _from_js(data):
    data = json.loads(data)
    return pd.DataFrame(data)


@magics_class
class Basic(Magics):
    def __init__(self, shell):
        super(Basic, self).__init__(shell)
        self.shell = shell
        self.basic_path = path.join(vis_path, 'Basic')

    @line_magic
    def basic(self, line):
        args = line.split(" ")
        

        # load files
        RT.load_web_files(
            [path.join(self.basic_path,"basic.js"), path.join(self.basic_path,"basic.html")]
        )

        # do arg mapping
        RT.var_to_js(args[1], "py_data")

        RT.data_to_js(4, "int_literal")

        RT.var_to_js(
            args[0],
            "js_df",
            watch=True,
            to_js_converter=_to_js,
            from_js_converter=_from_js,
        )

        RT.initialize()

        pass

    @line_magic
    def fetch_basic(self, line):
        args = line.split(" ")
        RT.fetch_data("test", args[0])




def load_ipython_extension(ipython):
    ipython.register_magics(Basic)
