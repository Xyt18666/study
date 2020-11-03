const { resolve } = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');


/*
module:{
    rules:[
        {   
            test://,    //正则验证的 匹配规则
            use:[],  // 多 loader
        },
        {
            test:,
            exculde:,   排除 ***  （多用于排除 nodex下的模块）
            include:, 只检查 XX 下的 文件
            enforce:,  pre 优先执行    post延后执行
            loader:,  单个loader 用 loader
            options:{} //配置选项
        }
    ],
    oneOf:[] //一下配置只会生效一个
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