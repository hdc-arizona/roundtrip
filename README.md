### Roundtrip

An interface for loading javascript (notably D3 visualizations) into Jupyter
Notebooks. Allows for one to transfer data between the Python (i.e. from the
cells in a Jupyter Notebook) and the Javascript one wants to load. 

#### Using Roundtrip in your Notebook
 
To use with your own notebook:

1) Copy `vis\_interface.py` and require.config into the same directory as your notebook.
2) Add a new cell and run the magic command `%load\_ext vis\_interface`
3) Use the magic commands `%loadVisualization` and `%fetchData` to use this interface (for loading javascript files and fetching data from javascript into python)


#### Example

Try running the notebook "ExampleNotebook.ipynb" in the "Examples" directory
(you may want to clean the output cells by running restart and clear output
once you load the notebook). Running each of the cells will demonstrate
loading visualizations, fetching data, and other aspects of the interface. 

#### API Details

There are two main functions to be used in this interface, loadVisualization and fetchData.

loadVisualization nameID, input1, input2, input3, ...
\ After nameID the other arguments can be javascript, html, css, json, csv, or python values/constants (use % to pass the value of a python variable, i.e. %sum) ect. Javascript filesShould be modified according to the section below ("Modification to javascript files"). html files can have a style section, but otherwise should be treated as if one was entering DOM elements directly into a pair of <body></body> tags. Everything past the name/javascript file is optional. 

Accessing arguments comes from the javascript list argList. See walkThroughArgList.js as an example

fetchData (nameID, pythonVariableToFetchInto, javascriptVariableToFetchFrom)
\ Fetchs the javascript variable "javascriptVariableToFetchFrom" into the python variable "pythonVariableToFetchInto".

Types: Currently values passed in/fetched out are passed as strings (i.e. %sum will pass str(sum) as an argument to the javascript file)

#### Modification to javascript files
If you want to load a javascript file then the following should be placed around your code:

(function(element) {
\ require(\['d3'\], function(d3) {
\  Your code here
\ })
})(element);

Note the use of require here. The argument should be a list of all the keys specified in require.config (i.e. in the example above I have d3 listed as my requirement)
