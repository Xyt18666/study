const {resolve} = require('path');
// node js  此方法 用来拼接绝对路径

const HtmlWebpackPlugin = require('html-webpack-plugin');//引入

const MiniCssExtractPlugin = require('mini-css-extract-plugin')//引入 提取css的插件

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

/*
js压缩：
 mode:'production',  生产模式自动压缩js


html压缩：
 new HtmlWebpackPlugin({
    template:'./src/index.html',  //加入该参数，就有了结构
    minify:{ //压缩html
        collapseWhitespace:true,  //折叠空格
        removeComments:true  //移除注释
    }
}),

*/

process.env.NODE_ENV = "development";



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
                use:[
                        MiniCssExtractPlugin.loader, 
                        'css-loader',
                        {
                            loader:'postcss-loader',
                            options:{
                                ident:'postcss',
                                plugins: () => [
                                    require('postcss-preset-env')
                                ]
                            }
                        }
                    ] 
                    // 生产环境配置 MiniCssExtractPlugin.loader   代替 style-loader  因为提取成单独文件了

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
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
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
            },
            {
                test:/\.js$/,
                exclude:/node_modules/, 
                loader:'babel-loader', //兼容js
                options:{
                    presets:[
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns:'usage',//按需加载
                                corejs:{//指定版本
                                    version:3
                                },
                                targets:{
                                    chrome:'60',
                                    firefox:'60',
                                    ie:'9',
                                    safari:'10'
                                }//指定兼容器做到那个版本
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',  //加入该参数，就有了结构
            minify:{ //压缩html
                collapseWhitespace:true,  //折叠空格
                removeComments:true  //移除注释
            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/built.css' // 对输出文件重命名
        }),
        new OptimizeCssAssetsWebpackPlugin()

    ],//插件配置
        // html打包功能：  默认创建一个 空的 html  自动引入 输出所有的资源

    mode:'production',  //模式    生产模式 production

    devServer:{//特点： 只会在内存中打包，不会在本地输出，也就是说 无法看到打包后的文件
        contentBase:resolve(__dirname,'build'),
        compress:true,  //启动 gzip 压缩  提升速度
        port:8080, //端口号
        open:true   //自动打开浏览器
    }

}



