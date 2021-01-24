import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import store from "./store/index";
let app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
