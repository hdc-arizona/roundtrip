var Roundtrip_Obj = {};
var TypeMap = {};
var sem = 0; 

function retrieveTextNodes(elem){
    /**
     * Adapted from the stack overflow answer: https://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page
     */
    var n, a=[], walk=document.createTreeWalker(elem,NodeFilter.SHOW_TEXT,null,false);
    while(n=walk.nextNode()){
        a.push(n);
    }
    return a;
  }

function relodable(py_var, token_arr){
    console.log(py_var, token_arr);
    for(let t = 0; t < token_arr.length; t++){
        if(token_arr[t][0] == "?" && token_arr[t].slice(1) === py_var){
            return true;
        }
    }

    return false;
}


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

function buildPythonAssignment(val, py_var, converter){
    var holder = `'${val}'`;
    var code = `${unindentPyCode(converter.code)}`
    code += `\ntmp = eval(${holder})`;
    code += `\n${py_var} = ${converter.name}(tmp)`

    return code
}

var RT_Handler = {
    set(obj, prop, value){

        //Initial pass of value into roundtrip object
        if (typeof value === 'object' &&
        !Array.isArray(value) &&
        value !== null){
            return Reflect.set(...arguments);
        }

        //Subsequent assignments
        var execable_cells = [];
        require(['https://d3js.org/d3.v4.min.js'], function(d3) {
            // When 2 way bound this calls automatically when something changes
            if (obj[prop] !== undefined && obj[prop]["two_way"] === "true"){
                if(sem === 0){
                    
                        let cells = Jupyter.notebook.get_cell_elements();

                        //Iterate over all unselected cells and find the bound
                        // notebook variable
                        for (const cell_ndx in Object.getOwnPropertyNames(cells)){
                        if((cells[cell_ndx] !== undefined) && cells[cell_ndx].className.includes("unselected") ){
                                const varselect = d3.select(cells[cell_ndx])
                                .selectAll(".cm-operator")
                                .filter(function(){
                                    return d3.select(this).text() === '?'; 
                                });

                                /**
                                 * Retrieve all the text from a code block which contains "?python_var"
                                 * We exclude cells which assign a value into "python_var"
                                 * because we do not want to automatically override the work
                                 * done in the visualization.
                                 */
                                if(!varselect.empty()){
                                    const code_tree = d3.select(cells[cell_ndx]).select(".CodeMirror-code").node()
                                    const text = retrieveTextNodes(code_tree);
                                    execable_cells.push(cell_ndx);
                                }
                            }
                        }

                        // TODO:THROW AN ERROR IF CONVERTER == NONE
                        console.log("Object on 2 way bound call: ", obj[prop], prop)
                        const code = buildPythonAssignment(value, obj[prop]["python_var"], obj[prop]["converter"]);
                        Jupyter.notebook.kernel.execute(code);
                        Jupyter.notebook.execute_cells(execable_cells);
                }
            }

        })

        return Reflect.set(obj[prop], "data", value);
    },
    get(obj, prop, reciever){
        // console.log("Get: ",...arguments);
        let ret = obj[prop].data
        return ret;  
    }
}

window.Roundtrip = new Proxy(Roundtrip_Obj, RT_Handler);
