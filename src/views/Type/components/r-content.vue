<template>
  <div class="r-main" ref="content-scroll">
    <div class="content-list">
      <div class="content">
        <div class="banner">
          <img src="../../../assets/images/img/3.jpg" alt="">
        </div>
        <nav><span>穿戴</span></nav>
        <ul class="product-list">
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>


        </ul>

        <a class="link" href="###">进入智能频道&nbsp;&gt;</a>
      </div>

      <div class="content">
        <div class="banner">
          <img src="../../../assets/images/img/3.jpg" alt="">
        </div>
        <nav><span>穿戴</span></nav>
        <ul class="product-list">
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>
          <li>
            <img src="../../../assets/images/img/4.png" alt="">
            <span>手环</span>
          </li>


        </ul>
        <a class="link" href="###">进入智能频道&nbsp;&gt;</a>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'r-content',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    const dom = this.$refs['content-scroll']
    this.scroll = new BScroll(dom, {
      click: true,
      bounce: false
    })
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/style/public.scss";

  .r-main {
    position: fixed;
    top: px(50);
    bottom: px(50);
    right: px(16);
    left: px(96);
    overflow: hidden;
    .content {}
    .banner img {
      width: 100%;
    }
    nav {
      position: relative;
      color: $color_2;
      height: px(66);
      margin-top: px(10);
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        position: relative;
        font-size: px(14);
        &:before, &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: px(20);
          border-top: 1px solid $color_light;
          transform: translate3d(-150%, -50%, 0);
        }
        &:after {
          left: auto;
          right: 0;
          transform: translate3d(150%, -50%, 0);
        }
      }
    }
    .product-list {
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        flex-shrink: 0;
        margin: px(10) 0 px(15);
        img {
          width: px(52);
          height: px(52);
        }
        span {
          display: block;
          margin-top: px(10);
          font-size: px(12);
          color: $color_2;
        }
      }
    }
    .link{
      display: block;
      width: 100%;
      height: px(40);
      text-align: center;
      line-height: px(40);
      background: linear-gradient(#f8f3e8, #faf2e8);
      color: #9ea090;
      font-size: px(14);
    }
  }
</style>
