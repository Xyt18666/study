const {resolve} = require('path');
// node js  此方法 用来拼接绝对路径

const HtmlWebpackPlugin = require('html-webpack-plugin');//引入




/*
打包 html

1.下载  npm i html-webpack-plugin -D
2.引入  
3.使用





*/





  module.exports = {
    //webpack位置

    entry:"./src/index.js",   // 入口起点，以哪个文件开始打包
    output:{      // 输出到哪里
         filename:"built.js",  //输出文件名
         path:resolve(__dirname,'build')  // 输出路径
         //__dirname 代表 当前文件 目录 的 绝对路径 ，就是  3.打包样式
    },
    module:{   //loader 配置
        rules:[
            {
                test:/\.css$/,   //匹配哪些文件
                use:['style-loader','css-loader']  // 使用哪些 loader 处理
                    //style-loader：创建一个style标签 ，将js中的样式资源插入进去，添加到 head 中 
                    //css-loader: 将css以字符串模式，变为 commonjs 模块 加载到js中，里面内容是样式字符串
                    //ps：执行顺序为 从 后向前 依次 执行
            },
            {
                test:/\.less$/,  
                use:['style-loader','css-loader','less-loader']
                //less-loader less转css
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html'  //加入该参数，就有了结构
    })],//插件配置
    // html打包功能：  默认创建一个 空的 html  自动引入 输出所有的资源




    mode:'development'  //模式
}



