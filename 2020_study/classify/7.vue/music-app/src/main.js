import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css"; //引入 重置样式库
import axios from "axios"; //引入 axios
import "@/assets/js/resize.js"; //引入 自适应rem
import "@/assets/css/common.sass"; //引入 全局css
import DataLoading from "@/components/common/DataLoading.vue";
import ScrollBox from "@/components/common/ScrollBox.vue";


import Toast from "@/components/common/Toast.js";
Vue.prototype.toast = Toast;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

axios.defaults.timeout = 30000; // 请求超时时间
axios.defaults.baseURL = "/api/"; //公共前缀

Vue.component("DataLoading", DataLoading);
Vue.component("ScrollBox", ScrollBox);


axios.interceptors.response.use(
    //接收数据的 拦截器
    ({ data }) => {
        if (data.code > 0) {
            Toast("数据请求失败");
        } else {
            return data;
        }
    },
    error => {
        return Promise.reject(error);
    }
);

Vue.prototype.$http = axios; //将 axios 挂载到 vue实例

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
