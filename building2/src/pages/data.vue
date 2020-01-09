<template >
<transition name="el-zoom-in-top" appear style="height: 100%;">
  <el-card id="rankCard" shadow="always" class="rank-card">
    <div style="text-align:center;font-size: 32px;font-weight: 600">系统数据概况</div>
    <div class="dataView">
      结合来自三个大型建筑行业网站数据<br>
      <div >
        收集了来自<span class="number">43</span>个城市，
        共计<span class="number">229</span>条工程项目信息
        和<span class="number">360</span>个工程招标信息
      </div>
      以及建筑行业相关的新闻资讯和行业动态
    </div>
    <el-row>
      <el-col :span="24" style="height: 100%;">
        <div id="pieChart" ref="pieChart"></div>
      </el-col>
      <el-col :span="24" style="height: 100%;">
        <div id="barChart" ref="barChart"></div>
      </el-col>
      <el-col :span="24" style="height: 100%;">
        <div id="cityProject" ref="cityProject"></div>
      </el-col>
    </el-row>
  </el-card>
</transition>
</template>

<script>
import echarts from 'echarts/lib/echarts'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/extension/bmap/bmap'
export default {
  data() {
    return {
      getRankListUrl: '/task/getRankList',
      imgRankUser: [],
      imgRankTagging: [],
      imgRankVerfiy: [],
      videoRankUser: [],
      videoRankTagging: [],
      city: [
     {name: '青岛', value: 10},
     {name: '沈阳', value: 8},
     {name: '北京', value: 8},
     {name: '天津', value: 7},
     {name: '邯郸', value: 6},
     {name: '长春', value: 5},
     {name: '成都', value: 5},
     {name: '上海', value: 4},
     {name: '延安', value: 4},
     {name: '重庆', value: 4},
     {name: '拉萨', value: 2},
     {name: '厦门', value: 2},
     {name: '福州', value: 1},
     {name: '东莞', value: 2},
     {name: '广州', value: 3},
     {name: '深圳', value: 3},
     {name: '珠海', value: 1},
     {name: '大连', value: 1},
     {name: '银川', value: 1},
     {name: '三亚', value: 3},
     {name: '成都', value: 3},
     {name: '桂林', value: 1},
     {name: '张家界', value: 2},
     {name: '西安', value: 2},
     {name: '重庆', value: 3},
     {name: '南京', value: 3},
     {name: '贵阳', value: 1},
     {name: '无锡', value: 2},
     {name: '北京', value: 4},
     {name: '徐州', value: 1},
     {name: '乌鲁木齐', value: 1},
     {name: '杭州', value: 3},
     {name: '兰州', value: 1},
     {name: '哈尔滨', value: 2},
     {name: '石家庄', value: 3},
     {name: '长沙', value: 2},
     {name: '合肥', value: 3},
     {name: '武汉', value: 8},
   ],
   geoCoordMap :{
    '青岛':[120.33,36.07],
    '拉萨':[91.11,29.97],
    '厦门':[118.1,24.46],
    '福州':[119.3,26.08],
    '宁波':[121.56,29.86],
    '东莞':[113.75,23.04],
    '广州':[113.23,23.16],
    '太原':[112.53,37.87],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '沈阳':[123.38,41.8],
    '大连':[121.62,38.92],
    '苏州':[120.62,31.32],
    '银川':[106.27,38.47],
    '三亚':[109.511909,18.252847],
    '西宁':[101.74,36.56],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '桂林':[110.28,25.29],
    '长春':[125.35,43.88],
    '张家界':[110.479191,29.117096],
    '西安':[108.95,34.27],
    '重庆':[106.54,29.59],
    '南京':[118.78,32.04],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '乌鲁木齐':[87.68,43.77],
    '杭州':[120.19,30.26],
    '济南':[117,36.65],
    '温州':[120.65,28.01],
    '兰州':[103.73,36.03],
    '天津':[117.2,39.13],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '石家庄':[114.48,38.03],
    '长沙':[113,28.21],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
},
money:[
  "1000万",  "2000万",  "3000万",  "4000万",  "5000万",  "6000万",  "7000万",
  "8000万",  "9000万",  "1亿",  "2亿",  "3亿",  "4亿",  "5亿",  "6亿",  "7亿",
  "8亿",  "9亿",  "10亿",  "20亿",  "30亿",  "40亿",  "50亿",  "60亿",  "70亿",
  "80亿","90亿","100亿",
],
moneyNum:[
  13,  8,  6,  5,  6,  3,  4,  5,  1,  30,  26,  18,  11,  9,  14,  4,  5,  3,
  15,  10,  6,  9,  3,  1,  0,  1,  2,  10,
],
projectType:[
  "住宅建筑",
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
    }
  },
  methods: {
    //绘制图标，一般无需修改
    convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
},



    drawImg() {
      // 实例化echarts对象
      var pieChart = echarts.init(this.$refs.pieChart)
      // 绘制条形图
      pieChart.setOption({
        title: {
            text: '工程分类项目数量',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: this.projectType,
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
            }
        },
        series: [

            {
                name: '工程分类',
                type: 'pie',
                radius: [30, 200],
                center: ['50%', '50%'],
                roseType: 'area',
                data: [
                    {value: 18, name: "住宅建筑"},
                    {value: 15, name: '风电'},
                    {value: 12, name: '文教建筑'},
                    {value: 10, name: '工业建筑'},
                    {value: 10, name: '垃圾焚烧发电'},
                    {value: 9, name: '养殖业'},
                    {value: 8, name: '医疗建筑'},
                    {value: 7, name: '轨道交通'},
                    {value: 7, name: '机场铁路航道'},
                    {value: 6, name: '火电'},
                    {value: 6, name: '办公建筑'},
                    {value: 6, name: '石油石化'},
                ]
            }
        ]
      })

      var barChart = echarts.init(this.$refs.barChart)
      // 绘制条形图
      barChart.setOption({
        title: {
            text: '工程造价阶梯柱状图',
            left: 'center'
        },
        color: ['#3398DB'],
tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
},
grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
},
xAxis: [
    {
        type: 'category',
        data: this.money,
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
   interval:0,
   rotate:40
}
    }
],

yAxis: [
    {
        type: 'value'
    }
],
series: [
    {
        name: '工程个数',
        type: 'bar',
        barWidth: '60%',
        data: this.moneyNum,
    }
]
      })

      var cityProject = echarts.init(this.$refs.cityProject)
      // 绘制条形图
      cityProject.setOption({
        title: {
            text: '全国各个城市-工程项目和招标信息',
            left: 'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
              console.log("66");
              console.log(params);
                var color = params.color;//图例颜色
                var htmlStr ='<div>';
                htmlStr += params.name + '<br/>';//x轴的名称
                //为了保证和原来的效果一样，这里自己实现了一个点的效果
                htmlStr += '<span ></span>';

                //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
                htmlStr += "工程项目" + '：'+params.value[2] + '个<br/>';
                htmlStr += "招标信息" + '：'+Math.floor((Math.random()*8)+1); + '个<br/>';

                htmlStr += '</div>';

                return htmlStr;
            }
        },
        bmap: {
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: true,
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fdfdfd'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#999999'
                    }
                }]
            }
        },
        series : [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: this.convertData(this.city),
                symbolSize: function (val) {
                    return val[2]*5;
                },
                label: {
                    formatter: '{c}',
                    position: 'right',
                    show: false
                },
                itemStyle: {
                    color: 'green'
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: this.convertData(this.city.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2]*5;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                itemStyle: {
                    color: 'green',
                    shadowBlur: 10,
                    shadowColor: '#333'
                },
                zlevel: 1
            }
        ]
      })

    },


  },
  components: {

  },
  mounted() {
    this.drawImg();
  }
}
</script>

<style>
.rank-card {
  /* height: 100%; */
}

.rank-card .el-card__body {
  /* height: 100%; */
}
.dataView{
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  padding-top:0;
}
.number{
  font-size: 32px;
  font-weight: 600;
}

#pieChart {
  width: 95%;
  height: 700px;
  margin: 20px auto;

}
#barChart {
  width: 95%;
  height: 700px;
  margin: 20px auto;

}
#cityProject {
  width: 95%;
  height: 700px;
  margin: 20px auto;

}
</style>
