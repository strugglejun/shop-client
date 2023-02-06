//路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入所有的路由规则配置
import routes from './routes'
// 使用插件
Vue.use(VueRouter)
// 创建并向外暴露路由器对象
export default new VueRouter({
    //模式
    mode:'history',
    // 应以中的所有路由
    routes:routes
})