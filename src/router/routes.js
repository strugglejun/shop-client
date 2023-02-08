// 所有的路由配置
import Home from '@/pages/Home'
import Search from '@/pages/Search'  // ../可以用@/代替
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default [
    {
        path: '/',//打开网页会直接显示这个组件
        component: Home
    },
    {
        name:'search',
        path: '/search/:keyWord?',//加个?指定params参数可传可不传 空串不会报错
        component: Search
    },
    {
        name:'login',
        path: '/login',
        component: Login,
        meta:{
            isHideFooter:true
        }
    },
    {
        name:'register',
        path: '/register',
        component: Register,
        meta:{
            isHideFooter:true
        }
    }
]