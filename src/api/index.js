//包含应用的接口的所有接口请求函数
import ajax from './ajax.js'
import mockAjax from './mockAjax.js'


// 定义接口请求函数 可以直接调用定义的函数发送请求获取数据
// 1.首页三级分类接口请求函数
export const reqBaseCategoryList = () => {
    return mockAjax('/BaseCategoryList')
}
//2.首页广告轮播列表请求函数
export const reqBannerList = () => ajax('/cms/banner')



// 3.mock接口函数
// 3.1 今日推荐接口请求函数
export const reqRecommends = () => {
    return mockAjax('/recommends')
}
// 3.2 楼层的接口请求函数
export const reqFloors = ()=>{
    return mockAjax('/floors')
}
// 测试mock接口函数
// reqFloors().then(   
//     result=>{console.log(result);}
// )