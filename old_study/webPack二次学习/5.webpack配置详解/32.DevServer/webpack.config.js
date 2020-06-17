const { resolve } = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');


/*
devServer：{开发环境使用
    watchContentBase:true,  监视 目录下的  contentBase 文件，一旦变化，就会重新打包
    wathOotions:{}  忽略xx 文件
    contentBase： ， //运行代码的目录
    compress:,   启动gzip压缩
    port:, 端口号
    host:,域名
    open:true， 自动打开浏览器
    hot: true, 打开 HMR
    clientLogLevel:''none, 不要显示服务器日志
    quiet：true,  除了一些基本的启动信息，其他内容都不要打印
    overlay：false  ，  如果出错，不要全屏提示
    proxy:{ 用于  服务器代理 ，开发环境跨域问题
        './api':{
            target:'http://loalhost:300',
            pathRewrite:{ 请求路径重写
                '^/api':'',
            }
        }
    },
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