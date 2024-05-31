import {createApp} from "vue";
import App from "./App.vue";

import {createPinia} from "pinia";
import router from "./router/Router";

import "./assets/styles/tailwind.css";
import "./assets/icons/iconfont/iconfont.css";
import "./assets/styles/main.css"

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
