const { resolve } = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');


/*
output:
    filename        //文件名称 + 目录
    path            //输出文件目录（所有资源输出的公共目录）
    publicPath      // 所有资源引入公共路径 前缀 ,一般用于生产环境
    chunkFilename   //非入口chunk 的命名
    library         // 整个库向外暴露的变量名
    libraryTarget   //  变量添加到 那个上  



*/


module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'[name].js', //文件名称 + 目录
        path:resolve(__dirname,'build'),  //输出文件目录（所有资源输出的公共目录）
        publicPath:'/', // 所有资源引入公共路径 前缀
        chunkFilename:"js/[name]_chunk.js",  //非入口chunk 的命名
        library:'[name]',// 整个库向外暴露的变量名
        libraryTarget:"window"//  变量添加到 那个上  
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development'
};