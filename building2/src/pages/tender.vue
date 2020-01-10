<template>
<div class="userList">
  <transition name="el-zoom-in-top" appear style="height: 100%;">
    <el-card shadow="always" class="user-card" style="height:100%">
      <h2 style="text-align:center;">招标信息列表</h2>
      <el-autocomplete class="serchProject" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入工程项目相关信息" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
      <el-button type="primary" icon="el-icon-search">搜索招标信息</el-button>
      <el-card shadow="always" class="condition" style="height:100%">
        <div>所在省份：
          <el-checkbox-group v-model="checkedProvince" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="province in provinceList" :label="province" :key="province">{{province}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <el-button style="margin-left: 40%;" type="primary" @click="reSearch">确认筛选条件</el-button>
      </el-card>
      <el-table :data="tenderList" align="center" width="100%" @row-click="seeDetial">
        <el-table-column align="center" label="招标信息名称" min-width="20%">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PName}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="所在省份" min-width="10%">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PProvince }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="发布时间" min-width="10%">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PTime }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="text-align: center;" @current-change="changePage()" :current-page.sync="page" layout="prev, pager, next, jumper" :total="pageToatl">
      </el-pagination>
    </el-card>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      getListUrl: "/search/bidMenu",
      tenderList: [],
      provinceList: ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林",
        "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南",
        "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏",
        "陕西", "甘肃", "青海", "宁夏", "新疆",
      ],
      checkedProvince: [],
      page: 1,
      province: null,
      pageToatl: 360,
      state2: "",
    }
  },
  methods: {
    getList(page) {
      var params = new URLSearchParams();
      params.append('page', page);
      params.append('province', this.province);
      this.$axios({
          method: 'get',
          url: this.getListUrl,
          params: params,
        })
        .then(res => {
          var list = res.data;
          this.tenderList.splice(0, this.tenderList.length); //先清空数组
          for (var i = 0; i < list.length; i++) {
            this.tenderList.push({
              'PName': list[i].Bid_name,
              'PProvince': list[i].Bid_city,
              'PTime': list[i].Bid_date,
            });
          }
        })
        .catch(err => {
          console.log("error:" + err);
          alert("服务器出现故障，请稍后再试！");
        })
    },
    seeDetial(row, event, column) {
      this.$router.push({
        name: 'tenderDetail',
      })
    },
    changePage() {
      this.getList(this.page);
    },
    reSearch() {
      if (this.checkedProvince != "") {
        this.province = this.checkedProvince;
      }
      if (this.checkedType != "") {
        this.industry = this.checkedType;
      }
      this.page = 1;
      this.getList(this.page);
      this.pageToatl = 1;
    },
  },
  created() {
    this.getList(this.page);
    this.pageToatl = 360;
  },
}
</script>

<style>
.userList .el-card__body {
  padding: 20px;
}

.serchProject {
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;
  width: 80%;
  height: 30px;
  margin-left: 5%;
}

.add-input {
  width: 200px;
  float: left;
}

.condition {
  margin-top: 15px;
}
</style>
