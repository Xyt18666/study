import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueI18n from "vue-i18n";
import getLanguage from "./assets/cookie.js";

Vue.use(ElementUI);
Vue.use(VueI18n);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const i18n = new VueI18n({
    locale: getLanguage.getCookie("PLAY_LANG", "zh"), // 语言标识
    messages: {
        zh: require("./assets/i18n_c"),
        en: require("./assets/i18n_e"),
    },
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount("#app");
