import Vue from "vue";
import VueResizeText from "vue-resize-text";

import App from "./App.vue";

Vue.use(VueResizeText);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
