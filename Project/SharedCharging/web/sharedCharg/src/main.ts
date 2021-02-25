import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router/index";
import store from "./store/index";
let app = createApp(App);
import "vant/lib/index.css";
import "./scss/baseStyle.scss";

app.config.globalProperties.$http = axios;

import Vant from "vant";
import "vant/lib/index.css";

app.use(store).use(router).use(Vant).mount("#app");
