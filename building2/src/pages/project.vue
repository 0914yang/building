<template>
<div class="userList">
  <transition name="el-zoom-in-top" appear style="height: 100%;">
    <el-card shadow="always" class="user-card" style="height:100%">
      <h2 style="text-align:center;">工程项目列表</h2>
      <el-autocomplete class="serchProject" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入工程项目相关信息" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
      <el-card shadow="always" class="condition" style="height:100%">
        <div>所在省份：
          <el-checkbox-group v-model="checkedProvince" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="province in provinceList" :label="province" :key="province">{{province}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div>所属行业：
          <el-checkbox-group v-model="checkedType" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="type in typeList" :label="type" :key="type">{{type}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-card>
      <el-table :data="projectList" align="center" width="100%" @row-click="seeDetial">
        <el-table-column align="center" label="工程名称" min-width="20%">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PName}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="所在省份" min-width="3%">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PProvince }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="工程类型" min-width="11%">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PType }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="工程造价" min-width="5%">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PCost }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      getListUrl: "/search/projectMenu",
      projectList: [],
      provinceList: ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林",
        "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南",
        "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏",
        "陕西", "甘肃", "青海", "宁夏", "新疆",
      ],
      typeList: ["住宅建筑",
        "风电",
        "文教建筑",
        "工业建筑",
        "垃圾焚烧发电",
        "养殖业",
        "医疗建筑",
        "轨道交通",
        "机场铁路航道",
        "火电",
        "办公建筑",
        "石油石化",
      ],
      checkedProvince: [],
      checkedType: [],
      page: 1,
      province: null,
      industry: null,
    }
  },
  methods: {
    getList() {
      var params = new URLSearchParams();
      params.append('page', this.page);
      params.append('province', this.province);
      params.append('industry', this.industry);
      this.$axios({
          method: 'get',
          url: this.getListUrl,
          params: params,
        })
        .then(res => {
          var list = res.data;
          this.projectList.splice(0, this.projectList.length); //先清空数组
          for (var i = 0; i < list.length; i++) {
            this.projectList.push({
              'PName': list[i].Project_name,
              'PProvince': list[i].Project_province,
              'PType': list[i].Project_industry,
              'PCost': list[i].Project_costs,
              'PID': list[i].Project_number,
            });
          }

        })
        .catch(err => {
          console.log("error:" + err);
          alert("服务器出现故障，请稍后再试！");
        })
    },
    seeDetial(row, event, column) {
      console.log(row, event, column)
    }
  },
  created() {
    this.getList();
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
  margin-left: 0;
}

.el-dialog {
  width: 400px;
  text-align: center;
}

.dialog-footer {
  text-align: center;
}

.add-input {
  width: 200px;
  float: left;
}

.condition {
  margin-top: 15px;
}
</style>
