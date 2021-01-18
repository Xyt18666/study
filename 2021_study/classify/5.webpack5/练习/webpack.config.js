const { resolve } = require("path");
// node js  此方法 用来拼接绝对路径

module.exports = {
    entry: "./src/index.js", // 入口起点，以哪个文件开始打包
    output: {
        // 输出到哪里
        filename: "built.js", //输出文件名
        path: resolve(__dirname, "build"), // 输出路径
        //__dirname 代表 当前文件 目录 的 绝对路径 ，就是  练习 这个文件夹
    },
    module: {
        rules: [],
    }, //编译一些 不能识别的资源
    plugins: [], //插件配置,
    mode: "development", //模式
};
