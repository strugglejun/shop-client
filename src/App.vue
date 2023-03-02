<template>
  <div id="app">
      <Header></Header>
      <!-- 所有的一级路由在此显示 -->
      <router-view></router-view>     
      <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,Footer
  },
  mounted(){
        // 1.分发请求获取三级分类列表的异步action
        this.$store.dispatch('getCategoryList')
        // 2.分发请求轮播图列表的异步action
        this.$store.dispatch('getBannerList')
    }
}
</script>

<style lang="less" scoped>

</style>
