<template>
  <div class="main-wrapper">
    <Navbar :topbarColor="topbarColor" :logo="require('@/assets/images/logo/logo-light-icon.png')" :title="logotitle" />
    <SideBar parent=".main-wrapper" :sidebarLinks="sidebarLinks"/>
    <div class="main-container-fluid">
      <!--<div style="width: 500px; height: 100px; color: #00ad8c; padding-left: 260px">-->
        <!--<p>mivnh</p>-->
      <!--</div>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from '@/layout/full/header/Navbar.vue'
import SideBar from '@/layout/full/sidebar/SideBar.vue'
import sidebarLinks from '@/layout/full/sidebar/sidebarlinks.js'

export default {
  name: 'MainContainer',
  components: {
    Navbar,
    SideBar

  },
  data: () => ({
    topbarColor: '#2962ff',
    logotitle: 'Xtreme Vuesax Free',
    sidebarLinks: sidebarLinks
  }),
  methods: {

  }

}
</script>
