// 管理首页相关数据的vuex子模块
import reqCategoryList from '@/api' //引入封装的接口请求函数
const state = {
    categoryList: [],  // 3级分类列表
}
const actions = {
    //1.获取三级分类列表的异步action
    async getCategoryList(context) {
        //发异步ajax请求(调用接口请求函数)
        const result = await reqCategoryList()
        //如果请求成功了，得到数据提交给mutation
        if (result.code === 200) {
            const categoryList = result.data
            // 把从服务器获取的数据发送到mutations进行处理
            context.commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    }
}
const mutations = {
    // 1.获取三级分类列表
    RECEIVE_CATEGORY_LIST(state) {
        // 把获取的数据保存到state
        state.categoryList = categoryList
    }
}
const getters = {

}
export default {
    state,
    actions,
    mutations,
    getters
}