import Vue from "vue";
import VueRouter from "vue-router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Msg from "../views/Msg.vue";
import Child from "../views/Child.vue";
import Sunzi from "../views/Sunzi.vue";

import MainContent from "@/components/MainContent.vue";
import Xxx from "@/components/Xxx.vue";
import Aaa from "@/components/Aaa.vue";
import Bbb from "@/components/Bbb.vue";

import Longin from "../views/Longin.vue";
import Main from "../views/Main.vue";

const originalPush = VueRouter.prototype.push; //解决重复跳转报错
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
    {
        path: "/longin",
        name: "Longin",
        component: Longin,
        meta: {
            title: "登陆",
        },
    },
    {
        path: "/main",
        name: "Main",
        component: Main,
        meta: {
            title: "后台",
        },
    },

    {
        path: "/con",
        name: "MainContent",
        component: MainContent,
    },
    {
        path: "/xxx",
        name: "Xxx",
        component: Xxx,
        children: [
            {
                path: "aaa",
                name: "Aaa",
                component: Aaa,
            },
            {
                path: "bbb",
                name: "Bbb",
                component: Bbb,
            },
        ],
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

router.beforeEach((to, from, next) => {
    // if (to.name) {
    //     console.log(to.matched);
    //     next(); // 确保一定要调用 next()
    // } else {
    //     next(); // 确保一定要调用 next()
    // }
    if (to.path === "/main" && document.cookie.indexOf() === -1) {
        next("/longin");
    } else {
        next();
    }
});

export default router;
