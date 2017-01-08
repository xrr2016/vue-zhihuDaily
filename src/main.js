import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

const JsonBird = 'https://bird.ioliu.cn/v1/?url='
axios.defaults.baseURL = `${JsonBird}http://news-at.zhihu.com/api/4`

Vue.prototype.$get = axios.get

new Vue({
  created(){
  },
  render: h => h(App)
}).$mount('#app')
