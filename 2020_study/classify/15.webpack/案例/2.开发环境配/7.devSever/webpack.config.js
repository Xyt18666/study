const {resolve} = require('path');
// node js  此方法 用来拼接绝对路径

const HtmlWebpackPlugin = require('html-webpack-plugin');//引入




/*
开发服务器 DevSever ：用于自动化 自动编译 ， 自动打开浏览器 ，自动刷新浏览器

安包 npm i webpack-dev-server -D

启动 指令 npx webpack-dev-server



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
                exclude:/\.(css|js|html|less)$/,//打包其他资源除了 css js html
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.less$/,  
                use:['style-loader','css-loader','less-loader']
                //less-loader less转css
            },
            {
                test:/\.(jpg|png|gif|)$/,//处理 img loader  , 处理不了 html 中的img
                loader:'url-loader',
                options:{
                    //图片大小小于 8kb , 就会被解析为 base64 字符串 ，进行处理
                    //优势：减少请求次数，减轻服务器压力
                    //缺点：图片体积大，请求速度慢
                    limit:8 * 1024,
                    //问题：url-loader 使用es6模块化解析，而html-loader,引入图片是 commonjs,所以解析时会报错
                    //解决：关闭 es6 
                    esModule:false ,
                    name:'[hash:8].[ext]'
                    // 取图片 hash 的前8位    .    取文件原来扩展名
                }
            },
            {
                test:/\.html$/, //处理html 中 img ，从而能显示
                loader:'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'  //加入该参数，就有了结构
        })
    ],//插件配置
        // html打包功能：  默认创建一个 空的 html  自动引入 输出所有的资源

    mode:'development',  //模式

    devServer:{//特点： 只会在内存中打包，不会在本地输出，也就是说 无法看到打包后的文件
        contentBase:resolve(__dirname,'build'),
        compress:true,  //启动 gzip 压缩  提升速度
        port:8080, //端口号
        open:true   //自动打开浏览器
    }

}



