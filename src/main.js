import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router.js';
import VueRouter from 'vue-router'
import FlagIcon from 'vue-flag-icon';
import i18n from '@/plugins/i18n';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(FlagIcon);
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(i18n);
new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
