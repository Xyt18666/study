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

Vue.filter("tel", val => {
    return val.replace(/^([0-9]{3})([0-9]{4})([0-9]{4})$/g, "$1****$3");
});

Vue.component("confirm-box", ConfirmBox);
Vue.component("switch-box", SwitchBox);
Vue.component("base-layout", BaseLayout);

Vue.mixin({
    created: function() {
        var myOption = this.$options.myOption;
        if (myOption) {
            console.log(myOption);
        }
    },
    mounted() {
        console.log(this.$options.myOption);
    },
});

new Vue({
    myOption: "hello Word",
    router,
    store,
    render: h => h(App),
}).$mount("#app");
