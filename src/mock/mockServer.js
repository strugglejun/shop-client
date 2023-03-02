// 利用mockjs提供mock接口
import Mock from 'mockjs'
import recommends from './recommends.json'//引入首页今日推荐的json数据
import floors from './floors.json'//引入楼层的json数据
import BaseCategoryList from './BaseCategoryList.json'

//mock使用语法  Mock.mock( rurl, template)
// 记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回

// 1.提供今日推荐接口
Mock.mock('/mock/recommends',{code:200,data:recommends})
// 2.提供楼层接口
Mock.mock('/mock/floors',{code:200,data:floors})
// console.log('mockServer') //测试mock数据是否被打包
Mock.mock('/mock/BaseCategoryList',{code:200,data:BaseCategoryList})