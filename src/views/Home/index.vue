<template>
  <div class="shop-cart-wrap">

    <my-swiper></my-swiper>

    <list></list>

    <my-nav></my-nav>
  </div>
</template>

<script>
/* eslint-disable indent */
import MyNav from '@/components/Nav.vue'
  import MySwiper from './components/swiper.vue'
  import List from './components/List.vue'
  export default {
    name: 'home',
    components: {
      MySwiper,
      List,
      MyNav
    },
    data () {
      return {

      }
    },
    computed: {

    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/public.scss";

</style>
