<template>
<div id="app">
    <app-header></app-header>
    <app-topStories></app-topStories>
    <router-view></router-view>
    <app-backToTop></app-backToTop>
</div>
</template>

<script>
import appHeader from './components/Header.vue'
import appTopStories from './components/TopStories.vue'
import appStory from './components/Story.vue'
import appBackToTop from './components/BackToTop.vue'
import { getStories } from './api/fetchData'
const data = getStories()
console.log(data) 
export default {
    created(){
      // this.$store.commit('setDate',this.data.date)
    },
    name: 'app',
    data() {
        return {
          data
        }
    },
    methods: {
    },
    components:{
      appTopStories,
      appHeader,
      appStory,
      appBackToTop
    }
}
</script>

<style lang="scss">
#app {}
</style>
