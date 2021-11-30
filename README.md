## Roundtrip

An library for loading Javascript into Jupyter
Notebooks. Supports transferring data from Python Jupyter cells to Javascript—and back.

- [Getting Started](#Try-It-Out)
- [Wiki](https://github.com/hdc-arizona/roundtrip/wiki)


### Try It Out
1) Install [Jupyter notebook](https://jupyter.org/install) & [Node](https://nodejs.org/en/download/)
2) Clone this repository:
```bash
git clone https://github.com/hdc-arizona/roundtrip.git
```
3) Run the automatic installer:
```bash
cd roundtrip
chmod +x install.sh
./install.sh
```
4) Start a jupyter server from the `roundtrip` base directory:
```bash
jupyter notebook 
```
5) From your web browser navigate to the `docs/examples/` folder and open the `Manual Workflow Example` notebook.

On load, you may need to clean the output by running `Restart & Clear Output`
from the `Kernel` menu in Jupyter.

Running the cells in the first example will demonstrate:

1. The loading of a real pandas dataset into a javascript visualization
2. Interaction with the visualization
3. Returning data back from the visualization to the Jupyter notebook

Once you understand the functionality in this notebook please open the `Advanced Workflow Example`

Running the cells in this example will demonstrate:
1. The `?` operator and how it links python data with visualization data
2. How the `?` can provide linked-view functionality between cells
3. How the linking of data and automatic updating of cells can be easily turned off by removing the `?`
4. How cells update when data is update inside the jupyter notebook as well as in the visualizations


### License

Roundtrip is distributed under the terms of the MIT license.

All contributions must be made under the MIT license.  Copyrights in the
Roundtrip project are retained by contributors.  No copyright assignment is
required to contribute to Roundtrip.

See [LICENSE](https://github.com/hdc-arizona/roundtrip/blob/master/LICENSE) and
[NOTICE](https://github.com/hdc-arizona/roundtrip/blob/master/NOTICE) for details.

SPDX-License-Identifier: MIT
