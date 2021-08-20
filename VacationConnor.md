# What you were doing
1. Managing the passing of data right now
2. Not up to two way binding but it should be relatively easy based on the javascript `handler` and `proxy` objects you are using; along with Ipython `events` (https://ipython.readthedocs.io/en/stable/config/callbacks.html)
    1. The javascript handler will use `IPython.notebook.kernel.execute()` to run a python function that updates a value in the notebook.
    2. We will get from users the name of the variable in the notebook.
    3. We will use `shell.user_ns[varname]` to access the variable we need to update
    4. When a python variable updates the `events` callback should fire which will call javascript that updates a value in `Roundtrip.py`
        1. Remember that this can produce an infinte loop so add a flag or some kind of debounce. :/
3. We are not tackling locally created python variables with pass by ref yet. We can use them for pass by value though!
4. There is a bug where our roundtrip.js file seems to be multiply defined. I cannot figure out why, but I would like it if I can import it as a js file and not wrap it in a big ol' script
5. Remember to webpack the roundtrip.js at some point
6. The bridge objects should help with managaing multiple bridges, i'm using a one at a time paradigm right now for testing purposes. I'm not sure whether I should be in charge of them or the application developer
    1. It seems like the visualization scoped roundtrip should handle their updating, I'm just not sure if it should be like a signaller pattern where it broadcasts out to all the bridges and updates relevant ones :/
    2. Also I think that the JS Roundtrip variable should actually be per visualziation. Which is complicated but maybe not terrible. It should help to reduce the scope of it a little bit . . . maybe and then variables can be multiply defined. This makes a lot more sense. 
7. Should Rountrip just be the bridge object? And roundtrip be a loader like with hatchet. ` bdg = rt.load_web_files('index.html') `

# How the data passing works
Data passing works by storing data passed from the user to a javascript defined roundtrip object. It needs to be passed to this object because we use the RT handler to detect when the data changes
* Note: this requires manual updates from the user in Javascript code using two way binding
* EG. User retrives an object form this Roundtrip object, then changes data inside the object
* The object itself is not being watched so it will not update
* We may be able to wrap any passed data in a proxy itself though. . . consider this for future


