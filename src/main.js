import '@babel/polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
