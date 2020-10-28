import Vue from "vue";
import Router from "vue-router";
// import Home from "@/views/Home";
import Login from "@/views/Login";
import Main from "@/views/Main";

//push
const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

//replace
const VueRouterReplace = Router.prototype.replace;
Router.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err);
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      // name: "Home",
      // component: Home
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/main",
      name: "Main",
      component: Main
    }
  ]
});
