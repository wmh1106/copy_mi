<template>
  <ul class="shop-list">
    <li v-for="n in [1,2,3,4,5,6,7,8]" :key="n">
      <div class="show-img" style="" v-show="n"></div>
      <div class="details">
        <h4 class="title">小米电视4X 55英寸</h4>
        <p class="tag">4K HDR，人工智能语音</p>
        <div class="price">
          <span>￥1999</span>
          <span>￥2300</span>
        </div>
      </div>
    </li>
    <li>
      <div class="show-img" style=""></div>
      <div class="details">
        <h4 class="title">小米电视4X 55英寸</h4>
        <p class="tag">4K HDR，人工智能语音</p>
        <div class="price">
          <span>￥1999</span>
          <span>￥2300</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List.vue'
}
</script>

<style scoped lang="scss">
  @import "~@/assets/style/public.scss";
  .shop-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
      flex-shrink: 0;
      width: 50%;
      max-width: 180px;
      .show-img{
        width: 100%;
        padding-top: 100%;
        height: 0;
        background:url('../../../assets/images/img/2.webp') no-repeat center center;
        background-size: cover;
      }
      .details{
        padding: px(10) px(14);
      }
      .title{
        font-size: 14px;
        font-weight: normal;
      }
      .tag{
        color: $color_light;
        font-size: 12px;
      }
      .price{
        font-size: 12px;
        span:nth-child(1){
          color: $theme;
          font-size: 14px;
        }
      }
    }
  }
</style>
