## Roundtrip

An interface for loading javascript (notably D3 visualizations) into Jupyter
Notebooks. Allows for one to transfer data between the Python (i.e. from the
cells in a Jupyter Notebook) and the Javascript one wants to load. 

[Adding Roundtrip to Your Notebook](#Using-Roundtrip-in-your-Notebook)
[Loading Visualizations](#Loading-Visualizations)
[Fetching Data from Visualizations](#Fetching-Data)
[Example Notebook](#Examples)



### Using Roundtrip in your Notebook
 
To use with your own notebook:

1) Copy `vis_interface.py` and require.config into the same directory as your notebook.
2) Add a new cell and run the magic command `%load_ext vis_interface`
3) Use the magic commands `%loadVisualization` and `%fetchData` to use this interface (for loading javascript files and fetching data from javascript into python)


The `%loadVisualization` and `%fetchData` commands are described below.

### Loading Visualizations

The command for loading visualizations (or any HTML or Javascript file) is
`%loadVisualization`. It requires at least two arguments, a `nameID` for the
loaded set and the files and arguments themselves (`inputX`).

```
%loadVisualization nameID input1 input2 input3 ...
```

Input may be of type:

- [Javascript](#Javascript) 
- [HTML](#HTML)
- CSS
- JSON
- CSV
- [Python values/constants](#Python values)

The focus of Roundtrip is Javascript, but the other files may be useful for
structuring your visualization and adding data. None but the single Javascript
file is required.

The input list may also include parameters to be passed to the Javascript
file. See the [Javascript](#Javascript) section for details.

#### Javascript

If you want to load a javascript file then the following should be placed around your code:

```
(function(element) {
  require(\['d3'\], function(d3) {
    //Your code here
  })
})(element);
```

Note the use of `require` here. The argument should be a list of all the keys
specified in require.config (i.e. in the [Examples](#Examples), d3 listed as a
requirement)

The parameter `element` is the `div` in which the javascript will be
contained. For example, if you want to add an svg using d3, you can then in your code add:

`var mySVG = d3.select(element).append('svg');`

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
  require(\['d3'\], function(d3) {
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


#### HTML

HTML files may have a style section but otherwise should be treated as
children to a `<body>` element.

#### Python values

For Python values and constants, use % to pass the **value** of the
variable. For example, if your Python variable is called `sum`, use `%sum`.
Note the value will be passed as a string.



### Fetching Data

The `fetchData` command allows you to retrieve data from the javascript cells
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



### Examples

Try running the notebook "ExampleNotebook.ipynb" in the "Examples" directory:

```
jupyter-notebook Examples/ExampleNotebook.ipynb
```

On load, you may need to clean the output by running `Restart & Clear Output`
from the `Kernel` menu in Jupyter.

Running the cells will demonstrate:

1. Loading Roundtrip
2. Loading a sample visualization
3. Fetching data out of visualizations
