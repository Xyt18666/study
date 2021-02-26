const { resolve } = require("path");
// node js  此方法 用来拼接绝对路径
// const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //引入 提取css的插件

const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css

module.exports = {
    entry: "./src/index.js", // 入口起点，以哪个文件开始打包,配置 html 热更新
    output: {
        // 输出到哪里
        filename: "built.js", //输出文件名
        path: resolve(__dirname, "build"), // 输出路径
        //__dirname 代表 当前文件 目录 的 绝对路径 ，就是  练习 这个文件夹
    },
    module: {
        rules: [
            {
                test: /\.css$/, //匹配哪些文件
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], // 使用哪些 loader 处理
                //style-loader：创建一个style标签 ，将js中的样式资源插入进去，添加到 head 中
                //css-loader: 将css以字符串模式，变为 commonjs 模块 加载到js中，里面内容是样式字符串
                //ps：执行顺序为 从 后向前 依次 执行
                // 只有一个时 loader:""
            },
            // {
            //     test: /\.scss$/,
            //     use: ["style-loader", "css-loader", "sass-loader"],
            //     //转css
            // }, //正常配置
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
                // 生产环境配置 MiniCssExtractPlugin.loader   代替 style-loader  因为提取成单独文件了
            },
            {
                test: /\.(jpg|png|gif|)$/, //处理 img loader  , 处理不了 html 中的img
                loader: "url-loader",
                options: {
                    publicPath: "../images/", //前缀
                    outputPath: "images/", //输出路径

                    //图片大小小于 8kb , 就会被解析为 base64 字符串 ，进行处理
                    //优势：减少请求次数，减轻服务器压力
                    //缺点：图片体积大，请求速度慢
                    limit: 8 * 1024, //限制大小
                    //问题：url-loader 使用es6模块化解析，而html-loader,引入图片是 commonjs,所以解析时会报错
                    //解决：关闭 es6
                    esModule: false,
                    name: "[name][hash:8].[ext]",
                    // 取图片 hash 的前8位    .    取文件原来扩展名
                },
            },
            {
                test: /\.html$/, //处理html 中 img ，从而能显示
                loader: "html-loader",
            },
            {
                test: /\.vue$/, //配置vue-loader
                use: ["url-loader", "vue-loader"],
            },
        ],
    }, //编译一些 不能识别的资源
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", //使用自己的模板 html

            // filename: "index.html", // 命名 ，默认就是index.html
            // minify: {
            //     collapseWhitespace: true, //去除空格 ，默认就是去除，无需配置
            //     removeComments: true, //去除注释，默认就是去除，无需配置
            // },
        }),
        new MiniCssExtractPlugin({
            filename: "css/built.css", // 对输出文件重命名
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        // HMR 特性所需要的插件
        // new webpack.HotModuleReplacementPlugin(),
    ], //插件配置,
    devServer: {
        //特点： 只会在内存中打包，不会在本地输出，也就是说 无法看到打包后的文件
        contentBase: resolve(__dirname, "build"),
        compress: true, //启动 gzip 压缩  提升速度
        port: 8080, //端口号
        open: true, //自动打开浏览器
        hot: true, //开启时时刷新
    },
    resolve: {
        //配置别名
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    mode: "development", //模式
};
