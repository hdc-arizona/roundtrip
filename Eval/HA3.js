
var ha3 = {
    svgNS: 'http://www.w3.org/2000/svg',
    summary: {},
    selected: [],
    curClicked: null,
    hover: null,
    detailitem: null,
    scatter1: null,
    scatter2: null,
    detailview: null,
    brush: null
};

window.addEventListener('load', function () {
    ha3.scatter1 = createScatter('scatter1', 'sugars', 'carbo', 'shelf'); 
    ha3.scatter2 = createScatter('scatter2', 'potassium', 'sodium', 'shelf');
});

function brushFilter(lx, rx, by, ty, circ){
    cx = circ.cx.baseVal.value;
    cy = circ.cy.baseVal.value;
    return (((cx+2.5) >= lx) && ((cx-2.5) <= rx) && ((cy+2.5) >= by) && ((cy-2.5) <= ty));
}

function startBrush(elm){
    var collection = d3.event.selection;
    //console.log(collection);
    leftX = collection[0][0];
    rightX = collection[1][0];
    botY = collection[0][1];
    topY = collection[1][1];
    //var selection = d3.select("#"+elm).selectAll("circle").nodes().filter(function(d) { return(brushFilter(leftX, rightX, botY, topY, d)); });
    // Clean up circles outside of the brush
    d3.selectAll("circle").attr("brushed", 0).filter(function(d) {
                                    // If we have no clicked circles then every circle can be colored yellow
                                    if(ha3.curClicked == null){
                                      return(true);
                                    }
                                    // Otherwise check to see if circle is clicked
                                    return(d.name != ha3.curClicked.attr("idNum"));
                                  }).attr("fill", function(d) { return(d3.select(this).attr("prevFill")); }).attr("r", 5).attr("stroke", "none");

    // Color/select the other circles in our brush
    var selection = d3.selectAll("circle").filter(function(d) {
                                                    // Annoying way of getting the node for each item in the selection
                                                    var name = d.name;
                                                    var circ = d3.select("#"+elm).selectAll("circle").filter(function(d) { return(d.name == name); }).node();
                                                    return(brushFilter(leftX, rightX, botY, topY, circ)); 
                                                  }).attr("fill", function(d) { return handleBrush(d); } ).attr("r", 8).attr("stroke", "black").attr("brushed", 1);
}

function handleBrush(d){
    if((ha3.curClicked == null) || (ha3.curClicked != null && d.name != ha3.curClicked.attr("idNum"))){
        return("yellow");
    }
    return("red");
}

function handleMouseOver(d, i){
    //console.log(d3.selectAll("circle").filter(function(da) { return da.name == d.name; }));
    if(d3.select(this).attr("clicked") == 0 && ((ha3.curClicked == null) || (ha3.curClicked != null && d3.select(this).attr("idNum") != ha3.curClicked.attr("idNum")))){
        d3.select(this).attr("fill", "yellow").attr("r", 8).attr("stroke", "black");
        d3.selectAll("circle").filter(function(da) { return da.name == d.name; }).attr("fill", "yellow").attr("r", 8).attr("stroke", "black");
    }
}

function handleMouseOut(d, i){
    if(d3.select(this).attr("brushed") == 0 && d3.select(this).attr("clicked") == 0 && ((ha3.curClicked == null) || (ha3.curClicked != null && d3.select(this).attr("idNum") != ha3.curClicked.attr("idNum")))){
        d3.select(this).attr("fill", d3.select(this).attr("prevFill")).attr("r", 5).attr("stroke", "none");
        d3.selectAll("circle").filter(function(da) { return da.name == d.name; }).attr("fill", d3.select(this).attr("prevFill")).attr("r", 5).attr("stroke", "none");
    }
}

