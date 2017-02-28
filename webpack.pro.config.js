/**
 * Created by shenlu on 17/2/27.
 */
const webpack = require('webpack');
module.exports = {
    context:__dirname + "./src",

    entry:  {
        js:__dirname + "./index.js",//已多次提及的唯一入口文件,
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'lodash',
            'redux-saga'
        ]
    },
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),//打包第三方库
        //有些JS库有自己的依赖树，并且这些库可能有交叉的依赖，删除重复的依赖。
        new webpack.optimize.DedupePlugin(),
        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false,
            mangle: false
        }),
        //定义全局变量。很多库的内部，有process.NODE_ENV的判断语句，改为production。最直观的就是没有所有的debug相关的东西，体积会减少很多
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        //打包生成css
    ],
}