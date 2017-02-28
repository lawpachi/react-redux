/**
 * Created by shenlu on 17/2/27.
 */
const webpack = require('webpack');
module.exports = {
    context:__dirname + "/src",
    entry:  {
        main: "./index.js",
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'lodash',
            'redux-saga'
        ]
    },
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/,exclude: /node_modules/,loader: "babel"},
            {test: /\.css$/,loaders: ['style-loader','css-loader']}, //这里如果是数组就必须是  loaders
            {test: /\.less$/,exclude: /node_modules/,loaders: ["style-loader", "css-loader!less-loader"]},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),//打包第三方库

        //打包生成css
        //new ExtractTextPlugin("[name].css"),
        //去除没有用的css
        //new HtmlWebpackUncssPlugin(),
    ],
    devServer: {
        contentBase: './src',
        hot: true,
        inline: true,
        secure: false,
        historyApiFallback: true,
        proxy: {

        }
    }
}