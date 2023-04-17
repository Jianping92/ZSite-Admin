import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import { registerStore } from "./store";
import { createTheme, getSystemLocalTheme } from "@/utils/theme-helper";

/**
 * styles
 * */
import "./assets/styles/reset.scss";
import "element-plus/dist/index.css";
import "./assets/styles/common.scss";

/**
 * JavaScript
 * */
import "./router-permissions";

const app = createApp(App);
// 获取当前主题色彩方案
const currentTheme: string = getSystemLocalTheme();
// 注入主题切换逻辑
const theme = createTheme(currentTheme);
// 配置系统主题色切换监听逻辑
theme.checkSystemTheme();

app.use(createPinia());
registerStore();
app.use(router);
app.use(theme);
app.mount("#app");
