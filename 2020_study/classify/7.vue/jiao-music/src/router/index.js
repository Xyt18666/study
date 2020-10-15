import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Singer from '@/views/Singer.vue';
import SingerDetail from '@/views/SingerDetail.vue';
import Search from '@/views/Search.vue';
import User from '@/views/User.vue';

Vue.use(Router);

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/singer',
    component: Singer,
    children: [{
        path: ':id',
        component: SingerDetail
    }]
}, {
    path: '/search',
    component: Search
}, {
    path: '/user',
    component: User
}];

const router = new Router({
    routes
});

export default router;
