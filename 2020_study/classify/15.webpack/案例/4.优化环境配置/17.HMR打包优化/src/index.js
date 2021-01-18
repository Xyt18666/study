import "./font_6nzanaidj2u/iconfont.css";
import "./child.js";
import "./a.css";
function nesfn() {
  console.log("new fn");
}
nesfn();

/*
npx webpack-dev-server  开发环境 启动指令

问题1：当修改 样式、一个模块时  js 同样会被重新加载
需求：只重新打包 所修改的模块 ，不全部重新加载模块

解决 ：  HMR: hot module replacement     模块热替换


devServer:{//特点： 只会在内存中打包，不会在本地输出，也就是说 无法看到打包后的文件
    contentBase:resolve(__dirname,'build'),
    compress:true,  //启动 gzip 压缩  提升速度
    port:8080, //端口号
    open:true,   //自动打开浏览器
    hot:true  // 开启 HMR
}



样式文件：可以使用HMR 是因为 style-loader 内部已经实现了

js: 默认没有HMR功能（需要修改js代码，添加支持HMR的代码,如下）,只能处理非入口文件的js

html:默认没有HMR功能，同时导致一个问题，不能热更新了  （不需要HMR功能） 
    entry:["./src/index.js","./src/index.html"] 这样就好了



*/

// js: 默认没有HMR功能（需要修改js代码，添加支持HMR的代码,如下）

// 一旦 有此值 ，就说明，开启了 HMR
if (module.hot) {
  module.hot.accept("./child.js", function () {
    // 方法会监听 xx 文件 ，一旦发生变化，其他默认不会重新打包构建

    //会执行后面的回调函数
    print();
  });
}
