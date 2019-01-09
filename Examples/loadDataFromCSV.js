(function(element) {
    require(['d3'], function(d3) {
        jQuery.get(argList[0], function(data) {
            var values = data.split(','); // array of data
            loaded(values);
        });
        function loaded(data) {
            var svg = d3.select(element).append('svg')
                .attr('width', 400)
                .attr('height', 200);
            svg.selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .on("mouseover", function(d, i) { d3.select(this).attr("r", function(d) {return 1;}) })
                .attr("cx", function(d, i) {return 40 * (i + 1);})
                .attr("cy", function(d, i) {return 100 + 30 * (i % 3 - 1);})
                .style("fill", "#1570a4")
                .transition().duration(2000)
                .attr("r", function(d) {return 2*d;})
            ;
            console.log(svg.selectAll('circle').data());
        }
    })
})(element);

