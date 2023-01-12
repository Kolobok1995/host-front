import Vue from 'vue'
import router from './router'
import App from './App.vue'
import '@/assets/scss/index.scss'
//import '@/assets/scss/variables.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
