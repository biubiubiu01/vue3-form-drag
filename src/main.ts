import { createApp } from "vue";
import App from "./App.vue";

import { setupPinia } from "./stores";

import router from "./router/index";

import "./styles/index.scss";

import { setupIcon } from "@/plugins";

const app = createApp(App);

const setupPlugins = () => {
    // 注册pinia
    setupPinia(app);
    // 注册el-icon图标
    setupIcon(app);
};

setupPlugins();

app.use(router).mount("#app");
