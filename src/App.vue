<template>
<div id="app">
    <app-header></app-header>
    <app-topStories></app-topStories>
    <app-story></app-story>
    <app-backToTop></app-backToTop>
</div>
</template>

<script>
import appHeader from './components/Header.vue'
import appTopStories from './components/TopStories.vue'
import appStory from './components/Story.vue'
import appBackToTop from './components/BackToTop.vue'
export default {
    name: 'app',
    data() {
        return {}
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

<style lang="scss" scoped>
#app {}
</style>
