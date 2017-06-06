// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import ElementUI, { Message, Loading } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import VueResource from 'vue-resource'

import routerconfig from './router'

import MainHeader from './components/mainHeader.vue'

import ComponentExtend from './plugin/components.js' // 组件扩展



Vue.use(VueResource)// 请求库
Vue.use(Router)
Vue.use(ComponentExtend)// 自定义组件扩展
Vue.use(ElementUI)
//Vue.use(VueResource)// 请求库

var router = new Router({
	routes:routerconfig,
});



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App}
})
