<template>
  <div class="my-swiper">
    <div class="s">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img src="@/assets/images/img/5.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/img/5.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/img/5.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/img/5.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
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
    position: relative;
    width: 100%;
    padding-top: 109%;
    height: 0;
    overflow: hidden;
    .s{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    img{
      width: 100%;
    }
  }
</style>
