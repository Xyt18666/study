import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css";
import axios from "axios";
Vue.prototype.$http = axios;

import { Swipe, SwipeItem, Form, Popup, Field, Button } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Form);
Vue.use(Popup);
Vue.use(Field);
Vue.use(Button);

// import BaseLayout from "@/components/common/BaseLayout.vue";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
