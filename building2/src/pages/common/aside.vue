<template>
<transition name="el-zoom-in-top" appear>
  <div class="left-aside">
    <div class="logo">
      <img src="@/assets/logo.png" width="50px">
    </div>
    <el-menu class="menu" :default-active="$router.path" router background-color="#242f42" text-color="#fff" active-text-color="#ffd04b" :uniqueOpened="true">

      <template v-for="item in navList">

        <!-- 二级判断 -->
        <el-submenu :index="item.name" :key="item.name" v-if="item.hasChild">
          <!-- 一级菜单显示 -->

          <template slot="title"> <img :src="item.src" width="22px"><span style="  padding-left:  5px">{{item.menuName}}</span></template>
          <!-- 二级菜单输出 -->
          <el-menu-item-group>
            <div v-for="(itemChild,index) in item.children" :key="index">
              <el-menu-item :index="itemChild.name">{{itemChild.menuName}}</el-menu-item>
            </div>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item :index="item.name" :key="item.name" v-else>
          <img :src="item.src" width="22px">
          <span slot="title">{{item.menuName}}</span>
        </el-menu-item>

      </template>

    </el-menu>


  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      navList: [{
          name: 'data',
          menuName: '系统总览',
          hasChild: false,
          src: require('@/assets/table.png')
        },
        {
          name: 'project',
          menuName: '工程查看',
          hasChild: false,
          src: require('@/assets/project.png'),
        },
        {
          name: 'tender',
          menuName: '标书查看',
          hasChild: false,
          src: require('@/assets/tender.png'),
        },
        {
          name: 'news',
          menuName: '新闻资讯',
          hasChild: false,
          src: require('@/assets/news.png'),
        },
        {
          name: 'developer',
          menuName: '开发人员',
          hasChild: false,
          src: require('@/assets/userList.png'),
        },
      ],
    };
  },
  methods: {},
}
</script>

<style>
.style {
  width: 150px;

}

.logo {
  text-align: center;
}

.menu {
  width: 150px;
  margin-top: 10px;
}

.left-aside {
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  color: #333;
  width: 150px;
  /* width: 100%; */
  background-color: #242f42;
  /* text-color: #fff; */
  /* active-text-color: #ffd04b; */
  /* box-shadow: 2px 0px 5px #181818; */
}

/* .left-aside {
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  color: #333;
  width: 100px !important;
  background-color: #242f42;
  text-color: #fff;
  active-text-color: #ffd04b;
  box-shadow: 2px 0px 5px #181818;
} */

.el-menu {
  border-right-width: 0;
}

.el-submenu .el-menu-item .el-submenu__title {
  min-width: 140px;
  width: 150px !important;
  font-size: 17px;
}

.el-submenu__icon-arrow {
  margin-top: -3px;
}
</style>
