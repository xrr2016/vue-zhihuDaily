<template lang="html">
  <div class="container">
    TopStories
    <ul>
      <li v-for="story of topStories"> {{ story.id }}:{{story.text}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
          topStories : $store.getters.getTopStories
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
