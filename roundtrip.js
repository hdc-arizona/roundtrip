var Roundtrip_Obj = {};
var refresh_cycle = false;

/**
 * @name unindentPyCode
 * @description Removes leading indentations from a python code string.
 * 
 * @param {string} code Python code in string form
 * @returns Passed code string but with no leading indentations
 */
function unindentPyCode(code){
    let uicode = code.split('\n');
    let indent = 0;

    uicode.forEach((l,i, arr)=>{
        if(i == 0){
            indent = l.search(/\S/);
        }
        arr[i] = l.slice(indent);
    })
    uicode = uicode.join('\n');
    return uicode;
}

/**
 * @name buildPythonAssignment
 * @description Builds up a python code string which assigns javascript data back into jypyter notebook
 * 
 * @param {string} val This is data assigned back to the python code
 * @param {string} py_var This is the variable into which val is assigned
 * @param {string} converter This is a definition of a python function which translates data back to the desired format
 * @returns The python code to be run in the jupyter shell
 */
function buildPythonAssignment(val, py_var, converter){
    var holder = `'${val}'`;
    var code = `${unindentPyCode(converter.code)}`
    code += `\ntmp = ${holder}`;
    code += `\n${py_var} = ${converter.name}(tmp)`

    return code
}

/**
 * @name getCurrentCellID
 * @description Returns the id of the cell which is currently running.
 * @returns The id of the cell currently running
 * @note The key-1 (prior cell) is returned because Jupyter updates the dom denoting
 *      selected nodes before running has completed
 */
function getCurrentCellID(){
    let id;
    let cells = Jupyter.notebook.get_cell_elements();

    for(let key in Object.keys(cells)){{
        if(cells[key] !== undefined && !cells[key].className.includes('unselected')){{
            id = key-1;
        }}
    }}

    return Number(id);
}

/**
 * @name RT_Handler
 * @description A wrapper for our roundtrip object. It is called as a proxy for the
 *      roundtrip object defined above. This enables us to define custom call backs for
 *      gets and sets on the roundtrip object. The custom set handles necessary data conversion,
 *      the registering of two-way bound variables and automatic updating of watched cells. The get
 *      allows users to interact with the underlying object without worrying about the proxy.
 */
var RT_Handler = {
    set(obj, prop, value){
        //Initial pass of value into roundtrip object
        if (typeof value === 'object' && value.hasOwnProperty('origin') && value.origin == 'INIT'){
            
            /**
             * In this code block we need to check if there is already a 
             * an array of id's which are two way bound already defined and 
             * add to it or remove from it
             */
            let id = window.getCurrentCellID();
            value.id = id;
            let new_val = value;

            // Block updating bindings while jupyter is running
            if(refresh_cycle){
                new_val = obj[prop];
                new_val.data = value.data;
                return Reflect.set(obj, prop, new_val);
            }

            if(obj[prop] != undefined){
                new_val = obj[prop];
                new_val.data = value.data;
                if(!new_val.two_way.includes(value.id) && value.two_way === true ){
                    new_val.two_way.push(value.id);
                }
                else if(new_val.two_way.includes(value.id) && value.two_way === false){    
                    const index = new_val.two_way.indexOf(value.id);
                    if (index > -1) {
                        new_val.two_way.splice(index, 1);
                    }
                }
            }
            else{
                if(new_val.two_way == true){
                    new_val.two_way = [value.id];
                }
                else{
                    new_val.two_way = [];
                }
                delete new_val.id;
                delete new_val.from_py;
            }

            return Reflect.set(obj, prop, new_val);
        }
        else {
            if(obj[prop] === undefined){
                obj[prop] = {
                    two_way: [],
                    origin: "JS",
                    data: null,
                    python_var: "",
                    converter: null,
                    type: typeof(value)
                }
            }

            //Subsequent assignments
            var execable_cells = [];
            let origin = 'STANDARD';

            if (typeof value === 'object' && 
                value.hasOwnProperty('origin') && 
                value.origin == 'PYASSIGN'){
                
                origin = value.origin;
                value = value.data;
            }

            require(['https://d3js.org/d3.v4.min.js'], function(d3) {

                // When 2 way bound this calls automatically when something changes
                if (obj[prop] !== undefined && obj[prop]["two_way"].length > 0){

                    let current_cell = Jupyter.notebook.get_selected_index();
                    //Jupyter.notebook.select(i);

                    //Iterate over all unselected cells and just set the data
                    // without updating if our current cell is not two way bound
                    if(origin == 'STANDARD'){
                        if (!obj[prop]['two_way'].includes(current_cell)){
                            return Reflect.set(obj[prop], "data", value);
                        }
                    }


                    /**
                     * We now have a list of registered cells we can execute.
                     * So we look through our javascript variables to see if they
                     * are bound to the same py variable as our current assignment
                     * TODO: Make this list update when cells are moved up or down
                     */
                    let py_var =  obj[prop]["python_var"];
                    for(let js_var in obj){
                        if(obj[js_var]["python_var"] == py_var){
                            let clls = obj[js_var]["two_way"].filter(x => x != current_cell );
                            execable_cells = execable_cells.concat(clls);
                        }
                    }

                    console.log("Exec cells: ", execable_cells);

                    // TODO:THROW AN ERROR IF CONVERTER == NONE
                    const code = buildPythonAssignment(value, obj[prop]["python_var"], obj[prop]["converter"]);
                    
                    //TODO: Turn this into a function that manages error reporting and printing
                    Jupyter.notebook.kernel.execute(code, { shell:{
                                                            reply: function(r){console.log("Response from shell- USE FOR ERROT REPORTING!", r)}
                                                        }
                                                    });

                    refresh_cycle = true;
                    Jupyter.notebook.execute_cells(execable_cells);

                    /**
                     * Test every half second to see if some of the
                     * jupyter cells are still running. Avoids a race condition
                     * where incorrect ids were stored in our roundtrip object.
                     */
                    const test_running = function(){
                        runtest = d3.selectAll(".running");
                        if(runtest.empty()){
                            refresh_cycle = false;
                            return;
                        }
                        else{
                            setTimeout(test_running, 500);
                        }
                    }

                    test_running();
                }

            });
        }   

        return Reflect.set(obj[prop], "data", value);
    },
    get(obj, prop, reciever){
        // console.log("Get: ",...arguments);
        let ret = obj[prop].data
        return ret;  
    }
}

window.Roundtrip = new Proxy(Roundtrip_Obj, RT_Handler);
