/*
    Build bar chart for # of species currently selected in cell above
*/
(function(element) {
    require(['d3'], function(d3) {
       if(argList.length == 0){
         return;
       }
       var holder = argList[0].split(',').slice(0, -1);
       var dataz = [];
       for(var i = 0; i < holder.length; i+=3){
         dataz.push({ "species": holder[i], "count": holder[i+1], "color": holder[i+2] });
       }
       console.log(dataz);
       var svg = d3.select(element).append("svg").style("height", "450px");
       svg.selectAll("rect").data(dataz).enter().append("rect")
                                                 .attr("x", function(d, i) {return((i*110));})
                                                 .attr("y", function(d, i) {return(400-d.count*8);})
                                                 .attr("width", function(d, i) {return(100);})
                                                 .attr("height", function(d, i) {return(d.count*8);})
                                                 .attr("fill", d => {return(d.color);});
       svg.selectAll("text").data(dataz).enter().append("text")
                                                .attr("x", function(d, i) {return((i*110));})
                                                .attr("y", function(d, i) {return(420);})
                                                .text(function(d, i) {return(d.species);});
       svg.selectAll(".lb_text").data(dataz).enter().append("text")
                                                .attr("class", "lb_text")
                                                .attr("x", function(d, i) {return((i*110));})
                                                .attr("y", function(d, i) {return(390-d.count*8);})
                                                .text(function(d, i) {return(d.count);});
    })
})(element);
