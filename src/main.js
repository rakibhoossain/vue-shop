import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
window.$ = window.jQuery = require("jquery");
import "bootstrap";
import "font-awesome/css/font-awesome.css";
import "./assets/style.scss";

import "./assets/css/slick.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/font.awesome.css";
import "./assets/css/ionicons.min.css";
import "./assets/css/linearicons.css";
import "./assets/css/animate.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/slinky.menu.css";
import "./assets/css/plugins.css";

import "./assets/css/style.css";
let owl_carousel = require("owl.carousel");
import "owl.carousel/dist/assets/owl.carousel.min.css";
window.fn = owl_carousel;
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
