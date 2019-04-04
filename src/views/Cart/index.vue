<template>
  <div class="shop-cart-wrap">

    <top></top>

    <div class="shopping-list">
      <ul>
        <li>
          <svg class="icon checked" aria-hidden="true">
            <use xlink:href="#i-checked"></use>
          </svg>
          <div class="show-icon">
            <div class="img" style="background-image: url('https://i1.mifile.cn/a1/pms_1539913759.18356169.jpg')"></div>
          </div>
          <div class="message">
            <h4>黑鲨游戏手机 Helo 8GB内存 黑色 128GB</h4>
            <p class="price">售价：3199元</p>
            <div class="xm-input-box">
              <div class="xm-input-number">
                <svg class="icon input-sub" aria-hidden="true">
                  <use xlink:href="#i-minus"></use>
                </svg>
                <div class="input-num">1</div>
                <svg class="icon input-add active" aria-hidden="true">
                  <use xlink:href="#i-plus"></use>
                </svg>
              </div>
              <svg class="icon delete" aria-hidden="true">
                <use xlink:href="#i-delete"></use>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="bottom">
      <div>
        <p>共2件 金额:</p>
        <p><span>3199</span><span>元</span></p>
      </div>
      <div>继续购物</div>
      <div>去结算</div>
    </div>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'

export default {
  name: 'shop_cart',
  components: {
    Top
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/assets/style/public.scss";
  .shop-cart-wrap {
  }
  .bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: px(50);
    display: flex;
    & > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: px(14);
      &:nth-of-type(1) {
        background: #fff;
        color: $color_2;
        p:nth-of-type(2) {
          color: $theme;
          font-size: px(20);
          font-weight: bold;
        }
      }
      &:nth-of-type(2) {
        background: #f2f2f2;
        color: $color_1;
      }
      &:nth-of-type(3) {
        background: $theme;
        color: #fff;
      }
    }
  }

  .shopping-list{
    padding: 0 px(16) 0 0;
    li{
      padding: px(10) 0;
      height: px(140);
      display: flex;
      align-items: center;
      .checked{
        width: px(30);
        height: px(30);
        margin: 0 px(5);
        color: $theme;
      }
      .show-icon{
        width: px(92);
        height: px(92);
        border: 1px solid #ddd;
        margin-right: px(10);
        .img{
          width: 100%;
          height: 100%;
          background: no-repeat center center;
          background-size: cover;
        }
      }
      .message{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h4{
          font-weight: normal;
          color: $color_1;
        }
        .price{
          color: $color_2;
          font-size: px(12);
        }
        .xm-input-box{
          display: flex;
          justify-content: space-between;
          .delete{
            width: px(30);
            height: px(30);
            padding: px(2);
            color: $color_2;
          }
        }
        .xm-input-number{
          display: flex;
          align-items: center;
          width: px(100);
          border: 1px solid $color_light;
          .icon{
            width: px(30);
            height: px(30);
            padding: px(5);
            background: #fafafa;
            color: #ddd;
            &.active{
              background: #f4f4f4;
              color: $color_1;
            }
            &.input-sub{
              border-right: 1px solid $color_light;
            }
            &.input-add{
              border-left: 1px solid $color_light;
            }
          }
          .input-num{
            flex:1;
            text-align: center;
          }
        }
      }
    }
  }
</style>
