import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaiduMap from "vue-baidu-map";
import "animate.css";

import axios from "axios";
Vue.prototype.$http = axios;

Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: "qbRzfojGT8HYWlGlfNuGguyGGSnUbsns",
});

// if (process.env.NODE_ENV === "development") {
//     axios.defaults.baseURL = "/api";
//     console.log("开发环境");
// }
// if (process.env.NODE_ENV === "production") {
//     axios.defaults.baseURL = "http://localhost:8088";
//     console.log("生产环境");
// }

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
