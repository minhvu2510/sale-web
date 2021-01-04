// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css'
import 'vuesax/dist/vuesax.css'
import VueHorizontalList from 'vue-horizontal-list'
import { store } from './store/store'
import Lingallery from 'lingallery'
Vue.component('lingallery', Lingallery)
Vue.use(VueHorizontalList)
Vue.config.productionTip = false
Vue.use(Vuesax, {
  // options here
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
