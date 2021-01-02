module.exports = {
    pages: {
        index: {
            entry: "src/pages/index/main.js", //入口文件，等于 原先的main.jx
            template: "public/index.html", //应用的模板 ，相当于，单页面的 index.html
            filename: "index.html", //编译后的文件名
            title: "index", //template 中的 title 标签
        },
        page1: {
            entry: "src/pages/page1/main.js",
            template: "public/page1.html",
            filename: "page1.html",
            title: "index2",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ["chunk-vendors", "chunk-common", "index"],
        },
        page2: {
            entry: "src/pages/page2/main.js",
            template: "public/page2.html",
            filename: "page2.html",
        },
    },
};
