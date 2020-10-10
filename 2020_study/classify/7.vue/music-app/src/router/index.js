import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Singer from "@/views/Singer.vue";
import Search from "@/views/Search.vue";
import User from "@/views/User.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/singer",
        name: "Singer",
        component: Singer,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
