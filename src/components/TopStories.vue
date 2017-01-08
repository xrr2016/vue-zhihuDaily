<template lang="html">
  <div class="topStories">
    {{ topStories }}
  </div>
</template>

<script>
import API from '../api.js'
export default {
  data(){
    return{
      topStories : API.getLatest()
    }
  },
  computed:{
  }
}
</script>

<style lang="scss" scoped>

</style>
