import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { registerStore } from "./store";

/**
 * styles
 * */
import "./assets/styles/reset.scss";
import "element-plus/dist/index.css";
import "./assets/styles/common.scss";

const app = createApp(App);

app.use(createPinia());
registerStore();
app.mount("#app");
