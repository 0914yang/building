<template>
<div class="login-background">
  <div class="login">
    <div class="left-login">
      <img class="logo" src="@/assets/logo4.jpg" width="100px">
      <img class="logo" src="@/assets/logo2.jpg" width="105px">
      <div style="font-size: 80px;font-weight: 600;height:60px">建筑行业信息展示系统</div>
      <div style="font-size: 32px;font-weight: 600;padding-top:40px">集合各大建筑行业网站数据</div>
      <div style="font-size: 32px;font-weight: 600;padding-top:0">直观了解行业动态信息</div>
      <div style="font-size: 24px;font-weight: 300;">综合课程设计Ⅲ<br>指导老师：苏生<br>信息与软件工程学院<br>Google Chrome and Firefox are recommended.</div>
      <el-button style="width:80%;margin-left:10%;margin-top:5%;opacity:0.9;" @click.native.prevent="enter" plain>点击进入系统</el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    enter() {
      this.$router.replace({
        name: 'home'
      });
    }
  },
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0px;
  min-width: 1000px;
}

.login-background {
  /* display: block; */
  width: 100%;
  height: 100%;
  background-image: url(../assets/background.jpg);
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: rgb(252, 71, 223); */
}

.login {
  background-color: rgba(255, 255, 255, 0.5);
  width: 1000px;
  min-width: 500px;
  height: 100%;
  margin: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: Center;
}

.left-login {
  float: left;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.85);
  font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica,
    sans-serif;
  font-weight: 600;
  margin-top: 8vh;
  /* display: table-cell; */
}

.right-login {
  float: right;
  width: 420px;
  height: 300px;
  /* line-height: 0; */
  /* margin-bottom: 0; */
  margin-top: -10vh;
  margin-left: 20px;
}

.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  line-height: 0;
}

.logo {
  border-radius: 50%;
}
</style>
