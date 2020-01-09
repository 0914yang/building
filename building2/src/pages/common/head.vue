<template>
<transition name="el-zoom-in-top" appear>
  <div class="header">
    <span class="title">建筑行业信息展示系统</span>

  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {}
}
</script>

<style>
.header {
  color: #fff;
}

.header>.header-right {
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  float: right;
  line-height: 48px;
}

.header>.title {
  height: 50px;
  float: left;
  margin-left: 150px;
  font-size: 24px;
  font-weight: bold;
  line-height: 48px;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 28px;
}

/* .btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
} */

.download-content {
  margin-right: 50px;
}

.user-content {
  margin-right: 20px;
  color: #fff;
  font-size: 18px;
}

.el-dropdown>.userinfo {
  color: #fff;
  font-size: 18px;
  display: inline;
  /* line-height: 20px; */
}

.head {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  line-height: 20px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  margin-top: 20px;
  float: left;
}

.username {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
