// vuex最核心的管理对象(仓库)
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入管理数据的各个vuex子模块
import home from './modules/home'
import user from './modules/user'
const actions ={

}
const mutations ={

}
const getters ={

}
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    modules:{
        home,
        user
    }
})




