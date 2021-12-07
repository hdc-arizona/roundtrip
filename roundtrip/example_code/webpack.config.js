const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    cwd: path.resolve(__dirname)
                }
            }
        ]
    },
    entry: {
        table: [path.resolve(__dirname,'vis_source/Table/table.js')],
        scatter: [path.resolve(__dirname,'vis_source/Scatter/scatter.js')],
        histogram: [path.resolve(__dirname,'vis_source/Histogram/histogram.js')]
    },
    output: {
        publicPath: path.resolve(__dirname, 'vis_source/dist'),
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'vis_source/dist')
    },
    optimization: {
        minimize: false
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'vis_source/Table/table.html'),
            chunks: ['table'],
            filename: 'table_bundle.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'vis_source/Scatter/scatter.html'),
            chunks: ['scatter'],
            filename: 'scatter_bundle.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'vis_source/Histogram/histogram.html'),
            chunks: ['histogram'],
            filename: 'histogram_bundle.html'
        })
    ],
    mode: 'production'
}