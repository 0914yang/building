
<template>
<div style="height:100%">
  <el-container>
    <el-aside>
      <aside-vue></aside-vue>
    </el-aside>

    <el-container>
      <el-header height="50px">
        <header-vue></header-vue>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
body {
  margin: 0px;
  height: 100%;
}

.home-page {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #242f42;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
  min-width: 1345px;

}

.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  min-height: 600px;

}

.el-main {
  display: block;
  position: absolute;
  right: 0;
  left: 150px;
  top: 50px;
  bottom: 0;
  min-width: 1200px;
  height: 92%;
  /* padding: 5px */
}
</style>
