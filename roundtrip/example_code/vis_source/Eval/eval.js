circlesClicked = [];

var getResults;

(function(element) {
    require(['d3'], function(d3) {

    function getResultsGetter(){
      var res = "";
      for(var i = 0; i < circlesClicked.length; i++){
          res += circlesClicked[i];
      }
      return res;
    }
    getResults = getResultsGetter;

    function handleClick(d, i){
      if(d3.select(this).attr("clicked") == 0){
        d3.selectAll("circle").filter(function(da) { return da.name == d.name; }).attr("fill", "red").attr("r", 8).attr("stroke", "black");
        d3.select(this).attr("clicked", 1)
        circlesClicked.push(d.name+" ");
      } else {
        d3.selectAll("circle").filter(function(da) { return da.name == d.name; }).attr("fill", function(d) { return d3.select(this).attr("prevFill");}).attr("r", 5).attr("stroke", "none");
        d3.select(this).attr("clicked", 0);
        circlesClicked.splice(circlesClicked.indexOf(d.name+" "), 1);
      }
    } 

    function valInCereals(name, minOrMax){
      var temp = cereals[0][name];
      for(var cerealIndex in cereals){
        cereal = cereals[cerealIndex];
        temp = minOrMax(temp, cereal[name]);
      }
      return temp;
    }

    run('', 'sugars', 'carbo', 'shelf');
    function run(elm, rowx, rowy, clr){
      var _svg = d3.select(element).append("svg").attr("width", 500).attr("height", 500);
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
      // Plot
      _svg.selectAll("circle").data(cereals).enter().append("circle").attr("cx", function(d) { return(xScale(d[rowx])); })
                                                                            .attr("cy", function(d) { return(yScale(d[rowy])); })
                                                                            .attr("fill", function(d) { return(colScale(d[clr])); })
                                                                            .attr("r", 5)
                                                                            .on("click", handleClick)
                                                                            .attr("title", function(d) { return(d.name); })
                                                                            .attr("prevFill", function(d) { return(colScale(d[clr])); })
                                                                            .attr("clicked", 0)
                                                                            .attr("brushed", 0)
                                                                            .attr("idNum", function(d) { return(d.name); })
                                                                            .append("title").text(function(d) { return(d.name); });
    }
    })
})(element);
