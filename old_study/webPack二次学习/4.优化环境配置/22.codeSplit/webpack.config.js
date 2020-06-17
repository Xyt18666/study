const {resolve} = require('path');// node js  此方法 用来拼接绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//引入 提取css的插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')//css压缩插件
process.env.NODE_ENV = "production"; //定义 node.js的环境变量，决定使用 browserlist的那个环境


const commCssLoader =  [
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
];



/*
codeSplit  : 文件分割 ，按需导入 

单入口（常用）： 配置方案2后，会把node下的包 单独打包，在配合 方案3  ，把自己想单独打包的模块使用 import语法进行单独打包
多入口：配置方案2后，除了会把node下的包 单独打包，还会把多个入口的文件打包。




第一种：
entry改为对象，形成多入口 会输出对个 build 文件（此时名字一样，不好区分）

通过命名 来区分
 filename:"js/[name].[contenthash:10].js"




第二种配置方式：
    optimization:{
        splitChunks:'all'
    }

可以将 mode-modules 中的代码单独打包 一个 chunk 最终输出
自动分析多入口中chunk中，有没有公用的文件，如果有会打包成单独的 chunk



第三种：
单入口还是比较多，所以 要解决 ，分割出 引入到index 中的js  ，就会单独打包了




*/


// import(/*webpacjChunkName:'xxxx'*/'./xxx')    语法
//     .then((xxx,xxxx)=>{
//         console.log('加载成功')
//     })
//     .catch(()=>{
//         console.log('加载失败')
//     })





  module.exports = {//webpack向外暴露一个对象
    

    entry:{
        main:"./src/index.js",
        test:"./src/test.js"
    },   // 入口起点，以哪个文件开始打包
    output:{      // 输出到哪里
         filename:"js/[name].[contenthash:10].js",  //输出文件名
         path:resolve(__dirname,'build')  // 输出路径
         //__dirname 代表 当前文件 目录 的 绝对路径 ，就是  3.打包样式
    },
    module:{   //loader 配置
        rules:[
            {     
                test:/\.js$/,
                exclude:/node_modules/,  //只检查自己的 js 不检查 模块下的
                loader:"eslint-loader",
                enforce:'pre',//优先执行
                options:{
                    fix:true
                }
            },
            {
                oneOf:[
                    {
                        test:/\.css$/,   //匹配哪些文件
                        use:[...commCssLoader] 
                            // 生产环境配置 MiniCssExtractPlugin.loader   代替 style-loader  因为提取成单独文件了
                    },
                    {
                        test:/\.less$/,  
                        use:[...commCssLoader, 'less-loader']//less-loader less转css 
                    },
                        //正常来讲，一个文件只能被一个loader处理，当一个文件被多个loader处理，那么一定要指定执行顺序
                    { // 先执行 eslint 后执行 babel-loader      enforce:'pre', 优先执行
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
                            ],
                            cacheDirectory:true  //开启babel 缓存 ，第二次构建时会读取
                        }
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
                            name:'[hash:10].[ext]',// 取图片 hash 的前8位    .    取文件原来扩展名
                            outputPath:'imgs'        
                        }
                    },
                    {
                        test:/\.html$/, //处理html 中 img ，从而能显示
                        loader:'html-loader'
                    },
                    {
                        exclude:/\.(css|js|html|less|jpg|png|gif)$/,//打包其他资源除了 css js html
                        loader:'file-loader',
                        options:{
                            name:'[hash:10].[ext]',
                            outputPath:'media'
                        }
                    }
                ]
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
            filename:'css/built.[contenthash:10].css' // 对输出文件重命名
        }),
        new OptimizeCssAssetsWebpackPlugin() //压缩css

    ],//插件配置
        // html打包功能：  默认创建一个 空的 html  自动引入 输出所有的资源

    mode:'production',  //模式    生产模式 production

    devServer:{//特点： 只会在内存中打包，不会在本地输出，也就是说 无法看到打包后的文件
        contentBase:resolve(__dirname,'build'),
        compress:true,  //启动 gzip 压缩  提升速度
        port:8080, //端口号
        open:true   //自动打开浏览器
    },
    devtool:'source-map',
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    }
}



