import { createApp, h } from "vue";
import App from "@/App.vue";
import store from "./store";
import router from "./router";

import element3 from "element3";
import "element3/lib/theme-chalk/index.css";

const app = createApp(App);
// @ts-ignore //注释这个引用报错
app.config.globalProperties.$three = window.THREE;
app.use(router).use(element3).use(store);

app.mount("#app");
