<template>
  <div>
    <top></top>
    <div class="content">
      <l-nav></l-nav>
      <r-content></r-content>
    </div>
    <my-nav></my-nav>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import MyNav from '@/components/Nav.vue'
import LNav from './components/l-nav.vue'
import RContent from './components/r-content.vue'
export default {
  name: 'index',
  components: {
    Top,
    MyNav,
    LNav,
    RContent
  }
}
</script>

<style scoped>

</style>
