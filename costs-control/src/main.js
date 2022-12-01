import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router";
import modal from "@/pluguins/ModalWindow";
import context from "@/pluguins/ContextWindow";

Vue.config.productionTip = false;

Vue.use(modal);
Vue.use(context);

new Vue({
  render: function (h) { return h(App) },
  store,
  router,
}).$mount('#app')
