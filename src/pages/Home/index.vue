<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor01></Floor01>
    <Floor02></Floor02>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor01 from './Floor01'
import Floor02 from './Floor02'
import Brand from './Brand'
export default {
  name: 'Home',
  components: {
    ListContainer, TodayRecommend, Rank, Like, Floor01, Floor02, Brand
  },
  mounted() {
    // 3.分发今日推荐的异步action
    this.$store.dispatch('getRecommendsList')
    // 4.分发楼层的异步action
    this.$store.dispatch('getFloorsList')
  }
}
</script>

<style lang="less" scoped></style>