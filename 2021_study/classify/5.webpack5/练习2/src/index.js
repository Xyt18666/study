// 入口文件
require("./js/1");
require("./js/2");

import "./css/1.css";
import "./css/2.scss";

import Vue from "vue";



import pic from "./images/123.jpg";

new Vue({
    el: "#app",
    data: {
        msg: "测试",
        pic: pic,
    },
});

console.log("a1s");
// if (module.hot) {
//     //一旦 module.hot 为true ，说明开启了hrm 功能 -->让HMR功能代码生效
//     module.hot.accept("./js/1.js", function () {
//         //监听方法 1.js 文件画布，一旦发生变化，其他文件件不回打包构建
//         console.log("1.js重新打包执行了");
//     });
// }
