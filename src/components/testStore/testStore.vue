<template>
  <div>
    <div class="theme-container" v-bind:class="{'sidebar-open': isActive, 'no-sidebar': noSideba} ">
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
          <div class="centerx">
            <vs-button type="line" @click="popupActivo=true">
              <vs-chip transparent color="danger" @click="popupActivo=true">
                <vs-avatar icon="shopping_cart" color="#5b3cc4"/>
                {{$store.getters.cart.length}}
              </vs-chip>
            </vs-button>
            <vs-popup class="holamundo"  title="Shopping cart" :active.sync="popupActivo">
              <div>
                <!--v-for="item in $store.getters.products" :key="item.id"-->
                <vs-table :data="$store.getters.cart">
                  <template slot="thead">
                    <!--<vs-th>-->
                    <!--Website-->
                    <!--</vs-th>-->
                    <!--<vs-th>-->
                    <!--Nro-->
                    <!--</vs-th>-->
                  </template>

                  <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                      <vs-td :data="data[indextr].image">
                        <!--{{data[indextr].email}}-->
                        <img style="border-radius: 10px;" :src="data[indextr].image" alt="Girl in a jacket" width="160" height="100">
                      </vs-td>

                      <vs-td :data="data[indextr].username">
                        <span style="text-align: center">{{data[indextr].title}}</span>
                        <p style="text-align: center; color: red">{{data[indextr].price}} 000 $</p>
                        <!--{{data[indextr].name}}-->
                      </vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </div>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </p>
            </vs-popup>
          </div>
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
          <!--<vs-image :key="index" src="https://picsum.photos/400/400" />-->
          <div class="sponsor-sidebar">
            <ul>
              <!--<vs-image :key="index" src="https://picsum.photos/400/400" />-->
              <li title="Become a Sponsor">
                <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
                  <!--<i class="vs-icon notranslate icon-scale material-icons null">add</i>-->
                  <img :key="index" src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png" width="40px" height="40px"/>
                </a>
              </li>
              <li title="Become a Sponsor">
                <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
                  <!--<i class="vs-icon notranslate icon-scale material-icons null">add</i>-->
                  <img :key="index" src="https://lusaxweb.github.io/vuesax/patreon/06-Vuesax-Diamond-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vue.png" width="40px" height="40px"/>
                </a>
              </li>
              <li title="Become a Sponsor">
                <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
                  <!--<i class="vs-icon notranslate icon-scale material-icons null">add</i>-->
                  <img :key="index" src="https://raw.githubusercontent.com/lusaxweb/vuesax/master/public/vuesax-logo-beta.png" width="40px" height="40px"/>
                </a>
              </li>
              <!--<li title="Become a Sponsor">-->
              <!--<a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">-->
              <!--&lt;!&ndash;<i class="vs-icon notranslate icon-scale material-icons null">add</i>&ndash;&gt;-->
              <!--<img :key="index" src="https://user-images.githubusercontent.com/2678654/32683180-4b968114-c647-11e7-9c0a-2b3c11bf6ac5.png" width="40px" height="40px"/>-->
              <!--</a>-->
              <!--</li>-->
            </ul>
          </div>
          <div class="search-box" style="padding-bottom: 5px">
            <input aria-label="Search" placeholder="Search products" autocomplete="off" spellcheck="false" value="">
          </div>
          <ul class="sidebar-links">
            <li>
              <div class="sidebar-group first" style="margin-top: -15px">
                <p class="sidebar-heading">
                  <!--<span>Dev</span>-->
                </p>
                <ul class="sidebar-group-items">
                  <!--<li><a href="/vuesax/development/" class="sidebar-link">Getting Started</a></li>-->
                </ul>
                <!--<div style="margin: 15px 15px 15px 15px" class="tip custom-block">-->
                <!--<div class="custom-block-title">Tip</div>-->
                <!--<p>Vuesax uses the <strong>Google Material Icons</strong> font library. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer">Material Icons page<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>.</p>-->
                <!--</div>-->
                <div class="content_side" v-bind:class="{'style-select': active_sidebar.cost} " style="padding-top: 6px; margin-top: 20px">
                  <div style="margin-top: 10px">
                    <strong>ASSESSMENT</strong>
                  </div>
                  <div>
                    <div>
                      <vs-row>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                          5
                          <span class="material-icons" style="font-size: 15px; color: #eded18">
                            star_rate
                          </span>
                        </vs-col>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                          <vs-progress :percent="70" color="primary">primary</vs-progress>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                          4
                          <span class="material-icons" style="font-size: 15px; color: #e6e617">
                            star_rate
                          </span>
                        </vs-col>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                          <vs-progress :percent="10" color="primary">primary</vs-progress>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                          3
                          <span class="material-icons" style="font-size: 15px; color: #e6e617">
                            star_rate
                          </span>
                        </vs-col>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                          <vs-progress :percent="15" color="primary">primary</vs-progress>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                          2
                          <span class="material-icons" style="font-size: 15px; color: #e6e617">
                            star_rate
                          </span>
                        </vs-col>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                          <vs-progress :percent="5" color="primary">primary</vs-progress>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                          1
                          <span class="material-icons" style="font-size: 15px; color: #e6e617">
                            star_rate
                          </span>
                        </vs-col>
                        <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                          <vs-progress :percent="0" color="primary">primary</vs-progress>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <div>
                        <span>Total : 4.5 / 5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content_side" v-bind:class="{'style-select': active_sidebar.cost} " style="padding-top: 10px; margin-top: 20px">
                  <div style="margin-top: 10px">
                    <strong>Statistical reference</strong>
                  </div>
                  <div>
                    <div style="margin-top: 10px">
                      <vs-row>
                        <vs-chip transparent color="primary">
                          100 purchases
                        </vs-chip>
                      </vs-row>
                    </div>
                    <div style="margin-top: 10px">
                      <vs-row>
                        <vs-chip transparent color="primary">
                          50 assessment
                        </vs-chip>
                      </vs-row>
                    </div>
                    <div style="margin-top: 10px">
                      <vs-row>
                        <vs-chip transparent color="primary">
                          47 comments
                        </vs-chip>
                      </vs-row>
                    </div>
                    <div style="margin-top: 10px">
                      <vs-row>
                        <vs-chip transparent color="primary">
                          Tỉ lệ phản hồi : 100%
                        </vs-chip>
                      </vs-row>
                    </div>
                  </div>
                </div>
              </div>
              <div style="position: fixed; bottom: 0px; text-align: center">
                <vs-alert color="danger" icon="new_releases" >
                  <span>Phản hồi & hỗ trợ <b>!</b></span>
                </vs-alert>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <br/>
      <!--<div>-->
      <!--<vs-button @click="myFilter" color="primary" type="border">Primary</vs-button>-->
      <!--</div>-->
      <div class="sidebar-map">
        <div class="con-carbon-noti">
          <div class="notiads">
            <div class="sponsor-special">
              <div style="overflow: auto">
                <vs-list style="overflow: auto">
                  <vs-list-header  title="Highlights" color="success"></vs-list-header>
                  <div  v-for="item in $store.getters.favarite" :key="item.id">
                    <vs-list-item :title="item.title" :subtitle="item.price + '000 $'">
                      <template slot="avatar" style="border-radius: 10px;">
                        <img style="border-radius: 10px;" :src="item.image" alt="Girl in a jacket" width="100" height="75">
                      </template>
                    </vs-list-item>
                  </div>
                  <!--<vs-list-item title="Abrams 8 PC Rectangular Dining" subtitle="1000 000$">-->
                  <!--<template slot="avatar" style="border-radius: 10px;">-->
                  <!--&lt;!&ndash;<vs-avatar size="70px" src="https://miro.medium.com/max/1000/1*vvxcLmBVV6v7iwzlTPIE4Q.jpeg"/>&ndash;&gt;-->
                  <!--<img style="border-radius: 10px;" src="https://miro.medium.com/max/1000/1*vvxcLmBVV6v7iwzlTPIE4Q.jpeg" alt="Girl in a jacket" width="100" height="75">-->
                  <!--</template>-->
                  <!--</vs-list-item>-->
                  <!--<vs-list-item title="Abrams 8 PC" subtitle="2000 000$">-->
                  <!--<template slot="avatar" style="border-radius: 10px;">-->
                  <!--&lt;!&ndash;<vs-avatar size="70px" src="https://miro.medium.com/max/1000/1*vvxcLmBVV6v7iwzlTPIE4Q.jpeg"/>&ndash;&gt;-->
                  <!--<img style="border-radius: 10px;" src="https://miro.medium.com/max/1000/1*vvxcLmBVV6v7iwzlTPIE4Q.jpeg" alt="Girl in a jacket" width="100" height="75">-->
                  <!--</template>-->
                  <!--</vs-list-item>-->
                  <div>
                    <vs-avatar color="primary" text="1"/>
                    <vs-avatar color="primary" text="2"/>
                    <vs-avatar color="primary" text="3"/>
                  </div>
                  <div style="position: fixed; bottom: 0px; right: 0px">
                    <vs-alert color="danger" icon="new_releases" >
                      <span>Admin <b>!</b></span>
                    </vs-alert>
                  </div>
                  <!--<div>-->
                  <!--<div>-->
                  <!--<vs-avatar color="primary" text="1"/>-->
                  <!--<vs-avatar color="primary" text="2"/>-->
                  <!--<vs-avatar color="primary" text="3"/>-->
                  <!--</div>-->
                  <!--</div>-->
                </vs-list>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="page">
      <div class="content content-pagex">
        <detail-produt></detail-produt>
      </div>
    </div>
    <div class="page">
      <home></home>
      <footerWeb></footerWeb>
    </div>
  </div>
