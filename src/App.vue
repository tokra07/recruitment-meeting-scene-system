<template>
  <Nav>
    <div style="width: 100%;text-align: center;height: 130px;">
      <span class="main-nav-text">人力资源数据可视化系统</span>
    </div>
    <div class="nav-data">
      <NumInfo/>
    </div>
  </Nav>
  <router-view/>
</template>

<script>
import NumInfo from '@/components/NumInfo.vue'
export default {
  name: 'App',
  components: {
    NumInfo
  },
  mounted () {

  }
}
</script>

<style lang="less">
body,html{
  padding: 0px;
  margin: 0px;
}
.main-nav-text{
  font-size: 4rem;
  line-height: 130px;
}
.nav-data{
  position: absolute;
  top: 0px;
  right: 0px;
  width: 250px;
  height: 130px;
}
</style>
