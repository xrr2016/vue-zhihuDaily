import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes/router'
import store from './store/index.js'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
