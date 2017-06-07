var  webpack=require('webpack');
var helper=require("./helper");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    devtool:"cheap-module-source-map",
    entry:[
        helper.root('app')
    ],
    output:{
        path:helper.root('./dist'),
        filename:'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        },{
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        },
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

    ],
    resolve: {
        extensions: ['', '.js', '.json','.css','html']
    }

}
