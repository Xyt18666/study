const { resolve } = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');


/*
optimization：{  生成环境使用
    splitChunks:{
        chunks：'all',
------以下为默认值------，可以不写

        minSize:30*1024, 分割 chunk 最小 30kb
        maxSize:0, 
        minChunks:1,  最少要被引用一次
        maxAsyncRequest:5,   按需下载时，并行下载的数量为5
        maxInitialRequsets:3;  入口文件最大并行请求数量
        automaticNameDelimiter:'~'  名称链接符
        name:true,  可以使用命名规则
        cacheGroups:{分割chunk 的组
            vendors:{
                test://,  正则匹配 
                priority:-10  优先级
            },
            default:{
                minChunks:2,
                priority:-20  ,
                reusExistingChunk:true, 如果当前要打包的模块 和 之前已经提取的模块是同一个 ，就会复用
            }
        }, 
    },
    runtimeChunk:{  //将当前模块的 记录的其他模块的hash 单独打包为一个文件 
        name:entrypoint => runtime-${entrypoint.name}
    },
    minmizer:[ 配置 生产环境的压缩 方案 js 和css
        new TerserWebpackPlugin({
            cache:true, 开启缓存
            parallel:true, 开启多进程打包
            sourceMap:true,  启用 sourcs-map
        })
    ]
}  
 






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
    // module:{
    //     rules:[
        
    //     ]
    // }
   

    mode:'development'
};