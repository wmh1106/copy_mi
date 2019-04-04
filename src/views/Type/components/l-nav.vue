<template>
  <div class="l-scroll" ref="my-scroll">
    <ul>
      <li v-for="(item, index) in typeList" :key="index" :class="{active: activeClass===index}" @click="addClassItem(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'l-nav',
  data () {
    return {
      scroll: null,
      activeClass: 0,
      typeList: ['新品', '众筹', '手机', '电视', '电脑', '家电', '路由', '出行', '穿戴', '新品', '众筹', '手机', '电视', '电脑', '家电', '路由', '出行', '穿戴', '新品', '众筹', '手机', '电视', '电脑', '家电', '路由', '出行', '穿戴', '新品', '众筹', '手机', '电视', '电脑', '家电', '路由', '出行', '穿戴']
    }
  },
  methods: {
    addClassItem (index) {
      this.activeClass = index
    }
  },
  mounted () {
    const dom = this.$refs['my-scroll']
    this.scroll = new BScroll(dom, {
      click: true,
      bounce: false
    })
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/style/public.scss";

  .l-scroll {
    position: fixed;
    top: px(50);
    bottom: px(50);
    left: 0;
    width: px(80);
    border-right: 1px solid #efefef;
    overflow: hidden;
    li {
      font-size: px(18);
      height: px(46);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      transition: transform .1s linear;
      transform-origin: center center;
      transform: scale(.76);
      &.active {
        color: $theme;
        transform: scale(1);
      }
    }
  }
</style>
