// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入Axios(cnpm install axios)
import Axios from 'axios';

Vue.config.productionTip = false
Vue.use(ElementUI); //挂载ElementUI
/* eslint-disable no-new */
Axios.defaults.baseURL = "http://turbulent.cn:6000/";
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = Axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
