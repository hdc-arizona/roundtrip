import { select, selectAll} from 'd3-selection';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';
import { brush } from 'd3-brush';
import { schemeTableau10 } from 'd3-scale-chromatic';

import './scatter.css';

function getMinMax(vals_obj){
    let minmax = {
        "min": Number.POSITIVE_INFINITY,
        "max": Number.NEGATIVE_INFINITY
    }

    for(let val of Object.keys(vals_obj)){
        minmax.min = Math.min(minmax.min, vals_obj[val])
        minmax.max = Math.max(minmax.max, vals_obj[val])
    }

    return minmax;
}

function update_subselection(selected){
    let subselect = {};
    for(let key of Object.keys(data)){
        subselect[key] = {};

        for(let sel of selected){
            subselect[key][sel] = data[key][sel];
        }
    }

    window.Roundtrip.selected = JSON.stringify(selected);
    window.Roundtrip.subselection = JSON.stringify(subselect);
}

let continentMap = {
    "AF": "Africa",
    "AS": "Asia",
    "EU": "Europe",
    "NA": "North America",
    "OC": "Oceania",
    "OTH": "Unassigned",
    "SA": "South America"
}

let RT = window.Roundtrip;
let json = RT['scatter_src'];
var data = JSON.parse(json);

var present_continents = [... new Set(Object.values(data['Continent']))];

let scaleDomain = {};
let chartScale = {
    height: 400,
    width: 1000,
    margins:{
        left: 50,
        right: 200,
        top: 25,
        bottom: 25
    }
};

/**
 * Setup
 */
for(let key of Object.keys(data)){
    let first = Object.keys(data[key])[0];
    if(!isNaN(parseFloat(data[key][first]))){
        scaleDomain[key] = getMinMax(data[key]);
    }
}

var pivot = []
for(let i of Object.keys(data['Code'])){
    let row = {id: Number(i)}
    for(let key of Object.keys(data)){
        row[key] = data[key][i]
    }

    pivot.push(row);
}


/**
 * Initial Visualization Setup
 */

var options = Object.keys(scaleDomain);
var yselect = 'Electricity from coal (TWh)';
var xselect = 'Electricity from gas (TWh)';
let exclude = [];
var brush_active = false;
var brushed = [];
var valid_data = [];
let margins = chartScale.margins;
let xscale = scaleLinear().range([margins.left, chartScale.width-margins.right]);
let yscale = scaleLinear().range([margins.top, chartScale.height-margins.bottom]);
let colorMap = scaleOrdinal().domain(Object.keys(continentMap)).range(schemeTableau10);


let svg = select(element)
    .select('#scatter-canvas')
    .attr('height', chartScale.height)
    .attr('width', chartScale.width);

var ydropdown = select(element)
    .select('#y-select');

ydropdown.selectAll('.y-options')
    .data(options)
    .enter()
        .append('option')
        .attr('class', 'y-options')
        .attr('value', (d)=>{return d;})
        .attr('selected', (d)=>{
            if(d == yselect){
                return 'true';
            }
            return null;
        })
        .html((d)=>{return d;});

ydropdown.on('change', ()=>{
    yselect = ydropdown
        .property('value');

    if(brush_active){
        svg.select('.brush-area').remove();
        svg.append('g')
            .attr('class', 'brush-area')
            .call(brsh);
    }

    brushed = [];

    render(svg);
})

var xdropdown = select(element)
    .select('#x-select');

xdropdown.selectAll('.x-options')
    .data(options)
    .enter()
        .append('option')
        .attr('class', 'x-options')
        .attr('value', (d)=>{return d;})
        .attr('selected', (d)=>{
            if(d == xselect){
                return 'true';
            }
            return null;
        })
        .html((d)=>{return d;});

xdropdown.on('change', ()=>{
    xselect = xdropdown
        .property('value');

    if(brush_active){
        svg.select('.brush-area').remove();
        svg.append('g')
            .attr('class', 'brush-area')
            .call(brsh);
    }

    brushed = [];

    render(svg);
})

