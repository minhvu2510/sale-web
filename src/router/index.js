import Vue from 'vue'
import Router from 'vue-router'
import header from '@/header/header'
// import carousel from '@/carousel/carousel.vue'
import footerWeb from '@/components/bottom/bottomWeb.vue'
import gridView from '@/gridView/gridView.vue'
import mainContent from '@/mainContent/mainContent.vue'
import listView from '@/listView/listView.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: mainContent
    },
    {
      path: '/header',
      component: header
    },
    {
      path: '/bottom',
      component: footerWeb
    },
    {
      path: '/gridView',
      component: gridView
    },
    {
      path: '/listView',
      component: listView
    }
    // {
    //   path: '/documentation',
    //   component: header,
    //   children: [
    //     {
    //       path: 'index',
    //       component: () => import('@/carousel/index'),
    //       name: 'Documentation',
    //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
    //     }
    //   ]
    // }
  ]
})
