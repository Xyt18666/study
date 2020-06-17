const { resolve } = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');


/*


resolve:{  //解析模块的规则
    alias：{//配置解析模块 路径 别名 （简化了 相同路径的书写）
        $css:resolve(__dirname,"src/xxx"),
    } ,
    extensions:['.js','.json'] , //配置省略文件路径 的后缀 ，(寻找执行时 ，从前向后)
    nodules:[   //告诉webpack 解析模块去哪个 目录 

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