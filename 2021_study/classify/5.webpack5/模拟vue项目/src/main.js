import Vue from "vue";
import App from "./App.vue";

// console.log(App);

// import "./assets/css/test.css";
// import "./assets/css/2.scss";

// import pic from "@/assets/image/123.jpg";

import "./assets/js/1.js";
import "./assets/js/2.js";

if (module.hot) {
    //一旦 module.hot 为true ，说明开启了hrm 功能 ->让HMR功能代码生效
    module.hot.accept(["./assets/js/1.js", "./assets/js/2.js"], () => {
        //监听方法 1.js 文件画布，一旦发生变化，其他文件件不会打包构建
        console.log("js热更新");
    });
}

new Vue({
    el: "#app",
    render: h => h(App),
    // data: {
    //     key: "val",
    //     pic: pic,
    // },
});
// h(,)属性 ：标签名，内容
