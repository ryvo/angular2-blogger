var path = require('path');
var webpack = require('webpack');
var helpers = require('./helpers');

var commonConfig = require('./webpack.common.js');

module.exports = {
    devtool: 'cheap-module-eval-source-map', // source-map
    output: {
        path: helpers.root('dist'),
        //publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
}