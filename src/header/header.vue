<template>
  <div class="theme-container" v-bind:class="{'sidebar-open': isActive}">
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
        <vs-chip transparent color="danger">
          <vs-avatar icon="shopping_cart" color="#5b3cc4"/>
            1
        </vs-chip>
        <a href="https://github.com/lusaxweb/vuesax/releases/download/v3.8.61/vuesax-3.8.61.zip" class="btn-download">
          <i class="vs-icon notranslate icon-scale material-icons null">face</i><span>Log in</span></a>
        <a href="https://github.com/lusaxweb/vuesax/releases/download/v3.8.61/vuesax-3.8.61.zip" class="btn-download">
          <i class="vs-icon notranslate icon-scale material-icons null">link</i><span>Sing up</span></a>
        <!--<vs-input v-bind:onclick="myFilter" color="rgb(91, 60, 196)"  icon="search" placeholder=""/>-->
        <a title="Liên hệ" href="https://github.com/lusaxweb/vuesax" target="_blank" rel="noopener noreferrer" class="repo-link flaticon-facebook"></a>
        <a target="_blank" title="@vuesax" href="https://twitter.com/vuesax"><i class="vs-icon notranslate icon-scale flaticon-github twitterx material-icons null"></i></a>
      </div>
    </header>
    <div class="sidebar">
      <div class="c-sidebar">
        <div class="sponsor-sidebar">
          <ul>
            <li title="Become a Sponsor">
              <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
                <i class="vs-icon notranslate icon-scale material-icons null">add</i>
              </a>
            </li>
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
      <div class="c-sidebar-map">
        <ul class="sidebar-links-map">
          <vs-avatar color="success" icon="shopping_cart" badge-color="rgb(140, 23, 164)" badge="10" />
        </ul>
      </div>
      <div class="con-carbon-noti">
        <div class="notiads">
          <div class="sponsor-special">
            <div class="sponsor-s">
              <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
                <img src="https://lusaxweb.github.io/vuesax/patreon/06-Vuesax-Diamond-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vue.png" alt="">
              </a>
              <br/>
              <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
                <img src="https://lusaxweb.github.io//vuesax/patreon/01-Vuesax-Gold-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuepre.png" alt="">
              </a>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>

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
.header-cart .cart-count {
  animation: pulse2 .3s;
  font-size: 10px;
  width: 18px;
  height: 18px;
  background: #1dbdc0;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  right: -10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
</style>
