// 管理首页相关数据的vuex子模块
import { reqBaseCategoryList, reqBannerList ,reqRecommends,reqFloors} from '@/api' //引入封装的接口请求函数
const state = {
    BaseCategoryList: [],  // 3级分类列表
    bannerList: [],//首页轮播图
    recommendsList:[],//今日推荐
    floorsList:[],//楼层数据
}
const actions = {
    //1.获取三级分类列表的异步action
    async getCategoryList(context) {
        //发异步ajax请求(调用接口请求函数)
        const result = await reqBaseCategoryList()
        //如果请求成功了，得到数据提交给mutation
        if (result.code === 200) {
            const BaseCategoryList = result.data    
            // 把从服务器获取的数据发送到mutations进行处理
            context.commit('RECEIVE_CATEGORY_LIST', BaseCategoryList)
        }
    },
    // 2.获取首页轮播图异步action
    async getBannerList(context) {
        const result = await reqBannerList()
        if (result.code === 200) {
            const bannerList = result.data
            // 把从服务器获取的数据发送到mutations进行处理
            context.commit('RECEIVE_Banner_LIST', bannerList)
        }
    },
    // 3.获取今日推荐异步action
    async getRecommendsList(context){
        const result = await reqRecommends()
        if(result.code === 200){
            const recommendsList = result.data
            context.commit('RECEIVE_RECOMMENDS_LIST',recommendsList)
        }
    },
    // 4.获取楼层异步action
    async getFloorsList(context){
        const result = await reqFloors()
        if(result.code === 200){
            const floorsList = result.data
            context.commit('RECEIVE_FLOORS_LIST',floorsList)
        }
    },
}



const mutations = {
    // 1.获取三级分类列表
    RECEIVE_CATEGORY_LIST(state, BaseCategoryList) {
        // 把获取的数据保存到state
        state.BaseCategoryList = BaseCategoryList
    },
    // 2.获取首页轮播图列表
    RECEIVE_BANNER_LIST(state, bannerList) {
        // 把获取的数据保存到state
        state.bannerList = bannerList
    },
    //3.保存今日推荐
    RECEIVE_RECOMMENDS_LIST(state,recommendsList){
        state.recommendsList = recommendsList
    },
    // 4.保存楼层数据
    RECEIVE_FLOORS_LIST(state,floorsList){
        state.floorsList = floorsList
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