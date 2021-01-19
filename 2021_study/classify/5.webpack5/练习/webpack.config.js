const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //引入html打包插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //引入提起css插件
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css
const PurgecssPlugin = require("purgecss-webpack-plugin"); //去除无用css
const glob = require("glob");
const PATHS = {
    src: join(__dirname, "src"),
};

console.log(MiniCssExtractPlugin);

module.exports = {
    entry: ["./src/index.js", "./src/index.html"],
    output: {
        filename: "build.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.css$/, //匹配哪些文件
                use: ["style-loader", "css-loader", "postcss-loader"], //使用提取单文件的loader
            },
            // {
            //     test: /\.css$/, //匹配哪些文件
            //     use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], //使用提取单文件的loader
            // },

            {
                test: /\.(jpg|png|gif|)$/, //处理 img loader  , 处理不了 html 中的img
                loader: "url-loader",
                options: {
                    // publicPath:"./images/",前缀
                    // outputPath:"images/",//输出路径

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
                exclude: /\.(css|js|html|less)$/, //打包其他资源除了 css js html
                loader: "file-loader",
                options: {
                    name: "[hash:8].[ext]",
                    // publicPath:"font/",前缀
                    // outputPath:"font/",//输出路径
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //只检查自己的 js 不检查 模块下的
                enforce: "pre", //优先执行
                loader: "eslint-loader",
                options: {
                    fix: true, //自动修复
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader", //兼容js
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage", //按需加载
                                corejs: {
                                    //指定版本
                                    version: 3,
                                },
                                targets: {
                                    chrome: "60",
                                    firefox: "60",
                                    ie: "9",
                                    safari: "10",
                                }, //指定兼容器做到那个版本
                            },
                        ],
                    ],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", //使用自己的模板 html
        }),
        // new MiniCssExtractPlugin({
        //     filename: "build.css", // 提取css文件，命名
        // }),
        new OptimizeCssAssetsWebpackPlugin(),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, {
                nodir: true,
            }),
        }),
    ],
    mode: "development",
    devServer: {
        //特点： 只会在内存中打包，不会在本地输出，也就是说 无法看到打包后的文件
        contentBase: resolve(__dirname, "build"),
        compress: true, //启动 gzip 压缩  提升速度
        port: 8080, //端口号
        open: true, //自动打开浏览器
        hot: true, //开启热更新
    },
    target: "web",
};
