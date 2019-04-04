<template>
  <div class="main">
    <div class="top">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-back-two"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-share"></use>
      </svg>
    </div>
    <swiper></swiper>
    <div class="content">
      <h2>小米MIX 3 极简保护壳</h2>
      <div class="describe">时尚简约设计，手感细腻顺滑 / 优质环保PC原材料，强韧张力，经久耐用 / 超薄 0.8MM厚度</div>
      <div class="price">
        <span>￥12.9</span>
        <span>￥49</span>
      </div>

      <section>
        <div class="section-detail">
          <div>
            <span>促销</span>
            <span>赠米粉卡，最高含100元话费</span>
          </div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-right"></use>
          </svg>
        </div>
      </section>

      <section>
        <div class="section-detail">
          <div>
            <span>促销</span>
            <span>赠米粉卡，最高含100元话费</span>
          </div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-right"></use>
          </svg>
        </div>
        <div class="section-detail">
          <div>
            <span>促销</span>
            <span>赠米粉卡，最高含100元话费</span>
          </div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-right"></use>
          </svg>
        </div>
        <div class="section-detail">
          <div>
            <span>促销</span>
            <span>赠米粉卡，最高含100元话费</span>
          </div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-right"></use>
          </svg>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import swiper from './components/swiper.vue'
export default {
  components: {
    swiper
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/style/public.scss";
  .main{
    position: relative;
  }
  .top{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    height: px(50);
    display: flex;
    justify-content: space-between;
    .icon{
      width: px(50);
      height: px(50);
      padding: px(8);
      color: $color_0;
    }
  }
  .content{
    padding: px(16) px(16) 0;
    h2{
      font-size: px(20);
      font-weight: normal;
    }
    .describe{
      font-size: px(12);
      color: $color_2;
    }
    .price{
      span:nth-child(1){
        color: $theme;
        font-size: px(25);
        padding-right: px(5);
      }
      span:nth-child(2){
        color: $color_1;
        font-size: px(12);
        text-decoration: line-through;
      }
    }
    section{
      position: relative;
      background: #fafafa;
      color: $color_2;
      font-size: px(14);
      border-radius: px(10);
      overflow: hidden;
      margin-top: px(20);
      &:before {
        content: '';
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 0;
        border: 1px solid rgba(153,153,153,0.2);
        transform-origin: 0 0;
         width: 200%;
         height: 200%;
         transform: scale(.5);
      }
      .section-detail{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: px(40);
        padding:0  px(16);
      }
    }
  }
</style>
