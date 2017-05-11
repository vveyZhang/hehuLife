var  webpack=require('webpack');
var helper=require("./helper");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    devtool:"cheap-module-source-map",
    entry:[
        helper.root('src/index')
    ],
    output:{
        path:helper.root('src/dist'),
        filename:'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: helper.root('src')
        }, {
            test: /\.css?$/,
            loader: 'style-loader!css-loader',
            include: helper.root('src')
        },{
            test:/\.(jpg|png)$/,
            loader:'url?limit=8192'
        }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest:require('./../manifest.json')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        //去掉重复
        new webpack.optimize.DedupePlugin(),
        //压缩代码
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        //抽离css
        new ExtractTextPlugin("./bundle.css")
    ],
    resolve: {
        extensions: ['', '.js', '.json','.css','html']
    }

}
