import Vue from 'vue'
import App from './App.vue'
// 关闭非生产环境打包运行提示!!
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')