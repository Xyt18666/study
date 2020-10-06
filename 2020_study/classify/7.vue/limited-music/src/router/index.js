import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import List from "../views/List.vue";
import Detail from "../views/Detail.vue";

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
        meta: {
            title: "首页",
            xxasild: "字段为路由定义额外信息",
        },
        beforeEnter: (to, form, next) => {
            console.log("路由守卫");
            next();
        },
    },
    {
        path: "/h",
        redirect: "/about", // 重定向
    },
    {
        path: "/",
        alias: "/index", // 别名
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "about",
            xxasild: "字段为路由定义额外信息",
        },
    },
    {
        path: "/musiclist",
        name: "MusicList",
        component: () => import("../views/MusicList.vue"),
    },
    {
        path: "/list",
        name: "List",
        component: List,
        children: [
            {
                path: "detail/:id", // ?可不传参数  , 路径前面不能是/xx

                name: "Detail",
                component: Detail,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

/*
router.beforeEach((to, from, next) => {
    // 全局路由导航守卫（要去的路径，原始路径 ，执行函数）
    // console.log(to, from, next);
    // if (to.name == "Home") {
    //     next(); //如果是 home 进入home
    // } else if (to.name == "About") {
    //     console.log(to.name);

    //     next("/about"); //跳转
    // }
    // if (to.name != "Home" && !isAuthenticated) {
    //     next({
    //         name: "About",
    //     }); //跳转
    // } else {
    //     next();
    // }
    if (to.name == "Home" || to.name == "About") {
        next(); //允许进入路由
    } else {
        console.log("没权限");
        next(false); //禁止跳转路由
    }
});


*/

router.afterEach((to, form) => {
    //后置 路由钩子
    document.title = to.meta.title;
    console.log(to, form, "后置钩子");
});

export default router;
