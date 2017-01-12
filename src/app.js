import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/index.js'
import Element from 'element-ui'
import '../node_modules/element-ui/src/index.js'
Vue.use(Element)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
