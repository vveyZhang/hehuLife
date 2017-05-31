var webpack = require('webpack');
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
    'isomorphic-fetch',
    "antd",
    'react-router-redux',
    'prop-types',
];

module.exports = {
    output: {
        path: './build',
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
