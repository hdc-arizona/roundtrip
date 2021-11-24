import React from "react"
import ReactDOM from "react-dom"
import {select} from 'd3-selection'
import {scaleLinear} from 'd3-scale'
import { axisBottom } from 'd3-axis';
import {bin} from 'd3';


class Histogram extends React.Component {
    constructor(props){
        super(props);

        this.currentVar = 'Electricity from oil (TWh)';
        this.rawdata = JSON.parse(window.Roundtrip['hist_data']);
        this.data = this.getDataPivot(this.rawdata);
        let bins = bin();
        this.data_bins = bins(Object.values(this.rawdata[this.currentVar]));
        this.ydomains = this.getScaleDomains(this.rawdata);
        this.bindomains = this.getBinDomains(this.data_bins);
        this.agg = {};

        this.num_bins = 10;
        this.chartScale = {
            height: 400,
            width: 950
        };

        this.margins = {
            left: 50,
            right: 200,
            top: 25,
            bottom: 25
        }


        this.xscale = scaleLinear().range([this.margins.left, this.chartScale.width-this.margins.right]).domain([0,this.num_bins]);
        this.yscale = scaleLinear().range([0, this.chartScale.height+this.margins.bottom]).domain([this.bindomains.min, this.bindomains.max]);
    }

    formatAggMetrics(d){
        let agg = {
            "max": {},
            "min": {},
            "mean": {}
        }

        let sum = 0;

        agg.max["0"] = d.x1;
        agg.min["0"] = d.x0;

        for(let val of d){
            sum += val;
        }

        sum = sum/d.length;

        agg.mean["0"] = sum;

        return agg;
        
    }

    getDataPivot(data){
        var pivot = []
        if(Object.keys(data).includes('Code')){
            for(let i of Object.keys(data['Code'])){
                let row = {}
                for(let key of Object.keys(data)){
                    row[key] = data[key][i]
                }

                pivot.push(row);
            }
        }

        return pivot;
    }

    getScaleDomains(data){
        let scaleDomain = {};

        for(let key of Object.keys(data)){
            let first = Object.keys(data[key])[0];
            if(!isNaN(parseFloat(data[key][first]))){
                scaleDomain[key] = this.getMinMax(data[key]);
            }
        }

        return scaleDomain;
    }

    getBinDomains(bins){
        let maxmin = {"max": Number.NEGATIVE_INFINITY, "min": 0}

        for(bin of bins){
            maxmin.max = Math.max(maxmin.max, bin.length);
        }

        return maxmin
    }

    getMinMax(vals_obj){
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

    draw(){
        let svg = select(this.refs.histCanvas)
                    .attr('height', this.chartScale.height)
                    .attr('width', this.chartScale.width);

        let bars = svg
                    .selectAll('.bars')
                    .data(this.data_bins);
        
        bars.enter().append('rect')
            .attr('class', 'bars')
            .attr('fill', 'rgba(0,0,0,.5)')
            .attr('width', this.chartScale.width/this.data_bins.length)
            .attr('height', (d)=>{return this.yscale(d.length)})
            .attr('x', (d,i)=>{return (this.chartScale.width/this.data_bins.length)*i})
            .attr('y', (d)=>{return this.chartScale.height-this.yscale(d.length)})
            .on('mouseover', (evt, d)=>{
                    window.Roundtrip["hist_agg"] = JSON.stringify(this.formatAggMetrics(d));
                    select(evt.target).attr('fill', 'rgba(20, 20, 170, .8)');
                })
            .on('mouseout', (evt,d)=>{select(evt.target).attr('fill', 'rgba(0,0,0,.5)');});
    }

    componentDidMount(){
        this.draw();
    }

    render() {
        return <svg ref="histCanvas"></svg>;
    }
}


ReactDOM.render(<Histogram />, document.getElementById("root"));