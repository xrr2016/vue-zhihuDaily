import Vue from 'vue'
import Vuex from 'vuex'
import { getStories } from '../api/fetchData'

Vue.use(Vuex)

const stories = getStories()

export default new Vuex.Store({
  state:{
    stories
  },
  getters:{
    getTopStories(state){
      return state.topStories
    }
  },
  mutations:{

  },
  actions:{}
})
