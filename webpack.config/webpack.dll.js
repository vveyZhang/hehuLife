var webpack = require('webpack');
var helper=require('./helper');
var vendors = [
    'react',
    'react-dom',
    'react-router',
    'jquery',
    'react-hot-loader',
    'redux',
    'redux-logger',
    'redux-promise',
    'redux-thunk',
    'isomorphic-fetch'
];

module.exports = {
    output: {
        path: './src/build',
        filename: '[name].[chunkhash].js',
        library: '[name]_[chunkhash]'
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: './manifest.json',
            name: '[name]_[chunkhash]',
            context: __dirname
        }),
    ]
};
