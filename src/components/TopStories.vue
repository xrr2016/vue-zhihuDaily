<template lang="html">
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiperA" class="swiper">
      <!-- 幻灯内容 -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
          topStories : this.$store.getters.getTopStories,
          swiperOption:{
            autoHeight:true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next'
          }
        }
    },
    computed: {

    },
    methods: {

    },
    components:{
      swiper,
      swiperSlide
    }
}
</script>

<style lang="scss" scoped>
  .swiper{
    
  }
</style>
