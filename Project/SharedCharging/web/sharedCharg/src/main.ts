import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router/index";
import store from "./store/index";
let app = createApp(App);

app.config.globalProperties.$http = axios;

app.use(store);
app.use(router);


app.mount("#app");
