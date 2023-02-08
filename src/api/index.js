//包含应用的接口的所有接口请求函数
import ajax from './ajax.js'
// 定义接口请求函数 可以直接调用定义的函数发送请求获取数据

// 1.首页三级分类接口请求函数
//product/getBaseCategoryList GET
export default function reqCategoryList(){
    return ajax('/product/getBaseCategoryList')
}