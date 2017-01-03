import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: {
    color:'light-blue',
    hue:500
  },
  accent: 'cyan',
  warn: 'red',
  background: {
    color:'blue-grey',
    hue:2000
  }
})


new Vue({
  render: h => h(App)
}).$mount('#app')
