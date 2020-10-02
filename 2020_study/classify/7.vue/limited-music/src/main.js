import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ConfirmBox from "@/components/common/ConfirmBox.vue";
import SwitchBox from "@/components/common/SwitchBox.vue";
import BaseLayout from "@/components/common/BaseLayout.vue";
/*    @代表 src 路径    */

import "normalize.css";
// 引入重置样式 工具包

window.eventBus = new Vue();

Vue.config.productionTip = false;

Vue.component("confirm-box", ConfirmBox);
Vue.component("switch-box", SwitchBox);
Vue.component("base-layout", BaseLayout);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
