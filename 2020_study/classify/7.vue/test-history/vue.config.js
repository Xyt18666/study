module.exports = {
    pages: {
        index: {
            entry: "src/pages/index/main.js", //入口文件，等于 原先的main.jx
            template: "public/index.html", //应用的模板 ，相当于，单页面的 index.html
            filename: "index.html", //编译后的文件名
            title: "index", //template 中的 title 标签
            // inject: true, //是否开启注入
            // chunks: ["App"],
        },
        page1: {
            entry: "src/pages/page1/main.js",
            template: "public/page1.html",
            filename: "page1.html",
            title: "index2",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // inject: true, //是否开启注入
            // chunks: ["App"], //需要引入的Chunk，不配置就会引入所有页面的资源
            // chunk [ 'app' ] 中的app对应的是上面配置中entry设置的入口文件
        },
        page2: {
            entry: "src/pages/page2/main.js",
            template: "public/page2.html",
            filename: "page2.html",
            // inject: true, //是否开启注入
            // chunks: ["App"],
        },
    },
    publicPath: "./",
};
