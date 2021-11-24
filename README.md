## Roundtrip

An library for loading Javascript into Jupyter
Notebooks. Supports transferring data from Python Jupyter cells to Javascript—and back.

- [Getting Started](#Getting-Started)
- [Using Roundtrip in Your Notebook](#Using-Roundtrip-in-your-Notebook)
- [Loading Visualizations](#Loading-Visualizations)
- [Fetching Data from Visualizations](#Fetching-Data)



### Try It Out
1) Install [Jupyter notebook](https://jupyter.org/install)
2) Clone this repository:
```bash
git clone https://github.com/hdc-arizona/roundtrip.git
```
3) Start a jupyter server from the `roundtrip` base directory:
```bash
cd path/to/roundtrip
jupyter notebook 
```
4) From your web browser navigate to the `docs/examples/` folder and open the `Manual Workflow Example` notebook.

On load, you may need to clean the output by running `Restart & Clear Output`
from the `Kernel` menu in Jupyter.

Running the cells in the first example will demonstrate:

1. The loading of a real pandas dataset into a javascript visualization
2. Interaction with the visualization
3. Returning data back from the visualization to the Jupyter notebook

Once you understand the functionality in this notebook please open the `Advanced Workflow Example`

Running the cessl in this example will demonstrate:
1. The `?` operator and how it can be 



### Using Roundtrip in your Notebook
 
To use with your own notebook:

1) Copy `vis_interface.py` and `require.config` into the same directory as your notebook.
2) Add a new cell and run the magic command `%load_ext vis_interface`
3) Use the magic commands `%loadVisualization` and `%fetchData` to use this interface (for loading Javascript files and fetching data from Javascript into python)

The `%loadVisualization` and `%fetchData` commands are described below.



### Loading Visualizations

The command for loading visualizations (or any HTML or Javascript file) is
`%loadVisualization`. It requires at least two arguments, a `nameID` for the
loaded set and the files and arguments themselves (`inputX`).

```
%loadVisualization nameID inputJSfile input1 input2 ...
```

Input may be of type:

- [Javascript](#Javascript) 
- [HTML](#HTML)
- CSS
- JSON
- CSV
- [Python values/constants](#Python-values)

The focus of Roundtrip is Javascript, but the other files may be useful for
structuring your visualization and adding data. None but the single Javascript
file (inputJSFile) is required. The inputJSFile should be your driver code, all other
Javascript files will merely be sourced (i.e. to access values)

The input list may also include parameters to be passed to the Javascript
file. See the [Javascript](#Javascript) section for details.

HTML and CSS files will automatically be sourced and applied to the current visualization.
Jupyter's CSS stylings may conflict with our your own (try using !important).

CSV and JSON files are also sourced and then passed as file names, meaning that one can access
the contents by using something like JQuery.

For example, if one was to pass input.js as input1 (see above) containing the code

var x = 12;

Then one could use the following in their driver Javascript code:

$.getScript(argList\[0\], function(){ use the value 'x'}

For CSV files the idea is similar:

(i.e. $.getScript(argList\[0\], function(data){ var valuesFromCSV = data.split(,); someCallBack(valuesFromCSV)})

#### Javascript

If you want to load a Javascript file then the following should be placed around your code:

```
(function(element) {
  require(['d3'], function(d3) {
    //Your code here
  })
})(element);
```

Note the use of `require` here. The argument should be a list of all the keys
specified in require.config (i.e. in the [Examples](#Examples), d3 listed as a
requirement). The key-value pairs you put inside require.config will be used for
the "paths" section for RequireJS. For instance, if you have a local version of 
jquery (same directory as vis_interface), one could put "jquery: 'jquery-1.9.0'" 
(without the outer quotes) in require.config. One can also use CDN links, but they 
must declare themselves properly (see RequireJS for more info on the "paths" section)

The parameter `element` is the `div` in which the javascript will be
contained. For example, to add an svg using d3, you can then in your code add:

`var mySVG = d3.select(element).append('svg');`

*Note: that `element` is the go-to variable to select. Javascript code commonly
uses a call to `.select('body')` or some id'd div when you are trying to append
an svg. You must use `element`.*

##### Passing Arguments to your input Javascript

Arguments may be passed to the Javascript as input parameters on the
`loadVisualization` command. Once in Javascript, they can be accessed through
the Javascript argList.  

Example:
```
%loadVisualization myVis0 walkThroughArgList.js 1 2 3 4
```

This above line can be interpreted as passing the arguments `1, 2, 3, 4` to
the Javascript file `walkThroughArgList.js`. To access these values, traverse
the `argList` inside `walkThroughArgList.js`:

```
walkThroughArgList.js:

(function(element) {
  require(['d3'], function(d3) {
    for (var i = 0; i < argList.length; i++) {
      // Do something with argList[i]
    }
    //...more code here...
  })
})(element);
```

See
walkThroughArgList.js in the [Examples](#Examples) notebook for a
demonstration.

All arguments are interpreted as strings. To use a python variable's value
as one of the arguments, see [Python values](#Python-values)

#### HTML

HTML files may have a style section but otherwise should be treated as
children to a `<body>` element.

#### Python values

For Python values and constants, use % to pass the **value** of the
variable. For example, if your Python variable is called `sum`, use `%sum`.
Note the value will be passed as a string.



### Fetching Data

The `fetchData` command allows you to retrieve data from the Javascript cells
you created using their `nameID.` Data from the variable
`javascriptVariableToFetchFrom` in the `nameID` cell will be set in
`pythonVariableToFetchInto`.

```
%fetchData (nameID, pythonVariableToFetchInto, javascriptVariableToFetchFrom)
```

Note the space between `%fetchData` and the argument list.

A cell with a `%fetchData` call must be run before `pythonVaraibleToFetchInfo`
is populated. It cannot be used again within the same cell.

Both values will be passed as strings.

The Javascript variable must be globally accessible from the Javascript files
associated with `nameID`:

```
var toBeFetched = {
  x: "",
  y: ""
};

(function(element) {
  require(['d3'], function(d3) {
    // ... code here ...

    toBeFetched.x = // some value
    toBeFetched.y = // some value

    // ... more code here ...

  })
})(element);
```

### License

Roundtrip is distributed under the terms of the MIT license.

All contributions must be made under the MIT license.  Copyrights in the
Roundtrip project are retained by contributors.  No copyright assignment is
required to contribute to Roundtrip.

See [LICENSE](https://github.com/hdc-arizona/roundtrip/blob/master/LICENSE) and
[NOTICE](https://github.com/hdc-arizona/roundtrip/blob/master/NOTICE) for details.

SPDX-License-Identifier: MIT
