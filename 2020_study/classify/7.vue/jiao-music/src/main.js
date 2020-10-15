import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/style/common.sass';

import ScrollView from '@/components/common/ScrollView.vue';
import DataLoading from '@/components/common/DataLoading.vue';
import ArrowBtn from '@/components/common/ArrowBtn.vue';
import ConfirmBox from '@/components/common/ConfirmBox.vue';
import toast from '@/components/common/toast.js';

import axios from 'axios';
import vueLazyload from 'vue-lazyload';
import tempImg from '@/assets/img/bg.png';

Vue.use(vueLazyload, {
    loading: tempImg
});

Vue.config.productionTip = false;

Vue.component('scroll-view', ScrollView);
Vue.component('data-loading', DataLoading);
Vue.component('arrow-btn', ArrowBtn);
Vue.component('confirm-box', ConfirmBox);
Vue.prototype.toast = toast;

axios.defaults.timeout = 30000;
axios.defaults.baseURL = '/api';
axios.interceptors.response.use(({ data }) => {
    if (data.code > 0) {
        toast(data.msg || 'Sorry, 暂不可以');
    }
    return data;
}, error => {
    return Promise.reject(error);
});
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
