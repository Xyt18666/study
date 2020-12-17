import { createRouter, createWebHashHistory } from "vue-router";

import App from "../App.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/app",
            component: App,
        },
    ],
});

export default router;
