import Vue from 'vue'
import Router from 'vue-router'
import header from '@/header/header'
import home from '@/home/home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/header',
      component: header
    }
    // {
    //   path: '/documentation',
    //   component: header,
    //   children: [
    //     {
    //       path: 'index',
    //       component: () => import('@/home/index'),
    //       name: 'Documentation',
    //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
    //     }
    //   ]
    // }
  ]
})
