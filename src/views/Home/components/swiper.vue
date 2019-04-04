<template>
  <div class="my-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="@/assets/images/img/1.webp" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/img/1.webp" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/img/1.webp" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/public.scss";
  .my-swiper{
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>
