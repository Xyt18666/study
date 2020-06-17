
/*
使用 dll 技术 对某些库(jq react vue) 进行单独打包

当运行 webpack 时 ，默认查找 webpack.config  配置文件
所有需要改指令来 运行 webpack.dll 文件

webpack --config webpack.dll.js

*/
const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
    entry:{
        //打包生成的name  : [ 要打包的库]
        jquery:["jquery"] 
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'dll'),
        library: '[name]_[hash]' // 打包的库里向外暴露出去的内容叫什么名字
    },
    plugins:[ 
        //打包生成一个 manifest 提供映射关系
        new webpack.DllPlugin({
            name:'[name]_[hash]', //映射库的 暴露的内容名称
            path:resolve(__dirname,'dll/manifest.json')
        })
    ],
    mode:'production'
}