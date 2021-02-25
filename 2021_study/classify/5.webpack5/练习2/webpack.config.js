const { resolve } = require("path");
// node js  此方法 用来拼接绝对路径
// const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

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
                use: ["style-loader", "css-loader"], // 使用哪些 loader 处理
                //style-loader：创建一个style标签 ，将js中的样式资源插入进去，添加到 head 中
                //css-loader: 将css以字符串模式，变为 commonjs 模块 加载到js中，里面内容是样式字符串
                //ps：执行顺序为 从 后向前 依次 执行
                // 只有一个时 loader:""
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
    mode: "development", //模式
};
