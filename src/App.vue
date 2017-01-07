<template>
<div id="app">
    <Header></Header>
    <TopStories></TopStories>
</div>
</template>

<script>
import Header from './components/Header.vue'
import TopStories from './components/TopStories.vue'
export default {
    name: 'app',
    data() {
        return {}
    },
    methods: {

    },
    components:{
      TopStories,
      Header
    }
}
</script>

<style lang="scss" scoped>
#app {}
</style>
