## Roundtrip

A python/javascript library for loading and managing Javascript code and visualization in Jupyter notebook cells.

This library supports:
- Loading HTML, CSS, and JavaScript Files
- Loading Webpack-Generated Files
- Passing Jupyter-scoped data into Javascript code
- Returnng Javascript generated data back to the calling Jupyter Notebook
- Binding data between a Jupyter notebook and embedded Javascript visualizations
- Automatic updating of bound visualizations enabling:
  - fluid gui-scripting based workflows
  - linked views across cells

### Important Links
- [Roundtrip Wiki](https://github.com/hdc-arizona/roundtrip/wiki)


### Try It Out
1) Install [Jupyter notebook](https://jupyter.org/install), [Node.js](https://nodejs.org/en/download/) & [NPM](https://www.npmjs.com/package/npm) 
2) Clone this repository:
```bash
git clone https://github.com/hdc-arizona/roundtrip.git
```
3) Run the automatic installer:
```bash
cd roundtrip
pip3 install roundtrip-lib
chmod +x build_examples.sh
./build_examples.sh
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

### Research Using Roundtrip
1. Scully-Allison, Connor, Ian Lumsden, Katy Williams, Jesse Bartels, Michela Taufer, Stephanie Brink, Abhinav Bhatele, Olga Pearce, and Katherine E. Isaacs. "Design Concerns for Integrated Scripting and Interactive Visualization in Notebook Environments." IEEE Transactions on Visualization and Computer Graphics (2024).
```
@article{scully2024design,
  title={Design Concerns for Integrated Scripting and Interactive Visualization in Notebook Environments},
  author={Scully-Allison, Connor and Lumsden, Ian and Williams, Katy and Bartels, Jesse and Taufer, Michela and Brink, Stephanie and Bhatele, Abhinav and Pearce, Olga and Isaacs, Katherine E},
  journal={IEEE Transactions on Visualization and Computer Graphics},
  year={2024},
  publisher={IEEE}
}
```

2. Brink, Stephanie, Michael McKinsey, David Boehme, Connor Scully-Allison, Ian Lumsden, Daryl Hawkins, Treece Burgess et al. "Thicket: Seeing the performance experiment forest for the individual run trees." In Proceedings of the 32nd International Symposium on High-Performance Parallel and Distributed Computing, pp. 281-293. 2023.
```
@inproceedings{brink2023thicket,
  title={Thicket: Seeing the performance experiment forest for the individual run trees},
  author={Brink, Stephanie and McKinsey, Michael and Boehme, David and Scully-Allison, Connor and Lumsden, Ian and Hawkins, Daryl and Burgess, Treece and Lama, Vanessa and L{\"u}ttgau, Jakob and Isaacs, Katherine E and others},
  booktitle={Proceedings of the 32nd International Symposium on High-Performance Parallel and Distributed Computing},
  pages={281--293},
  year={2023}
}
```

3. Brink, Stephanie, Ian Lumsden, Connor Scully-Allison, Katy Williams, Olga Pearce, Todd Gamblin, Michela Taufer, Katherine E. Isaacs, and Abhinav Bhatele. "Usability and performance improvements in hatchet." In 2020 IEEE/ACM International Workshop on HPC User Support Tools (HUST) and Workshop on Programming and Performance Visualization Tools (ProTools), pp. 49-58. IEEE, 2020.
```
@inproceedings{brink2020usability,
  title={Usability and performance improvements in hatchet},
  author={Brink, Stephanie and Lumsden, Ian and Scully-Allison, Connor and Williams, Katy and Pearce, Olga and Gamblin, Todd and Taufer, Michela and Isaacs, Katherine E and Bhatele, Abhinav},
  booktitle={2020 IEEE/ACM International Workshop on HPC User Support Tools (HUST) and Workshop on Programming and Performance Visualization Tools (ProTools)},
  pages={49--58},
  year={2020},
  organization={IEEE}
}
```

####Cite the software
C. Scully-Allison, J. Bartels, Katie Williams, Alex Bigelow, and Katherine E Isaacs “Roundtrip,” https://github.com/hdc-arizona/roundtrip, 2019.
```
@misc{Roundtrip,
    author = {Scully-Allison, Connor and Bartels, Jesse and Williams, Katy and Bigelow, Alex and Isaacs, Katherine E},
    title = {Roundtrip},
    year = {2019},
    howpublished = {https://github.com/hdc-arizona/roundtrip}
}
```

### License

Roundtrip is distributed under the terms of the MIT license.

All contributions must be made under the MIT license.  Copyrights in the
Roundtrip project are retained by contributors.  No copyright assignment is
required to contribute to Roundtrip.

See [LICENSE](https://github.com/hdc-arizona/roundtrip/blob/master/LICENSE) and
[NOTICE](https://github.com/hdc-arizona/roundtrip/blob/master/NOTICE) for details.

SPDX-License-Identifier: MIT


### Acknowledgements

This work has been supported by the Department of Energy under DE-SC0022044, the United States Department of Defense through DTIC Contract FA8075-14-D-0002-0007, the National Science Foundation under NSF [III-1656958](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1656958).
