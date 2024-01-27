<template>
  <Nav>
    <div style="width: 100%;text-align: center;height: 130px;">
      <span class="main-nav-text">人力资源数据可视化系统</span>
    </div>
    <div class="nav-data">
    </div>
  </Nav>
  <router-view/>
</template>

<style lang="less">
.main-nav-text{
  font-size: 5rem;
}
.nav-data{
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: blue;
  width: 250px;
  height: 130px;
}
</style>
