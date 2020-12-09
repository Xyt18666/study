import Vue from "vue";
import VueRouter from "vue-router";
import Longin from "../views/Longin.vue";
import Main from "../views/Main.vue";
import Home from "../components/Home.vue";
import Details from "../components/Details.vue";

Vue.use(VueRouter);

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
];

const router = new VueRouter({
    routes,
});

export default router;
