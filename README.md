Roundtrip: An interface for loading javascript (notably D3 visualizations) into Jupyter Notebooks. Allows for one to transfer data between the Python (i.e. from the cells in a Jupyter Notebook) and the Javascript one wants to load. I feel like the example notebook is the first thing to look at (basic uses for the interface).

To use with your own notebook:
1) Copy over vis\_interface.py into the same directory as your notebook.
2) Add a new cell and run the magic command "%load\_ext vis\_interface"
3) Use the magic commands "%loadVisualization" and "%fetchData" to use this interface (for loading javascript files and fetching data from javascript into python)

Try running the notebook "ExampleNotebook.ipynb" in the "Examples" directory (you may want to clean the output cells by running restart and clear output once you load the notebook). Running each of the cells will demonstrate loading visualizations, fetching data, and other aspects of the interface. The first set of examples can be found in basicExamples, which demonstrates basic uses of the interface. The folder katyExample shows the progress I have made so far in getting Katy's example to work. Finally the directory otherExamples shows more complex D3 visualizations with different input types, transistions, and more advanced iteractions.
