import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
        //  children:[],
        // props:true
    },
    {
        path: "/tow",
        name: "tow",
        component: () => import(/* webpackChunkName: "about" */ "../views/Tow.vue"),
        //  children:[],
        // props:true
    },
];

const router = new VueRouter({
    routes,
});

export default router;
