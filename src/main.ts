import { createApp } from "vue";
import App from "./views/App/App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store).use(router).mount("#app");
