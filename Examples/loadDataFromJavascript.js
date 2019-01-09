/*
    EXAMPLE: Loading js file from arg1
*/
var holdDataPoints = [];
(function(element) {
    require(['d3'], function(d3) {
        console.log(argList[0]);
        $.getScript(argList[0], function() {
        var data = inputListExample;
        var svg = d3.select(element).append('svg')
            .attr('width', 400)
            .attr('height', 200);
            
        svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .on("mouseover", function(d, i) { d3.select(this).attr("r", function(d) {return 1;}); holdDataPoints.push(d.name); console.log(holdDataPoints); })
            .attr("cx", function(d, i) {return 40 * (i + 1);})
            .attr("cy", function(d, i) {return 100 + 30 * (i % 3 - 1);})
            .style("fill", "#1570a4")
            .transition().duration(2000)
            .attr("r", function(d) {return 3*d.radius;});  
        console.log(svg.selectAll('circle').data());
        });
        //cleanUp();
    })
})(element);
