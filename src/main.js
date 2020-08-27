import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
window.$ = window.jQuery = require("jquery");
import "bootstrap";
import "font-awesome/css/font-awesome.css";
import "./assets/style.scss";
import "./assets/css/style.css";
let owl_carousel = require("owl.carousel");
import "owl.carousel/dist/assets/owl.carousel.min.css";
window.fn = owl_carousel;
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
