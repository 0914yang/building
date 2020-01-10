<template>
<div class="userList">
  <transition name="el-zoom-in-top" appear style="height: 100%;">
    <el-row>
      <el-col :span="6" v-for="developer in developers" :key="item">
        <el-card shadow="always" class="detail" style="height:500px;width:100%">
          <h2 class="medium1">{{developer.name}}</h2>
          <img :src="getCover(developer.name) " class="cover1">
          <h2 class="medium1">{{developer.duty}}</h2>
        </el-card>
      </el-col>
    </el-row>


  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      developers: [{
        name: "李瑾然",
        duty: "信息爬虫",
      }, {
        name: "林浩洋",
        duty: "前端开发",
      }, {
        name: "陈洛杰",
        duty: "后端开发",
      }, {
        name: "赵思成",
        duty: "系统测试",
      }]
    }
  },
  methods: {
    getCover(picture) {
      var src = require("@/assets/" + picture + ".jpg");
      return src;
    },
  },
  created() {},
}
</script>

  <style>
.medium1{
  text-align: center;
}
.cover1{
  text-align: center;
  height: 200px;
  margin-left: 12%;
  border-radius:50%;
}


  </style>