</template>

<script>
import detailProdut from '@/components/detailProduct/detailProduct.vue'
export default {
  name: 'testStore',
  components: {
    detailProdut
    // HelloWorld
  },
  data () {
    return {
      isActive: false,
      noSideba: false,
      active_sidebar: {'cost': false, 'type': false, 'available': false},
      tipSidebar: true,
      suggess_cost: {'low': false, 'hight': '', 'value_low': ''},
      suggess_value: ['100k', '200k', '500k', '1000k', '1500k'],
      select_cost: {'value_hight': '', 'value_low': ''},
      filter: [],
      type_item: [{'title': 'Refrigerators & Freezers (5)', 'status': false}, {'title': 'Televisions (4)', 'status': false}, {'title': 'Water & Air Purifiers (3)', 'status': false},
        {'title': 'Washing Machines (2)', 'status': false}, {'title': 'Air Conditioners (2)', 'status': false}],
      available_item: true,
      currentx: 3,
      ViewSelect: true,
      popupActivo: false
    }
  },

  methods: {
    myFilter () {
      console.log('dmđmdm')
      this.isActive = !this.isActive
      this.noSideba = !this.noSideba
      console.log(this.isActive)
      // some code to filter users
    },
    clickSidebar (keyCheck) {
      if (keyCheck === 'cost') {
        this.active_sidebar.cost = true
        this.active_sidebar.type = false
        this.active_sidebar.available = false
        this.suggess_cost.low = true
        this.suggess_cost.hight = true
      }
      if (keyCheck === 'type') {
        this.active_sidebar.type = true
        this.active_sidebar.cost = false
        this.active_sidebar.available = false
        this.suggess_cost.low = false
        this.suggess_cost.hight = false
      }
      if (keyCheck === 'available') {
        this.active_sidebar.available = true
        this.active_sidebar.type = false
        this.active_sidebar.cost = false
        this.suggess_cost.low = false
        this.suggess_cost.hight = false
      }
      console.log('anh chi la ke ngoc nhung nho dieu xa voi')
    },
    setCost (type, cost) {
      console.log(cost)
      if (type === 'low') {
        var num = Number(parseInt(cost.replace('k', '000'))).toLocaleString('fi-FI')
        this.select_cost.value_low = num
      } else {
        this.select_cost.value_hight = Number(parseInt(cost.replace('k', '000'))).toLocaleString('fi-FI')
      }
    },
    filter_item (type) {
      if (type === 'cost') {
        let filCost = this.select_cost.value_low + ' - ' + this.select_cost.value_hight
        this.filter.push(filCost)
      }
      if (type === 'type') {
        console.log(this.type_item)
        for (let it in this.type_item) {
          console.log(it)
          if (this.type_item[it]['status'] === true) {
            console.log(this.type_item)
            console.log(it)
            this.filter.push(this.type_item[it]['title'])
          }
        }
        // this.filter.push(filCost)
      }
      if (type === 'available' && this.available_item === true) {
        this.filter.push('Available')
      }
    },
    remove_filter (item) {
      this.filter.splice(this.filter.indexOf(item), 1)
    }
  }
}
</script>

<style scoped>
  @import "../../assets/0.styles.723347b0.css";
  @import "../../assets/icon.css";
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
  .content_side {
    height: 60%;
    margin: 10px 10px 10px 10px;
    background-color: white;
  }

  .style-select {
    background: rgba(0, 196, 244, 0.05);
    border: 1px solid #0088cc;
    /*color: #676767;*/
    color: rgba(31,116,255,1);
  .el-card__body {
  .price-cover {
    color: #0088cc;
  }
  }
  }

  .inline {
    display: inline-block;
    margin: 1em;
  }

  .wrap {
    display: table;
    padding-left: 20px;
    margin-left: 20px;
  }

  .wrap vs-checkbox {
    padding-left: 20px;
    margin-left: 20px;
    display:        table-cell;
    vertical-align: middle;
  }
</style>
