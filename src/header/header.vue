<template>
  <div class="theme-container no-sidebar" v-bind:class="{'sidebar-open': isActive}">
    <header class="navbar shadow">
      <div class="sidebar-button" @click="myFilter()"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg></div>
      <div class="con-btns-header">
        <a class="home-link router-link-exact-active router-link-active">
          <div class="con-logo">
            <img src="https://lusaxweb.github.io/vuesax/vuesax-logo-vertical.png" class="logo">
          </div>
        </a>
        <div class="links">
          <nav class="nav-links can-hide">
            <div class="nav-item">
              <a>Home</a>
            </div>
            <div class="nav-item">
              <a data-v-ac54a82c="" href="/vuesax/development/" class="nav-link">Documentation</a>
            </div>
            <div class="nav-item">
              <a data-v-ac54a82c="" href="/vuesax/development/" class="nav-link">Documentation</a>
            </div>
            <div class="nav-item">
              <div class="dropdown-wrapper">
                <a class="dropdown-title">
                  <span class="title">Ecosystem</span> <i class="vs-icon notranslate icon-scale material-icons null">keyboard_arrow_down</i>
                </a>
                <ul class="nav-dropdown"><li class="dropdown-item"><h4>Social</h4> <ul class="dropdown-subitem-wrapper"><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://github.com/lusaxweb/vuesax" target="_blank" rel="noopener noreferrer" class="nav-link">GitHub
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://discord.gg/6AZNXEa" target="_blank" rel="noopener noreferrer" class="nav-link">Discord
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://twitter.com/vuesax" target="_blank" rel="noopener noreferrer" class="nav-link">Twitter
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://www.facebook.com/vuesax/" target="_blank" rel="noopener noreferrer" class="nav-link">Facebook
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://www.behance.net/ManuelRovira" target="_blank" rel="noopener noreferrer" class="nav-link">Behance
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://dribbble.com/ManuelRovira" target="_blank" rel="noopener noreferrer" class="nav-link">Dribbble
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://codepen.io/lusaxweb/" target="_blank" rel="noopener noreferrer" class="nav-link">Codepen
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://medium.com/@luisdanielrovira8" target="_blank" rel="noopener noreferrer" class="nav-link">Medium
                </a></li></ul></li><li class="dropdown-item"><h4>Help</h4> <ul class="dropdown-subitem-wrapper"><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://github.com/lusaxweb/vuesax/issues" target="_blank" rel="noopener noreferrer" class="nav-link">Issues
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://github.com/lusaxweb/vuesax" target="_blank" rel="noopener noreferrer" class="nav-link">Edit Page
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://github.com/lusaxweb/vuesax/releases" target="_blank" rel="noopener noreferrer" class="nav-link">Latest Releases
                </a></li></ul></li><li class="dropdown-item"><h4>Contact</h4> <ul class="dropdown-subitem-wrapper"><li class="dropdown-subitem"><a data-v-ac54a82c="" href="http://lusaxweb.net" target="_blank" rel="noopener noreferrer" class="nav-link">Lusaxweb
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="mailto:vuesax@gmail.com" class="nav-link">Email
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://github.com/lusaxweb/vuesax/pulls" target="_blank" rel="noopener noreferrer" class="nav-link">Pull Request
                </a></li><li class="dropdown-subitem"><a data-v-ac54a82c="" href="https://codepen.io/lusaxweb/pen/mxMKYr" target="_blank" rel="noopener noreferrer" class="nav-link">Codepen Template
                </a></li></ul></li></ul>
              </div>
            </div>
            <div class="nav-item"><a data-v-ac54a82c="" href="https://vuesax.com/" target="_blank" rel="noopener noreferrer" class="nav-link new">Vuesax 4
            </a></div>
          </nav>
        </div>
      </div>
      <div class="con-redes-download">
        <vs-input v-bind:onclick="myFilter" color="rgb(91, 60, 196)"  icon="search" placeholder=""/>
        <!--<div class="con-btn-apps">-->
          <!--<button title="Lusaxweb Apps" class="btn-apps"><i click="function(){}" class="vs-icon notranslate icon-scale material-icons null">apps</i></button> <div class="con-ul"><ul><li><a title="Vuesax" target="_blank" href="https://lusaxweb.github.io/vuesax/"><img src="/vuesax/apps/vuesax.png" alt=""></a></li> <li><a title="DevAwesome" target="_blank" href="https://lusaxweb.github.io/devAwesome/#/"><img src="/vuesax/apps/devawesome.png" alt=""></a></li> <li><a title="Vue-share" target="_blank" href="https://lusaxweb.github.io/vue-share/"><img src="/vuesax/apps/vueshare.png" alt=""></a></li> <li><a title="Vuenut" target="_blank" href="https://lusaxweb.github.io/vuenut.org/"><img src="/vuesax/apps/vuenut.png" alt=""></a></li> <li><a title="Lusaxweb" target="_blank" href="https://lusaxweb.net"><img src="/vuesax/apps/lusaxweb.png" alt=""></a></li></ul></div>-->
        <!--</div>-->
        <a title="Liên hệ" href="https://github.com/lusaxweb/vuesax" target="_blank" rel="noopener noreferrer" class="repo-link flaticon-facebook"></a>
        <a target="_blank" title="@vuesax" href="https://twitter.com/vuesax"><i class="vs-icon notranslate icon-scale flaticon-github twitterx material-icons null"></i></a>
      </div>
    </header>
    <div class="sidebar">
      <div class="c-sidebar">
        <div class="sponsor-sidebar">
          <ul>
            <li title="Become a Sponsor"><a target="_blank" href="https://www.patreon.com/bePatron?c=1567892"><i class="vs-icon notranslate icon-scale material-icons null">add</i></a></li>
            <li title="Become a Sponsor"><a target="_blank" href="https://www.patreon.com/bePatron?c=1567892"><i class="vs-icon notranslate icon-scale material-icons null">add</i></a></li>
            <li title="Become a Sponsor"><a target="_blank" href="https://www.patreon.com/bePatron?c=1567892"><i class="vs-icon notranslate icon-scale material-icons null">add</i></a></li>
          </ul>
        </div>
        <nav class="nav-links">
          <div class="nav-item"><a data-v-ac54a82c="" href="/vuesax/" class="nav-link">Home</a></div>
        </nav>
        <ul class="sidebar-links">
          <li>
            <div class="sidebar-group first">
              <p class="sidebar-heading">
                <span>Dev</span>
              </p>
              <ul class="sidebar-group-items">
                <li><a href="/vuesax/development/" class="sidebar-link">Getting Started</a></li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="sidebar-map">
      <div class="con-carbon-noti">
        <div class="notiads">
          <div class="sponsor-special">
            <div class="sponsor-s">
              <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
                <img src="https://lusaxweb.github.io/vuesax/patreon/06-Vuesax-Diamond-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vue.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-button @click="myFilter" color="primary" type="filled">Primary</vs-button>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      isActive: false
    }
  },

  methods: {
    myFilter () {
      console.log('dmđmdm')
      this.isActive = !this.isActive
      console.log(this.isActive)
      // some code to filter users
    }
  }
}
</script>

<style scoped>
@import "../assets/0.styles.723347b0.css";
@import "../assets/icon.css";
</style>
