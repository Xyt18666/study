import Vue from "vue";
import VueRouter from "vue-router";
import Longin from "../views/Longin.vue";
import Main from "../views/Main.vue";
import Home from "../components/Home.vue";
import Details from "../components/Details.vue";
import Vuex from "../components/Vuex.vue";



Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/home",
    component: Main,
    children: [
      {
        path: "home:id?",
        name: "home",
        component: Home,
      },
    ],
  },
  {
    path: "details:id?",
    name: "details",
    component: Details,
  },
  {
    path: "/longin",
    name: "longin",
    component: Longin,
  },
  {
    path: "/vuex",
    name: "vuex",
    component: Vuex,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
