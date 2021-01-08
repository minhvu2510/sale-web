import Vue from 'vue'
import Router from 'vue-router'
import header from '@/header/header'
// import carousel from '@/carousel/carousel.vue'
import footerWeb from '@/components/bottom/bottomWeb.vue'
import gridView from '@/gridView/gridView.vue'
import mainContent from '@/mainContent/mainContent.vue'
import listView from '@/listView/listView.vue'
import testStore from '@/components/testStore/testStore.vue'
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
    },
    {
      path: '/testStore',
      component: testStore
    },
    {
      path: '/detail/:id_item',
      component: testStore
    },
    // {
    //   path: '/starterkit',
    //   name: 'Starterkit',
    //   index: 1,
    //   component: () => import('@/views/StarterPage.vue')
    // },
    {
      path: '/admin',
      component: () => import('@/layout/full/MainContainer.vue'),
      // ======================
      // Theme routes / pages
      // ======================

      children: [
        {
          path: '/admin/dashboard',
          index: 2,
          component: () => import('@/views/StarterPage.vue')
        },
        {
          path: '/admin/invoice',
          name: 'Avatar',
          index: 3,
          component: () => import('@/views/components/vuesax/avatar/avatar.vue')
        },
        {
          path: '/admin/pruducts',
          name: 'Products',
          index: 4,
          component: () => import('@/views/components/vuesax/breadcrumb/breadcrumb.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
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
