<template>
<div class="userList">
  <transition name="el-zoom-in-top" appear style="height: 100%;">
    <el-card shadow="always" class="user-card" style="height:100%">
      <h2 style="text-align:center;">{{Pname}}</h2>
      <h3 style="text-align:left;">项目基本信息</h3>
      <el-card shadow="none" class="detail" style="height:100%">
        <el-row>
          <el-col :span="8">版本类型：{{Pversion}}</el-col>
          <el-col :span="8">发布时间:{{Ppublish}}</el-col>
          <el-col :span="8">项目类型:{{Ptype}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8"> 建设周期： {{Pperiod}}</el-col>
          <el-col :span="8">工程造价：{{Pcosts}}</el-col>
          <el-col :span="8">项目规模：{{Pscale}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8"> 项目阶段： {{Pstage}}</el-col>
          <el-col :span="8">占地面积：{{Parea}}</el-col>
          <el-col :span="8">建筑面积： {{PconstructionArea}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8"> 甲方类型： {{Pstage}}</el-col>
          <el-col :span="8">所属行业：{{Parea}}</el-col>
          <el-col :span="8">所属专题： {{Ptopic}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8"> 省份： {{Pprovince}}</el-col>
          <el-col :span="8">城市：{{Pcity}}</el-col>
          <el-col :span="8">结构： {{Pstructure}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8"> 电梯： {{Pelevator}}</el-col>
          <el-col :span="8">空调：{{Pair}}</el-col>
          <el-col :span="8">外墙材料： {{Pmaterial}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8"> 装修情况：{{Pdecoration}}</el-col>
          <el-col :span="8">建筑层数：{{PbuildingLayers}}</el-col>
          <el-col :span="8">外墙材料： {{Pmaterial}}</el-col>
        </el-row>
      </el-card>
      <h3 style="text-align:left;">项目主要采购设备</h3>
      <el-card shadow="none" class="detail" style="height:100%;  white-space: pre-wrap;">
        {{Pdevice}}
      </el-card>
    </el-card>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      getDetailUrl: "/search/projectDetail",
      PID: "",
      Pname: "",
      Pversion: "",
      Ppublish: "",
      Ptype: "",
      Pperiod: "",
      Pcosts: "",
      Pscale: "",
      Pstage: "",
      Premark: "",
      Parea: "",
      PconstructionArea: "",
      Pparty: "",
      Pindustry: "",
      Pprovince: "",
      Pcity: "",
      PbuildingLayers: "",
      Pdecoration: "",
      Pstructure: "",
      Pelevator: "",
      Pair: "",
      Pmaterial: "",
      Pdevice: "",
      Ptopic: "",
    }
  },
  methods: {
    getDetil() {
      var params = new URLSearchParams();
      params.append('Project_id', this.PID);
      this.$axios({
          method: 'get',
          url: this.getDetailUrl,
          params: params,
        })
        .then(res => {
          var Detail = res.data[0];
          console.log(Detail);
          this.Pname = Detail.Project_name;
          this.Pversion = Detail.Project_version;
          this.Ppublish = Detail.Project_publish_time;
          this.Ptype = Detail.Project_type;
          this.Pperiod = Detail.Project_construction_period;
          this.Pcosts = Detail.Project_costs;
          this.Pscale = Detail.Project_scale;
          this.Pstage = Detail.Project_stage;
          this.Premark = Detail.Project_remark;
          this.Parea = Detail.Project_area;
          this.PconstructionArea = Detail.Project_construction_area;
          this.Pparty = Detail.Project_party;
          this.Pindustry = Detail.Project_industry;
          this.Pprovince = Detail.Project_province;
          this.Pcity = Detail.Project_city;
          this.PbuildingLayers = Detail.Project_building_layers;
          this.Pdecoration = Detail.Project_decoration;
          this.Pstructure = Detail.Project_steel_structure;
          this.Pelevator = Detail.Project_elevator;
          this.Pair = Detail.Project_air;
          this.Pmaterial = Detail.Project_wall_material;
          this.Pdevice = Detail.Project_device;
          this.Ptopic = Detail.Project_topic;
          this.Pdevice = this.Pdevice.replace(/\u3002/g, "\n\n");
        })
        .catch(err => {
          console.log("error:" + err);
          alert("服务器出现故障，请稍后再试！");
        })
    },
  },
  created() {
    this.PID = this.$route.params.PID;
    this.getDetil();
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
  .detail{
    text-align: left;
    line-height: 30px;
    font-size: 18px;

  }
  </style>
