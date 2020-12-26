import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios"; //引入 axios


import i18n from "./assets/lang/index.js";
import "normalize.css";
Vue.config.productionTip = false;
Vue.prototype.$http = axios; //将 axios 挂载到 vue实例


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
