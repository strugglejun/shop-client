//包含应用的接口的所有接口请求函数
import ajax from './ajax.js'


// 定义接口请求函数
// 1.首页三级分类
//product/getBaseCategoryList GET
export const reqCategoryList = () => ajax('/product/getBaseCategoryList')