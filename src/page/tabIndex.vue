<template lang="html">
    <div class="tabindex">
        <div class="indexContent">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        
        <van-tabbar  v-model="active">
          <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item replace to="/recommend" icon="friends-o">每日疯抢</van-tabbar-item>
          <van-tabbar-item replace to="/search" icon="search">今日搜索</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
    
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    activeRoute() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped lang="css">
.indexContent{
  /* background-color: red; */
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: calc(100% - 50px);
}
</style>