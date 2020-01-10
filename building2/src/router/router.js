import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/pages/welcome';
import Home from '@/pages/common/home';
import Head from '@/pages/common/head';
import Aside from '@/pages/common/aside';

import Data from '@/pages/data';
import News from '@/pages/news';
import Project from '@/pages/project';
import Tender from '@/pages/tender';
import Developer from '@/pages/developer';
import ProjectDetail from '@/pages/projectDetail';
import TenderDetail from '@/pages/tenderDetail';
import NewsDetail from '@/pages/newsDetail';

//注册全局组件
Vue.component('headerVue', Head);
Vue.component('asideVue', Aside);

//挂载路由
Vue.use(Router)

export default new Router({
  routes: [
    {name: 'welcome',path: '/welcome',component: Welcome},
    //首页重定向，设置默认首页页面
    {path: '/',redirect: {name: 'welcome'}},
    {name: 'home',path: '/home', component: Home, redirect:'/data',
      children: [
        {name: 'data',path: '/data',component: Data},
        {name: 'news',path: '/news',component: News},
        {name: 'project',path: '/project',component: Project},
        {name: 'tender',path: '/tender',component: Tender},
        {name: 'developer',path: '/developer',component: Developer},
        {name: 'projectDetail',path: '/projectDetail',component: ProjectDetail},
        {name: 'tenderDetail',path: '/tenderDetail',component: TenderDetail},
        {name: 'newsDetail',path: '/newsDetail',component: NewsDetail},
        // {name: 'imageTask',path: '/imageTask',component: ImageTask,,
      ]
    },
  ]
})
