import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/study",
            name: "study",
            component: () => import("../views/Study.vue"),
        },
    ],
});

export default router;
