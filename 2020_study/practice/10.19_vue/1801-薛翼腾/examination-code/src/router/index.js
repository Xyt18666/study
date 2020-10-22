import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Msg from "../views/Msg.vue";
import MyGwc from "../views/Gwc.vue";
import TestSTort from "../views/TestSTort.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/testStort",
        name: "TestStort",
        component: TestSTort,
    },

    {
        path: "/msg:id",
        name: "Msg",
        component: Msg,
    },
    {
        path: "/mygwc",
        name: "MyGwc",
        component: MyGwc,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
