import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Main from '@/views/Main.vue';
import Overview from '@/views/Overview.vue';
import Register from '@/views/Register.vue';
import RegisterDetail from '@/views/RegisterDetail.vue';
import RegisterAdd from '@/views/RegisterAdd.vue';
import RegisterEdit from '@/views/RegisterEdit.vue';
import Management from '@/views/Management.vue';
import Dictionary from '@/views/Dictionary.vue';
// import store from '@/store/index.js';

Vue.use(Router);

const router = new Router({
    // 访问/的时候，直接跳转到/login
    routes: [{
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/main',
        name: 'Main',
        component: Main,
        children: [{
            path: 'overview',
            component: Overview
        }, {
            path: 'register',
            component: Register
        }, {
            path: 'register-detail/:id',
            component: RegisterDetail
        }, {
            path: 'register-add',
            component: RegisterAdd
        }, {
            path: 'register-edit/:id',
            component: RegisterEdit
        }, {
            path: 'management',
            component: Management
        }, {
            path: 'dictionary',
            component: Dictionary
        }]
    }]
});

// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') next();
//     const pStr = to.path.substr(to.path.lastIndexOf('/') + 1);
//     if (store.state.permissions.indexOf(pStr) > -1) {
//         next();
//     } else {
//         next('/login');
//     }
// });

export default router;
