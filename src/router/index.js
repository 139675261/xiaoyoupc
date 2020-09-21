// 这是存放路由的文件夹 
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
       path:'/',
       redirect:'/menu'     //重定向   
    },
    {
       path:'/home',
       component:()=>import('@/pages/Home/Home'),
    },
    {
      path:'/menu',
      component:()=>import('@/pages/Menu/Menu')
    },
    {
      path:'/maun/add',
      component:()=>import('@/pages/Menu/Menuadd')
    }
    
  ]
})
