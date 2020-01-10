<template>
<div class="userList">
  <transition name="el-zoom-in-top" appear style="height: 100%;">
    <el-card shadow="always" class="user-card" style="height:100%">
      <h2 style="text-align:center;">建筑行业新闻资讯</h2>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="news in topNews" :key="item">
          <p class="medium">{{news.name}}</p>
          <img :src="getCover(news.picture) " class="cover">

        </el-carousel-item>
      </el-carousel>
      <el-row>
        <el-col :span="12">
          <el-card shadow="none" class="user-card" style="height:100%">
            <h2 style="text-align:left;">建筑知识</h2>

            <el-table :data="newsList" align="center" width="100%" @row-click="seeDetial">
              <el-table-column align="center" label="新闻标题" min-width="20%">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.NName}}</span>
                </template>
              </el-table-column>

              <!-- <el-table-column align="center" label="所在省份" min-width="10%">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.Ncontent }}</span>
                  </template>
                </el-table-column> -->
              <el-table-column align="center" label="发布时间" min-width="6%">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.NTime }}</span>
                </template>
              </el-table-column>
            </el-table>
            <p style="text-align:right;">更多</p>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="none" class="user-card" style="height:100%">
            <h2 style="text-align:left;">建筑资讯</h2>

            <el-table :data="newsList2" align="center" width="100%" @row-click="seeDetial">
              <el-table-column align="center" label="新闻标题" min-width="20%">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.NName}}</span>
                </template>
              </el-table-column>

              <!-- <el-table-column align="center" label="所在省份" min-width="10%">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.Ncontent }}</span>
                  </template>
                </el-table-column> -->
              <el-table-column align="center" label="发布时间" min-width="6%">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.NTime }}</span>
                </template>
              </el-table-column>
            </el-table>
            <p style="text-align:right;">更多</p>
          </el-card>
        </el-col>

      </el-row>
    </el-card>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      getListUrl: "/search/newsMenu",
      newsList: [],
      newsList2: [],
      page: 1,
      province: null,
      pageToatl: 25,
      state2: "",
      topNews: [{
          name: "抗震设计在高层建筑结构设计中的应用",
          picture: "p1"
        },
        {
          name: "私人别墅建筑设计方案",
          picture: "p2"
        },
        {
          name: "木结构耐用性如何？",
          picture: "p3"
        },
        {
          name: "商业广场布局合理性",
          picture: "p4"
        },
      ]
    }
  },
  methods: {
    getCover(picture) {
      var src = require("@/assets/" + picture + ".jpg");
      return src;
    },
    getList(page) {
      var params = new URLSearchParams();
      params.append('page', page);
      this.$axios({
          method: 'get',
          url: this.getListUrl,
          params: params,
        })
        .then(res => {
          if (page == 1) {
            var list = res.data;
            this.newsList.splice(0, this.newsList.length); //先清空数组
            for (var i = 0; i < list.length; i++) {
              this.newsList.push({
                'NName': list[i].News_name,
                'Ncontent': list[i].News_content,
                'NTime': list[i].News_time,
              });
            }
          } else {
            var list = res.data;
            this.newsList2.splice(0, this.newsList2.length); //先清空数组
            for (var i = 0; i < list.length; i++) {
              this.newsList2.push({
                'NName': list[i].News_name,
                'Ncontent': list[i].News_content,
                'NTime': list[i].News_time,
              });
            }
          }

        })
        .catch(err => {
          console.log("error:" + err);
          alert("服务器出现故障，请稍后再试！");
        })
    },
    seeDetial(row, event, column) {
      this.$router.push({
        name: 'newsDetail',
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
    this.getList(1);
    this.getList(2);
    this.pageToatl = 25;
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

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.cover {
  width: 100%;
  height: 100%;
  padding: 0;
  object-fit: cover;
}

.medium {
  font-size: 24px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 0;
  text-align: center;
}
</style>
