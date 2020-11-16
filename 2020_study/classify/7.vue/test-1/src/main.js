import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import axios from "axios";
Vue.prototype.$http = axios;
import vueSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

Vue.use(vueSwiper);

Vue.config.productionTip = false;

const vm = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");

console.log(vm);
