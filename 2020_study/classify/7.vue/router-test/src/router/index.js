import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Msg from "../views/Msg.vue";
import Child from "../views/Child.vue";
import Sunzi from "../views/Sunzi.vue";

import MainContent from "@/components/MainContent.vue";
import Xxx from "@/components/Xxx.vue";

const originalPush = VueRouter.prototype.push; //解决重复跳转报错
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
    {
        path: "/con",
        name: "MainContent",
        component: MainContent,
    },
    {
        path: "/xxx",
        name: "Xxx",
        component: Xxx,
        children: [],
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },

    {
        path: "/list",
        name: "List",
        component: List,
        children: [
            {
                path: "msg:id", //就是拼接的一个 动态路径 ，不用写 /
                name: "Msg",
                component: Msg,
                children: [
                    {
                        path: "sunzi",
                        name: "Sunzi",
                        component: Sunzi,
                    },
                ],
            },
            {
                path: "child:id?",
                name: "Child",
                component: Child,
            },
        ],
    },

    // {
    //     //第一种 第二种 直接传参
    //     path: "/msg/:num", //这里接收一个值 ，num
    //     name: "Msg",
    //     component: Msg,
    // },
    // {
    //     path: "/msg",
    //     name: "Msg",
    //     component: Msg,
    // },
];

const router = new VueRouter({
    routes,
});

export default router;
