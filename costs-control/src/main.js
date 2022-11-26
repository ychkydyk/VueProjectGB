import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router";
import ModalWindow from "@/pluguins/ModalWindow";

Vue.config.productionTip = false;
Vue.use(ModalWindow)

new Vue({
  render: function (h) { return h(App) },
  store,
  router,
}).$mount('#app')
