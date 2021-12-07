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
class Scatter(Magics):
    def __init__(self, shell):
        super(Scatter, self).__init__(shell)
        self.webpack_dist = path.join(vis_path, 'dist')

    @line_magic
    def scatter_plt(self, line):
        args = line.split(" ")

        RT.load_webpack(path.join(self.webpack_dist, "scatter_bundle.html"))

        RT.var_to_js(
            args[0],
            "scatter_src",
            watch=True,
            to_js_converter=_to_js,
            from_js_converter=_from_js,
        )

        if len(args) > 1:
            RT.var_to_js(
                args[1],
                "subselection",
                watch=True,
                to_js_converter=_to_js,
                from_js_converter=_from_js,
            )

        RT.initialize()

    @line_magic
    def get_filter(self, line):
        args = line.split(" ")
        RT.fetch_data("selected", args[0])



def load_ipython_extension(ipython):
    ipython.register_magics(Scatter)
