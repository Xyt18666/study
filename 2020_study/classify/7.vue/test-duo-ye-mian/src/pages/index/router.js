import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/h",
        name: "helloWorldome",
        component: HelloWorld,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
