import Vue from "vue";
import Router from "vue-router";
// import Home from "@/views/Home";
import Login from "@/views/Login";
import Main from "@/views/Main";

import Administration from "@/views/Administration";
import Dictionaries from "@/views/Dictionaries";
import Overview from "@/views/Overview";
import Register from "@/views/Register";
import RegisterAdd from "@/views/RegisterAdd";
import RegisterDetail from "@/views/RegisterDetail";
import RegisterEdit from "@/views/RegisterEdit";

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
      component: Main,
      children: [
        {
          path: "administration",
          name: "Administration",
          component: Administration
        },
        {
          path: "dictionaries",
          name: "Dictionaries",
          component: Dictionaries
        },
        {
          path: "overview",
          name: "Overview",
          component: Overview
        },
        {
          path: "register",
          name: "Register",
          component: Register,
          children: [
            {
              path: "registeradd",
              name: "RegisterAdd",
              component: RegisterAdd
            },
            {
              path: "registerdetail",
              name: "RegisterDetail",
              component: RegisterDetail
            },
            {
              path: "registerddit",
              name: "RegisterEdit",
              component: RegisterEdit
            }
          ]
        }
      ]
    }
  ]
});
