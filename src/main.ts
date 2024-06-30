import { createApp } from "vue";
import App from "./App.vue";

// 全局样式
import "./styles/index.scss";

// 引入resize
// import "./utils/resize";
// 引入Pinia和vueRouter
import router from "@/router";

const app = createApp(App);

app.use(router);
app.mount("#app");
