import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/routes'
import './assets/style.scss';
Vue.config.productionTip = false
Vue.prototype.$mainRoute = '/modules/configurador/assets/images';

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
