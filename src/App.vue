<template>
<div id="app">
    <md-toolbar>
        <h1 class="md-title"><img src="./assets/top_logo.png" alt="知乎日报"></h1>
    </md-toolbar>
    <TopStories></TopStories>
</div>
</template>

<script>
import TopStories from './components/TopStories.vue'
export default {
    name: 'app',
    data() {
        return {}
    },
    methods: {

    },
    components:{
      TopStories
    }
}
</script>

<style lang="scss" scoped>
#app {}
</style>
