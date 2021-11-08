var Roundtrip_Obj = {};
var refresh_cycle = false;
var clicked_cell = null;

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


function bindClickDetectToCells(){
    let cells = Jupyter.notebook.get_cell_elements();

    for(let i in Object.keys(cells)){
        cell = cells[i];

        if(cell !== undefined){
            cell.addEventListener('mousedown', () => {
                    clicked_cell = i;
                }, true)
        }
    }
}

bindClickDetectToCells();

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
            let ida = Jupyter.notebook.get_selected_index()-1;
            value.id = ida;
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
                
                if(value.two_way === true){
                    if(!Object.keys(new_val.two_way).includes(value['python_var'])){
                        new_val.two_way[value['python_var']] = [];
                    }

                    let pybinding = new_val.two_way[value['python_var']];

                    if(!pybinding.includes(value.id)){
                        pybinding.push(value.id);
                    }

                }

                else if(value.two_way === false && Object.keys(new_val.two_way).includes(value['python_var'])){
                    let pybinding = new_val.two_way[value['python_var']];
                    const index = pybinding.indexOf(value.id);
                    
                    if (index > -1) {
                        pybinding.splice(index, 1);
                    }
                }
            }
            else{
                if(new_val.two_way == true){
                    new_val.two_way = {};
                    new_val.two_way[value['python_var']] = [value.id];
                }
                else{
                    new_val.two_way = {};
                }
                delete new_val.id;
                delete new_val.from_py;
                delete new_val.python_var;
            }

            return Reflect.set(obj, prop, new_val);
        }
        else {
            if(obj[prop] === undefined){
                obj[prop] = {
                    two_way: {},
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
            let python_var = '';

            if (typeof value === 'object' && 
                value.hasOwnProperty('origin') && 
                value.origin == 'PYASSIGN'){

                origin = value.origin;
                python_var = value.python_var;
                value = value.data;
            }

            require(['https://d3js.org/d3.v4.min.js'], function(d3) {

                // When 2 way bound this calls automatically when something changes
                if (obj[prop] !== undefined && Object.keys(obj[prop]["two_way"]).length > 0){

                    let current_cell = Number(clicked_cell);
                    let py_var = '';

                    //ust set the data without updating if our current cell is not two way bound
                    if(origin == 'STANDARD'){
                        let found = false;
                        for(let key in obj[prop]["two_way"]){
                            if (obj[prop]["two_way"][key].includes(current_cell)){
                                found = true;
                                py_var = key;
                            }
                        }

                        if(!found){
                            return Reflect.set(obj[prop], "data", value);
                        }
                    }


                    if(origin == 'PYASSIGN'){
                        py_var = python_var;
                    }

                    /**
                     * We now have a list of registered cells we can execute.
                     * So we look through our javascript variables to see if they
                     * are bound to the same py variable as our current assignment
                     * TODO: Make this list update when cells are moved up or down
                     */

                    for(let js_var in obj){
                        let boundpyvars =  Object.keys(obj[js_var]["two_way"]);

                        if(boundpyvars.includes(py_var)){
                            let clls = obj[js_var]["two_way"][py_var].filter(x => x != current_cell );
                            execable_cells = execable_cells.concat(clls);
                        }
                    }


                    // TODO:THROW AN ERROR IF CONVERTER == NONE
                    const code = buildPythonAssignment(value, py_var, obj[prop]["converter"]);
                    
                    //TODO: Turn this into a function that manages error reporting and printing
                    Jupyter.notebook.kernel.execute(code, { shell:{
                                                            reply: function(r){
                                                                //console.log("Response from shell- USE FOR ERROR REPORTING!", r)
                                                            }
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
