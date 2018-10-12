import '@babel/polyfill'
import Vue from 'vue'
// import './plugins/vuetify'
// import './plugins/vuesax'
import './plugins/buefy'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

import router from './router'
import store from './store'

import './styles/quasar.styl'
import iconSet from 'quasar-framework/icons/fontawesome'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}, iconSet: iconSet
 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
