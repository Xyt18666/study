const { resolve } = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');


/*
entry: 入口起点
    1. string     './src/index.js'
        单入口
        打包生成一个 chunk , 生成一个 bundle文件
        此时 chunk 的名称默认 的 main  , 所有生成的 叫 main.js

    2. array
        多入口
        打包生成一个 chunk , 生成一个 bundle文件
        用于 HMR 中，让 html 热更新生效

    3. object
        多入口
        有几个入口，就生成几个 chunk ,输出几个 bundle 文件
        此时 chunk 的名称 是 key 

    4. 混合用法：
        多入口
        多个文件生成一个 文件
        {
            index:['./src/index.js','./src/xxx.js']
            add:'./src/add.js'
        }

*/


module.exports = {
    entry:{
        index:'./src/index.js',
        add:'./src/add.js'
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'build')
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development'
};