import Vue from "vue";
import VueRouter from "vue-router";

import Find from "../components/Find.vue";
import Hot from "../components/Hot.vue";
import Album from "../components/Album.vue";
import Search from "../components/Search.vue";
import My from "../components/My.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "find",
    component: Find,
    meta: {
      title: "街声",
    },
  },
  {
    path: "/hot",
    name: "hot",
    component: Hot,
  },
  {
    path: "/album",
    name: "album",
    component: Album,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/my",
    name: "my",
    component: My,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
