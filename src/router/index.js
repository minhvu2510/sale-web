import Vue from 'vue'
import Router from 'vue-router'
import header from '@/header/header'
import home from '@/home/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: header,
      children: [
        {
          path: 'mvp',
          component: home,
          name: 'Home'
          // meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
        }
      ]
    },
    {
      path: '/home',
      component: home
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
