import Vue from 'vue'
import App from './App.vue'
// 关闭非生产环境打包运行提示!!
Vue.config.productionTip = false
// 引入路由器
import router from './router'
// 引入并注册全局组件TypeNav 在任何组件中都可以直接使用这个组件
import TypeNav from './components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
// 引入store
import store from './store'
// 引入swiper
import './plugins/swiper.js'
// 引入mock
import './mock/mockServer'
new Vue({
  render: h => h(App),
  router,  //在全局注册路由器==>所有组件都可以直接访问$router和4route
  store,//注册vuex===>所有组件都可以直接访问1个对象:$store
}).$mount('#app')