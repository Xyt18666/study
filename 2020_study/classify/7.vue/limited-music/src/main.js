import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ConfirmBox from "@/components/common/ConfirmBox.vue";
import SwitchBox from "@/components/common/SwitchBox.vue";

import "@/assets/style/common.css";
/*    @代表 src 路径    */

Vue.config.productionTip = false;

Vue.component("confirm-box", ConfirmBox);
Vue.component("switch-box", SwitchBox);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
