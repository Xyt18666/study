import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import Vant from "vant";
import router from "./router/index";
import store from "./store/index";
let app = createApp(App);
import "vant/lib/index.css";
app.config.globalProperties.$http = axios;

app.use(store);
app.use(router);

app.use(Vant);

app.mount("#app");
