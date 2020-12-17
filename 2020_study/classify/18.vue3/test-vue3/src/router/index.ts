import { createRouter, createWebHashHistory } from 'vue-router';

// import App from '../App.vue';
// import App2 from '../App2.vue';
// import App3 from '../App3.vue';

// import App4 from '../App4';
import App5 from '../App5.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: App5,
    },
    // {
    //   path: '/',
    //   component: App,
    // },
    // {
    //   path: '/app2',
    //   component: App2,
    // },
    // {
    //   path: '/app3',
    //   component: App3,
    // },
    // {
    //   path: '/app4',
    //   component: App4,
    // },
    // {
    //   path: '/app5',
    //   component: App5,
    // },
  ],
});

export default router;
