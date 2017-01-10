import Vue from 'vue'
import VueRouter from 'vue-router'

import SingleDay from '../components/SingleDay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:SingleDay
  }
]

const router = new VueRouter({
  routes
})

export default router
