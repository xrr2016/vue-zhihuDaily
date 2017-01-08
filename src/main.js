import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$get = axios.get

new Vue({
  created:(){
  },
  render: h => h(App)
}).$mount('#app')
