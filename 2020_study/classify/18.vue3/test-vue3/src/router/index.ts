import { createRouter, createWebHashHistory } from 'vue-router';

import App from '../App.vue';
import App2 from '../App2.vue';
import App3 from '../App3.vue';

import App4 from '../App4';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/app',
      component: App,
    },
    {
      path: '/app2',
      component: App2,
    },
    {
      path: '/app3',
      component: App3,
    },
    {
      path: '/app4',
      component: App4,
    },
  ],
});

export default router;
