import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";

import dayjs from "dayjs";
import BScroll from "better-scroll";



Vue.config.productionTip = false;

import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);
import "swiper/css/swiper.css";

console.log(echarts);

Vue.prototype.$echarts = echarts;
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$BScroll = BScroll;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
