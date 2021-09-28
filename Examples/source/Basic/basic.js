(function(element){
    require(['https://d3js.org/d3.v4.min.js'], function(d3) {
        const Roundtrip = window.Roundtrip;
        const elem = element[0].parentNode.parentNode;
        const data = Roundtrip.test

        const t = d3.select(elem).select('#passed1');
        t.text(JSON.stringify(data));

        d3.select(elem).select("#demo").on("click", function(){
            Roundtrip.test = "Modified in js code.";
            t.text(Roundtrip.test);
        })

        //it is reccomended to not work directly off the roundtrip
        // object and instead work through a local variable
        var df = JSON.parse(Roundtrip.js_df);
        var pivot = [];

        for (var cat in df.categs){
            var tmp = {};
            tmp.categ = df.categs[cat];
            tmp.val = df.vals[cat];
            pivot.push(tmp);
        }

        console.log(pivot);

        var df_enter = d3.select(elem).select("#bound1")
            .selectAll(".data-elem")
            .data(pivot)
            .enter();

        var line = df_enter.append("div")
                .attr("class", "data-elem")
                .style("margin-bottom", '15px');
        line.append("div")
                .text(d=>{return d.categ + " "});
        line.append("input")
                    .attr("type", "text")
                    .attr("value", d=>d.val)
                    .on('change', function(d, i){
                        df.vals[i.toString()] = parseFloat(d3.select(this).property("value"));
                    });

        d3.select(elem).select("#binding-demo")
                    .on("click", function(){
                        console.log(JSON.stringify(df));
                        Roundtrip.js_df = JSON.stringify(df);
                    })
        
    })
})(element);