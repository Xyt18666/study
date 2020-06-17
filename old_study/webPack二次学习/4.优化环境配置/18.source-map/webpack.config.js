const {resolve} = require('path');
// node js  此方法 用来拼接绝对路径

const HtmlWebpackPlugin = require('html-webpack-plugin');//引入




/*
  devtool:'source-map'

  是一种 提供源代码 到构建后代码 映射 技术 （如果出错了，通过映射关系，可以追踪到源代码的错误）

source-map            外部 生成 map文件  (提供错误代码的准确信息 和 源位置)
inline-source-map     内部的 base64 码的 source-map (只有一个大的) (提供错误代码的准确信息 和 源位置)
hidden-source-map     外部生成 map文件 (提供错误原因，没有源代码的错误位置)
eval-source-map       内部的 base64 码的 每个文件都生成对应的 source-map  ，都在eval中  (提供错误代码的准确信息 和 源位置，有hash值)
nosources-source-map  外部  （没有源代码的信息）
cheap-source-map      外部  (提供错误代码的 信息 和 源位置，只能精确到行)
cheap-module-source-map      外部  (提供错误代码的 信息 和 源位置，只能精确到行)


开发环境：速度快，调试友好
速度快（eval>inline>cheap）

eval-cheap-source-map    最快

source-map   最友好

eval-source-map  综合方案
eval-cheap-module-source-map


生成环境：源代码是否要隐藏，调试要不要更友好
内联会让文件体积变大，所以不考虑内联

nosources-source-map 全隐藏
hidden-source-map 只隐藏源代码

source-map   综合
cheap-module-source-map  

*/





  module.exports = {
    //webpack位置

    entry:["./src/index.js","./src/index.html"],   // 入口起点，以哪个文件开始打包
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
                exclude:/\.(css|js|html|less|jpg|png|gif)$/,//打包其他资源除了 css js html
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
        open:true,   //自动打开浏览器
        hot:true  // 开启
    },
    devtool:'eval-source-map'

}



// npx webpack-dev-server