import * as d3 from 'd3';
import './table.css';

let json = window.Roundtrip['table_src']
let data = JSON.parse(json)

var pivot = []
if(Object.keys(data).includes('Code')){
    for(let i of Object.keys(data['Code'])){
        let row = {}
        for(let key of Object.keys(data)){
            row[key] = data[key][i];
        }

        pivot.push(row);
    }
}

let table = d3.select(element)
    .select('#table-area')
    .append('table')
    .attr('border', '1');


table.append('tr')
    .selectAll('.header')
    .data(Object.keys(data))
    .enter()
    .append('th')
    .attr('class', 'header')
    .html(d=>d);


let newrows = table.selectAll('.tbrow')
    .data(pivot)
    .enter()
    .append('tr')
    .attr('class', (d, i) => {
        if(i % 2 == 0){
            return 'tbrow';
        }
        else{
            return 'tbrow alt';
        }
    });

newrows.selectAll('.tbcells')
        .data(d=>{return Object.values(d);})
        .enter()
        .append('td')
            .attr('class', 'tbcells')
            .html(d=>{return d;});

    

