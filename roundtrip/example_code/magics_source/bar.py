from IPython.core.magic import Magics, magics_class, line_magic
from roundtrip.manager import Roundtrip as RT
import json
import pandas as pd
from os import path
from os.path import dirname

vis_path = path.join(dirname(dirname(path.abspath(__file__))),"vis_source")


@magics_class
class BarChart(Magics):
    def __init__(self, shell):
        super(BarChart, self).__init__(shell)
        self.barpath = path.join(vis_path, 'BarGraph')

    @line_magic
    def bargraph(self, line):
        args = line.split(" ")

        # load files
        RT.load_web_files(
            [
                path.join(self.barpath, "bgraph.js"),
                path.join(self.barpath, "bgraph.html")
            ]
        )

        # do arg mapping
        RT.data_to_js(path.join(self.barpath, "barsdata.json"), "data")

        RT.initialize()
        # load javascript code (Roundtrip call)
        # bind variables (Roundtrip call)

        pass

    @line_magic
    def fetch_bars(self, line):
        args = line.split(" ")
        # RT.fetch_data('test', args[0])


def load_ipython_extension(ipython):
    ipython.register_magics(BarChart)
