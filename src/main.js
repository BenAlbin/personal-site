import '@babel/polyfill'
import Vue from 'vue'
import router from './router'
import './plugins/vuetify'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
