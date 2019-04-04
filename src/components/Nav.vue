<template>
  <nav>
    <router-link to="/home" tag="div">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-home"></use>
      </svg>
      <span>首页</span>
    </router-link>
    <router-link to="/type" tag="div">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-type"></use>
      </svg>
      <span>分类</span>
    </router-link>
    <router-link to="/cart" tag="div">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-cart"></use>
      </svg>
      <span>购物车</span>
    </router-link>
    <router-link to="/login" tag="div">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-user"></use>
      </svg>
      <span>我的</span>
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
  @import "~@/assets/style/public.scss";
  nav{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: px(50);
    display: flex;
    align-items: center;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    background: #fff;
    &>div{
      flex-shrink: 0;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $color_2;
      font-size: px(12);
      &.router-link-active{
        color: $theme;
      }
    }
    .icon{
      font-size: px(24);
    }
  }
</style>
