//路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入所有的路由规则配置
import routes from './routes'
// 使用插件
Vue.use(VueRouter)

// 1.解决重复跳转路由的错误 修正Vue原型上的push和replace方法
// 缓存原型上的push函数
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 给原型对象上的push指定新函数函数
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
    if (onComplete === undefined && onAbort === undefined) {
        return originPush.call(this, location, onComplete, onAbort).catch((err) => { 
            // 如果是重复导航的错误，不再向外传递
            if(VueRouter.isNavigationFailure(err)){
                // resolve err 产生的是成功的promise，成功promise的value是err
                return err
            }
            // throw error 如果是其它原因导致的错误，将错误向下传递
            return Promise.reject(err)
        })
    } else { // 如果有指定任意回调函数, 通过call调用源push函数处理
        originPush.call(this, location, onComplete, onAbort)
    }
}
// replace同理处理
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (onComplete === undefined && onAbort === undefined) {
        return originReplace.call(this, location, onComplete, onAbort).catch((err) => { 
            if(VueRouter.isNavigationFailure(err)){
                // resolve err
                return err
            }
            // throw error
            return Promise.reject(err)
        })
    } else {
        originReplace.call(this, location, onComplete, onAbort)
    }
}


// 创建并向外暴露路由器对象
export default new VueRouter({
    //模式
    mode: 'history',
    // 应以中的所有路由
    routes: routes
})