select(element)
    .select("#brush")
    .on('click', ()=>{
        brush_active = !brush_active;
        if(brush_active){
            svg.append('g')
                .attr('class', 'brush-area')
                .call(brsh);
        }
        else{
            svg.select('.brush-area').remove();
        }
        render(svg);
    });


let axisBotSelec = svg.append("g")
    .attr("transform", `translate(0,${chartScale.height-25})`);
let axisLeftSelec = svg.append("g")
        .attr("transform", "translate(50,0)");

let brsh = brush()
    .extent([[0, 0], [chartScale.width, chartScale.height]])
    .on('start', function(){
        brushed = [];
        render(svg);
        update_subselection(brushed);
    })
    .on('brush', function(evt){
    })
    .on('end', function(evt){
        let area = evt.selection;

        valid_data.forEach((d)=>{
            let x = xscale(d[xselect]);
            let y = yscale(d[yselect]);

            if(!brushed.includes(d.id)){
                if(x > area[0][0] && x < area[1][0] &&
                    y > area[0][1] && y < area[1][1]){
                        brushed.push(d.id);
                    }
            }
        });

        render(svg);

        update_subselection(brushed);
    });

let legend = svg.append('g')
                .attr('class', 'legend-grp');

legend.append('rect')
    .attr('width', 140)
    .attr('height', 45+20*present_continents.length)
    .attr('x', chartScale.width - chartScale.margins.right + 20)
    .attr('fill', 'rgba(0,0,0,.1)');

legend.append('text')
        .text('Continent')
        .attr('font-size', 18)
        .attr('x', chartScale.width - chartScale.margins.right + 50)
        .attr('y', 25);


function render(svg){

    let xdomain = [scaleDomain[xselect].min, scaleDomain[xselect].max];
    let ydomain = [scaleDomain[yselect].max, scaleDomain[yselect].min];

    xscale.domain(xdomain);
    yscale.domain(ydomain);

    let xaxis = axisBottom(xscale);
    let yaxis = axisLeft(yscale);

    valid_data = [];

    for(var i = 0; i < pivot.length; i++){
        if(isNaN(xscale(pivot[i][xselect])) || isNaN(yscale(pivot[i][yselect]))){
            continue;
        }
        else{
            valid_data.push(pivot[i]);
        }
    }
   
    axisBotSelec.call(xaxis);
    axisLeftSelec.call(yaxis);

    let dots = svg.selectAll('.dots')
        .data(valid_data, (d)=>{return d.id;});
    

    dots.enter()
        .append('circle')
            .attr('class', 'dots')
            .attr('r', 6)
            .attr('cx', (d)=>{return xscale(d[xselect])})
            .attr('cy', (d)=>{return yscale(d[yselect])})
            .attr('fill', (d)=>{return colorMap(d['Continent'])})
            .on('click', function(evt, d){
                if(!exclude.includes(d.id)){
                    exclude.push(d.id);
                }

                let exjson = JSON.stringify(exclude);
                RT.excluded_select = exjson;
                
                render(svg);
            });
    

    dots.transition()
        .duration(500)
        .attr('cx', (d)=>{return xscale(d[xselect])})
        .attr('cy', (d)=>{return yscale(d[yselect])})
        .attr('r', (d) => {
            if(exclude.includes(d.id)){
                return 8;
            }
            return 6;
        })
        .attr('class', (d) => {
            if(exclude.includes(d.id)){
                return 'exclude dots';
            } 
            if(brushed.includes(d.id)){
                return 'selected-pt dots';
            }
            else {
                return 'dots';
            }
        });

    dots.exit()
        .transition()
        .remove();

    let lglines = legend.selectAll('.lline')
            .data(present_continents);
    
    let line = lglines.enter()
            .append('g')
            .attr('transform', (d,i)=>{return `translate(${chartScale.width - chartScale.margins.right + 45}, ${(20*i) + 45})`;});

    line.append('circle')
        .attr('class', 'lline ref')
        .attr('r', 6)
        .attr('fill', (d)=>{ return colorMap(d); })
    
    line.append('text')
        .attr('x', 10)
        .attr('y', 5)
        .text((d)=>{return continentMap[d];});

}

render(svg);
