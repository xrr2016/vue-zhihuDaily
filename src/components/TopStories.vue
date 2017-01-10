<template lang="html">
  <div class="container">
    TopStories
    <ul>
      <li v-for="story of topStories"> {{ story.title }}</li>
    </ul>
  </div>
</template>

<script>
import { getLatest } from '../api.js'
export default {
    data() {
        return {
          topStories : null
        }
    },
    computed: {

    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
  .topStories{}
</style>
