import Vue from 'vue'
import App from './App.vue'
// 关闭非生产环境打包运行提示!!
Vue.config.productionTip = false
// 引入路由器
import router from './router'
new Vue({
  render: h => h(App),
  router,  //在全局注册路由器==>所有组件都可以直接访问$router和4route
}).$mount('#app')