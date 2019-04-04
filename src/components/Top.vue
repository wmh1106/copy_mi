<template>
  <div class="top">
    <svg class="icon logo" aria-hidden="true">
      <use xlink:href="#i-back"></use>
    </svg>

    <h3>购物车</h3>

    <svg class="icon logo" aria-hidden="true">
      <use xlink:href="#i-search"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'top.vue'
}
</script>

<style scoped lang="scss">
  @import "~@/assets/style/public.scss";
  .top {
    display: flex;
    align-items: center;
    height: px(50);
    background: #f2f2f2;
  h3 {
    flex: 1;
    text-align: center;
    font-size: px(16);
    color: $color_1;
    font-weight: normal;
  }
  .icon {
    width: px(50);
    height: px(50);
    padding: px(12);
    color: $color_2;
  }
  }
</style>
