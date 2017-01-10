import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    date:'',
    stories:[],
    topStories:[]
  },
  getters:{
    getTopStories(state){
      return state.topStories
    },
    getStories(state){
      return state.stories
    },
    getDate(state){
      return state.date
    }
  },
  mutations:{
      setStories(state,data){
        state.stories = [...data.stories]
      },
      setTopStories(state,data){
        state.topStories = [...data.top_stories]
      },
      setDate(state,data){
        state.stories = data.date
      }
  },
  actions:{}
})
