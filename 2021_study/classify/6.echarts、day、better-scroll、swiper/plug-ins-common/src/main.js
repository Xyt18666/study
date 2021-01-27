import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";

Vue.config.productionTip = false;

console.log(echarts);

Vue.prototype.$echarts = echarts;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
