/**
 * 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'

// 声明使用vue-router插件
/*
内部定义并注册了2个组件标签(router-link/router-view),
给组件对象添加了2个属性:
  1. $router: 路由器
  2. $route: 当前路由
 */
Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // path: '/news',path最左侧的/ 永远代码的是根路径
          path: 'news',
          component: News
        },
        {
          path: 'msg',
          component: Message
        },
        {
          path: '', // 默认显示
          component: News
        }
      ]
    },
    {
      path: '/', // 默认显示
      component: About
    }
  ]
})
