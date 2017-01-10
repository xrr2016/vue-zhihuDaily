import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    topStories:[
      {id:1,text:'aaa'},
      {id:2,text:'bbb'},
      {id:3,text:'ccc'},
      {id:4,text:'ddd'},
      {id:5,text:'eee'}
    ]
  },
  getters:{
    getTopStories(state){
      return state.topStories
    }
  },
  mutations:{},
  actions:{}
})
