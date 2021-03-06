import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import qs from "querystring";

Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

console.log("process====", process.env.NODE_ENV);

// if (process.env.NODE_ENV === "development") {
//   axios.defaults.baseURL = "/api";
//   console.log("开发环境");
// }
// if (process.env.NODE_ENV === "production") {
//   axios.defaults.baseURL = "http://localhost:8088";
//   console.log("生产环境");
// }

let loding;

axios.interceptors.request.use((data) => {
  console.log("请求拦截", data);

  // data.headers.token = 79;
  // 后端需要配置,允许添加请求头

  loding = ElementUI.Loading.service({
    lock: true,
    text: "Loading",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)",
  });

  console.log(qs);

  // if (data.method == "post") {
  //   data.data = qs.stringify(data.data);
  //   console.log(data.data);
  // }

  return data;
});

axios.interceptors.response.use((data) => {
  //接收数据的 拦截器
  console.log("响应拦截", data);
  loding.close();
  
  if (data.status == 404) {
    router.push("/404");
  }

  return data;
});

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
