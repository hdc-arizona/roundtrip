(function(element) {
    require(['d3'], function(d3) {
        var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width,
        height = canvas.height;
        console.log(canvas);
        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.id; }).strength(0.5))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2))
            // .alphaDecay(0);

        d3.select("input[type=range]")
            .on("input", inputted);
        console.log(argList[1]);
        d3.json(argList[1]).then(function(graph){
            simulation
              .nodes(graph.nodes)
              .on("tick", ticked);

          simulation.force("link")
              .links(graph.links);

          function ticked() {
            context.clearRect(0, 0, width, height);

            context.beginPath();
            graph.links.forEach(drawLink);
            context.strokeStyle = "#aaa";
            context.stroke();

            context.beginPath();
            graph.nodes.forEach(drawNode);
            context.fill();
            context.strokeStyle = "#fff";
            context.stroke();
          }
        });

        function inputted() {
          simulation.force("link").strength(+this.value);
          simulation.alpha(1).restart();
        }

        function drawLink(d) {
          context.moveTo(d.source.x, d.source.y);
          context.lineTo(d.target.x, d.target.y);
        }

        function drawNode(d) {
          context.moveTo(d.x + 3, d.y);
          context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
        }
        var zX = 1;
        window.addEventListener('wheel', function (e) {
            var dir;
            if (!e.ctrlKey) {
              return;
            }
            dir = (e.deltaY > 0) ? 0.1 : -0.1;
            zX += dir;
            element.style.transform = 'scale(' + zX + ')';
            e.preventDefault();
            return;
        });
    })
})(element);