function handleClick(d, i){
    // Reset currrent clicked (movie example only allows for one red circle)
    if(ha3.curClicked != null && d3.select(this).attr("idNum") != ha3.curClicked.attr("idNum")){
        //console.log(d3.selectAll("circle").filter(function(da) { return da.name == ha3.curClicked.name; }));
        d3.selectAll("circle").filter(function(da) { return da.name == ha3.curClicked.attr("idNum"); }).attr("fill", function(d) { return d3.select(this).attr("prevFill");}).attr("r", 5).attr("stroke", "none");
        if(d3.select(this).attr("brushed") == 1){
          d3.selectAll("circle").filter(function(da) { return da.name == ha3.curClicked.attr("idNum"); }).attr("fill", "yellow").attr("r", 8).attr("stroke", "black");
        }
        //ha3.curClicked.attr("fill", ha3.curClicked.attr("prevFill")).attr("r", 5).attr("stroke", "none");
        ha3.curClicked.attr("clicked", 0);
    }
    if(d3.select(this).attr("clicked") == 0){
        ha3.curClicked = d3.select(this);
        d3.selectAll("circle").filter(function(da) { return da.name == d.name; }).attr("fill", "red").attr("r", 8).attr("stroke", "black");
        //d3.select(this).attr("fill", "red").attr("r", 8).attr("stroke", "black");
        d3.select(this).attr("clicked", 1)
        d3.selectAll("#details").html("");
        var detail = d3.select("#details");
        var selectedData = d3.entries(cereals.filter(function(da) { return da.name == d.name; })[0]);
        detail.selectAll("#rowdetail").data(selectedData).enter().append("div").attr("class", "rowdetail").text(function(d){return(d.key + ": " + d.value);});
    } else {
        if(d3.select(this).attr("brushed") == 1){
          d3.selectAll("circle").filter(function(da) { return da.name == d.name; }).attr("fill", "yellow").attr("r", 8).attr("stroke", "black");
        } else {
          d3.selectAll("circle").filter(function(da) { return da.name == d.name; }).attr("fill", function(d) { return d3.select(this).attr("prevFill");}).attr("r", 5).attr("stroke", "none");
        }
        ha3.curClicked = null
        d3.select(this).attr("clicked", 0);
        d3.selectAll("#details").html("");
    }
}

// Helper function for the dimension scaling
// Find a max or min in a given set of values for a list of objects
function valInCereals(name, minOrMax){
    var temp = cereals[0][name];
    for(var cerealIndex in cereals){
        cereal = cereals[cerealIndex];
        temp = minOrMax(temp, cereal[name]);
    }
    return temp;
}

var createScatter = function(elm, rowx, rowy, clr) {
    var _svg = d3.select('#' + elm);
    var xMin = valInCereals(rowx, Math.min);
    var xMax = valInCereals(rowx, Math.max);
    var yMin = valInCereals(rowy, Math.min);
    var yMax = valInCereals(rowy, Math.max);
    var xScale = d3.scaleLinear().domain([xMin, xMax]).range([50, 450]);
    var yScale = d3.scaleLinear().domain([yMin, yMax]).range([450, 50]);
    var colScale = d3.scaleOrdinal(d3.schemeCategory10);
    var yAxis = d3.axisLeft(d3.scaleLinear().domain([yMin, yMax]).range([450, 50]));
    var xAxis = d3.axisBottom(xScale);
    _svg.append("g").attr("transform", "translate(50,0)").call(yAxis);
    _svg.append("g").attr("transform", "translate(0,450)").call(xAxis);
    // Add brush
    var brush = d3.brush().extent([[50, 50], [450, 450]]).on("start brush", function(){ return(startBrush(elm));});
    _svg.append("g").attr("class", "brush").call(brush);
    // Plot
    _svg.selectAll("circle").data(cereals).enter().append("circle").attr("cx", function(d) { return(xScale(d[rowx])); })
                                                                          .attr("cy", function(d) { return(yScale(d[rowy])); })
                                                                          .attr("fill", function(d) { return(colScale(d[clr])); })
                                                                          .attr("r", 5)
                                                                          .on("mouseover", handleMouseOver)
                                                                          .on("mouseout", handleMouseOut)
                                                                          .on("click", handleClick)
                                                                          .attr("title", function(d) { return(d.name); })
                                                                          .attr("prevFill", function(d) { return(colScale(d[clr])); })
                                                                          .attr("clicked", 0)
                                                                          .attr("brushed", 0)
                                                                          .attr("idNum", function(d) { return(d.name); })
                                                                          .append("title").text(function(d) { return(d.name); });
                                                                          
    
    
    return {
	update: function(belm) {
	    _update();
	}
    };

};

