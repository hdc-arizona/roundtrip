/*
    EXAMPLE: Loading js file from arg1
*/
function holdDataPoints(){};
var speciesSelected = "";
(function(element) {
    require(['d3'], function(d3) {
    console.log("Hey");
var width = 960,
    size = 400,
    padding = 20;
var x = d3.scaleLinear()
    .range([padding / 2, size - padding / 2]);
var y = d3.scaleLinear()
    .range([size - padding / 2, padding / 2]);
var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(6);
var yAxis = d3.axisLeft()
    .scale(y)
    .ticks(6);
var color = d3.scaleOrdinal(d3.schemeCategory10);
console.log(argList);
d3.csv(argList[1]).then(function(data) {

  var domainByTrait = {},
      traits = d3.keys(data[0]).filter(function(d) { return d !== "species"; }),
      n = traits.length-1;
  traits.forEach(function(trait) {
    domainByTrait[trait] = d3.extent(data, function(d) { return d[trait]; });
  });

  xAxis.tickSize(size * n);
  yAxis.tickSize(-size * n);
  var brush = d3.brush()
      .on("start", brushstart)
      .on("brush", brushmove)
      .on("end", brushend)
      .extent([[0,0],[size,size]]);
  d3.select(element).style("width", "800px").style("height", "600px").style("overflow-y", "auto").style("overflow-x", "auto");
  var svg = d3.select(element).append("svg")
      .style("width", size * n + padding + 10 + "px")
      .style("height", size * n + padding + 10 + "px")
      .style("overflow-y", "auto").style("overflow-x", "auto")
      .append("g")
      .attr("transform", "translate(" + padding / 2 + "," + padding / 2 + ")").style("width", 100 * n + padding + "px").style("height", 100 * n + padding + "px").style("overflow-y", "auto").style("overflow-x", "auto");

  svg.selectAll(".x.axis")
      .data(traits.slice(0, 1))
      .enter().append("g")
      .attr("class", "x axis")
      .attr("transform", function(d, i) { return "translate(" + 0 + ",0)"; })
      .each(function(d) { x.domain(domainByTrait[d]); d3.select(this).call(xAxis); });

  svg.selectAll(".y.axis")
      .data(traits.slice(1, 2))
      .enter().append("g")
      .attr("class", "y axis")
      .attr("transform", function(d, i) { return "translate(0," + i * size + ")"; })
      .each(function(d) { y.domain(domainByTrait[d]); console.log(domainByTrait[d]);  d3.select(this).call(yAxis); });

  var cell = svg.selectAll(".cell")
      .data(cross(traits, traits))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) { return "translate(" + (n - d.i - 1) * size*0 + "," + d.j * size*0 + ")"; })
      .each(plot);
  // Titles for the diagonal.
  cell.append("text")
      .attr("x", padding)
      .attr("y", padding)
      .attr("dy", ".71em")
      .attr("fill", "black")
      .text(function(d) { return d.x; });
  cell.append("text")
      .attr("x", size-(padding+50))
      .attr("y", size-(padding+10))
      .attr("dy", ".71em")
      .attr("fill", "black")
      .text(function(d) { return d.y; });
  cell.call(brush);


  function plot(p) {
    var cell = d3.select(this);
    x.domain(domainByTrait[p.x]);
    y.domain(domainByTrait[p.y]);
    cell.append("rect")
        .attr("class", "frame")
        .attr("x", padding / 2)
        .attr("y", padding / 2)
        .attr("width", size - padding)
        .attr("height", size - padding);
    cell.selectAll("circle")
        .data(data)
      .enter().append("circle")
        .attr("cx", function(d) { return x(d[p.x]); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("r", 4)
        .attr("id", function(d, i){d.id = i; return(i);})
        .style("fill", function(d) { return color(d.species); });
  }

  var brushCell;
  // Clear the previously-active brush, if any.
  function brushstart(p) {
    if (brushCell !== this) {
      d3.select(brushCell).call(brush.move, null);
      brushCell = this;
    x.domain(domainByTrait[p.x]);
    y.domain(domainByTrait[p.y]);
    }
  }
  // Highlight the selected circles.
  function brushmove(p) {
    var e = d3.brushSelection(this);
    svg.selectAll("circle").classed("hidden", function(d) {
      return !e
        ? false
        : (
          e[0][0] > x(+d[p.x]) || x(+d[p.x]) > e[1][0]
          || e[0][1] > y(+d[p.y]) || y(+d[p.y]) > e[1][1]
        );
    }).attr("selected", function(d){if(d3.select(this).attr("class") == "hidden"){ d.selected = 1; return(1);} d.selected = 0; return "0";});
    var listz = svg.selectAll("circle").filter(d => {return(d.selected == "0");}).data();
    var mapz = new Map();
    for(var val of listz){
      if(mapz.get(val.species) == null){
        mapz.set(val.species, 0);
      }
      mapz.set(val.species, mapz.get(val.species)+1);
    }
    speciesSelected = "";
    for(var [ke, val] of mapz){
      speciesSelected+=ke + "," + val+","+color(ke)+",";
    }
    //console.log(stren);
  }
  // If the brush is empty, select all circles.
  function brushend() {
    var e = d3.brushSelection(this);
    if (e === null){
      svg.selectAll(".hidden").attr("selected", function(d){d.selected=0; return("0");});
      svg.selectAll(".hidden").classed("hidden", false);
    }
  }
});

function cross(a, b) {
  var c = [], n = a.length, m = b.length-1, i, j;
  for (i = 0; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
  return c;
}


    })
})(element);
