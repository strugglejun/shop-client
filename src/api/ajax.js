//axios二次封装

// 1. 配置通用的基础路径和超时
// 2. 显示请求进度条
// 3. 成功返回的数据不再是response, 而直接是响应体数据response.data
// 4. 统一处理请求错误, 具体请求也可以选择处理或不处理
import axios from 'axios'
// 引入进度条包
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 1. 配置通用的基础路径和超时
// service是一个能发任意ajax请求的函数，当然可以作为对象使用
const service = axios.create({
    // baseURL: 'http://182.92.128.115/api',
    baseURL: '/api',
    timeout: 20000
})
// 定义请求拦截器
service.interceptors.request.use((config) => {
    // 显示进度条: 请求拦截器回调
    NProgress.start()


    return config
})
// 定义响应拦截器
service.interceptors.response.use(
    response => {
        // 结束进度条: 响应拦截器回调
        NProgress.done()
        return response.data  //发送请求时response就可以拿到数据 而不用response.data拿数据了
    },
    error => {
        // 结束进度条: 响应拦截器回调
        NProgress.done()
        // 统一处理请求错误, 具体请求也可以选择处理或不处理
        alert('请求出错: ' + error.message||'未知错误')
        // 将错误向下传递 发起请求时就可以接收到这个错误 可以用catch处理一下，也可以不处理
        return Promise.reject(error) 
    }
)
export default service