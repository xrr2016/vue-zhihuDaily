<template lang="html">
  <div class="topStories">
    <ul>
      <li v-for="story of this.topStories"> {{ story.title }}</li>
    </ul>
  </div>
</template>

<script>
// import API from '../api.js'
export default {
    created() {
    },
    data() {
        return {
          topStories : this.$get('/news/latest')
                           .then(res => {
                            const topStories = res.data.top_stories
                            return topStories
                          })
                          .catch((err) => {
                            console.log(err.message)
                          })
                }
    },
    computed: {

    },
    methods: {}
}
</script>

<style lang="scss" scoped>
  .topStories{}
</style>
