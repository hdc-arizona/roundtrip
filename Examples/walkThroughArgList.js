(function(element) {
    require(['d3'], function(d3) {
        for (var walk = 0; walk < argList.length; walk++) {
            console.log(argList[walk]);
        }
        logText(argList)
        function logText(data) {
            console.log(data);
            var svg = d3.select(element).append('svg')
                .attr('width', 400)
                .attr('height', 80);

            svg.selectAll('text')
                .data(data)
                .enter()
                .append('text')
                .attr("x", function(d) {return 25 * (d);})
                .attr("y", function(d) {return 15 * (d);})
                .attr("font-size", "22px")
                .attr("font-family", "sans-serif")
                .text( function(d) { return d; })
            ;
        }
        cleanUp();
    })
})(element);
