import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log(to, from, "全局beforeEach");
  next();

  // ElementUI.Message("使用element的提示信息");
  // Vue.prototype.$message("使用element的提示信息");

  // if (to.meta.auth) {
  //   console.log("判断登陆", store.state.admin.userAll);
  //   // 获取参数不对，所以未实现，就提写法相同
  //   if (store.state.admin.userAll) {
  //     next();
  //   } else {
  //     console.log("先登录");
  //     next({
  //       path: "/longin",
  //       query: {
  //         to: to.fullPath,
  //       },
  //     });
  //   }
  // } else {
  //   next();
  // }
});
router.afterEach((to, from) => {
  console.log(to, from, "全局afterEach");
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
