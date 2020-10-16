import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "normalize.css";
import axios from "axios"; 
Vue.prototype.$http = axios; 



// import BaseLayout from "@/components/common/BaseLayout.vue";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')
