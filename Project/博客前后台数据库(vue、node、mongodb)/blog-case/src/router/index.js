import Vue from "vue";
import VueRouter from "vue-router";
import Longin from "../views/Longin.vue";
import Main from "../views/Main.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        component: Main,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
        ],
    },
    {
        path: "/longin",
        name: "longin",
        component: Longin,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
