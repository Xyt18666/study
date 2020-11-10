import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Msg from "../views/Msg.vue";
import MyGwc from "../views/Gwc.vue";
import TestSTort from "../views/TestSTort.vue";
import StoreLoc from "../views/StoreLoc.vue";
// import XinwenMain from "../views/XinwenMain.vue";
// import XinwenList from "../views/XinwenList.vue";

const originalPush = VueRouter.prototype.push; //解决重复跳转报错
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/storeloc",
        name: "storeloc",
        component: StoreLoc,
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
    {
        path: "/news",
        name: "XinwenMain",
        component: () => import(/* webpackChunkName: "about" */ "../views/XinwenMain.vue"),
        children: [
            {
                path: "list:type",
                name: "XiwenList",
                component: () => import(/* webpackChunkName: "about" */ "../views/XiwenList.vue"),
                children: [
                    {
                        path: ":id",
                        name: "XiwenListIn",
                        component: () =>
                            import(/* webpackChunkName: "about" */ "../views/XiwenListIn.vue"),
                    },
                ],
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
