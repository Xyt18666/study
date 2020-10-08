import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import CryptoJS from "crypto-js";


import animated from "animate.css";

Vue.use(animated);

Vue.prototype.$http = axios;
Vue.prototype.$CryptoJS = CryptoJS;
console.log(CryptoJS);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
