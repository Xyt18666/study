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
    },
    {
        path: "/about2",
        name: "About2",
        component: () => import(/* webpackChunkName: "about" */ "../views/About2.vue"),
    },
    {
        path: "/about3",
        name: "About3",
        component: () => import(/* webpackChunkName: "about" */ "../views/About3.vue"),
        children: [
            {
                path: "/",
                name: "child1",
                component: () => import(/* webpackChunkName: "about" */ "../views/child1.vue"),
            },
            {
                path: "child2",
                name: "child2",
                component: () => import(/* webpackChunkName: "about" */ "../views/child2.vue"),
            },
            {
                path: "child3",
                name: "child3",
                component: () => import(/* webpackChunkName: "about" */ "../views/child3.vue"),
                props: route => {
                    const { id } = route.query;
                    console.log(route);

                    return {
                        id,
                    };
                },
            },
        ],
    },
    {
        path: "/about4",
        name: "About4",
        component: () => import(/* webpackChunkName: "about" */ "../views/About4.vue"),
    },
    {
        path: "/longin",
        name: "longin",
        component: () => import(/* webpackChunkName: "about" */ "../views/LongIn.vue"),
    },
    {
        path: "/xy",
        name: "Xy",
        component: () => import(/* webpackChunkName: "about" */ "../views/Xy.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
