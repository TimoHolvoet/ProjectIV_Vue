import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-camera',
  'a-box'
]
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
