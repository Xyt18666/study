import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";  //引入 重置样式库
import axios from "axios";  //引入 axios
import "@/assets/js/resize.js"; //引入 自适应rem
import "@/assets/css/common.sass"; //引入 全局css


Vue.prototype.$http = axios; //将 axios 挂载到 vue实例

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
