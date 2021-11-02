const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    entry: {
        table: ['./Examples/source/Table/table.js'],
        scatter: ['./Examples/source/Scatter/scatter.js']
    },
    output: {
        publicPath: 'Examples/dist/',
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'Examples/dist')
    },
    optimization: {
        minimize: false
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './Examples/source/Table/table.html',
            chunks: ['table'],
            filename: 'table_bundle.html'
        }),
        new HtmlWebpackPlugin({
            template: './Examples/source/Scatter/scatter.html',
            chunks: ['scatter'],
            filename: 'scatter_bundle.html'
        })],
    mode: 'production'
}