import { createApp } from 'vue';
// import App from "./App.vue";
// import App2 from "./App2.vue";
// import App3 from './App3.vue';
// import App4 from './App4';

import App5 from './App5.vue';

import router from './router/index';
import './index.css';
import store from './store/index';
let app = createApp(App5);
// console.log(router);
// console.log(store);

app.use(router);
app.use(store);

app.mount('#app');
