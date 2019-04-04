<template>
  <div id="app">

    <router-link to="/home">首页</router-link> |
    <router-link to="/type">分类</router-link> |
    <router-link to="/cart">购物车</router-link> |
    <router-link to="/login">登录</router-link> |
    <router-link to="/details">详情</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/public.scss";
</style>
