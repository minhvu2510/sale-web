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
          <!--<vs-image :key="index" src="https://picsum.photos/400/400" />-->
          <div class="sponsor-sidebar">
            <ul>
              <!--<vs-image :key="index" src="https://picsum.photos/400/400" />-->
              <li title="Become a Sponsor">
                <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
                  <i class="vs-icon notranslate icon-scale material-icons null">add</i>
                  <!--<vs-image :key="index" src="https://picsum.photos/20/20" />-->
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
                  <!--<span>Dev</span>-->
                </p>
                <ul class="sidebar-group-items">
                  <!--<li><a href="/vuesax/development/" class="sidebar-link">Getting Started</a></li>-->
                </ul>
                <!--<div style="margin: 15px 15px 15px 15px" class="tip custom-block">-->
                  <!--<div class="custom-block-title">Tip</div>-->
                  <!--<p>Vuesax uses the <strong>Google Material Icons</strong> font library. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer">Material Icons page<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>.</p>-->
                <!--</div>-->
                <vs-alert @click="tipSidebar=!tipSidebar" :active="tipSidebar" icon="cancel" >
                  <span>Sử dụng bộ lọc để tìm kiếm dễ dàng hơn <b>!</b></span>
                </vs-alert>
                <div class="content_side" v-bind:class="{'style-select': active_sidebar.cost} ">
                  <div style="margin-top: 10px">
                    <strong>Khoảng giá</strong>
                  </div>
                  <div class="centerx" @click="clickSidebar('cost')">
                    <!--<vs-input class="inputx" placeholder="Thấp nhất" v-model="value1"/>-->
                    <vs-input label-placeholder="Thấp nhất" v-model="select_cost.value_low"/>
                  </div>
                  <div v-show="suggess_cost.low" class="centerx" style="padding-top: 10px; cursor: pointer" slot="demo">
                    <vs-chip style="cursor: pointer" transparent color="primary" v-for="cost in suggess_value" :key="cost" @click="setCost('low',cost)">
                      <div @click="setCost('low',cost)">{{cost}}</div>
                    </vs-chip>
                  </div>
                  <div class="centerx" style="padding-top: 10px">
                    <vs-input label-placeholder="Cao nhất" v-model="select_cost.value_hight"/>
                  </div>
                  <div v-show="suggess_cost.hight" class="centerx" style="padding-top: 5px; cursor: pointer" slot="demo">
                    <vs-chip transparent color="primary" v-for="cost in suggess_value" :key="cost" @click="setCost('hight',cost)">
                      <div @click="setCost('hight',cost)">{{cost}}</div>
                    </vs-chip>
                  </div>
                  <div style="padding-top: 10px;padding-bottom: 10px" class="price-cover">
                    <vs-button @click="filter_item('cost')" type="line" class="price-cover">Áp dụng</vs-button>
                  </div>
                </div>
              </div>
              <div style="text-align: left"  class="content_side" v-bind:class="{'style-select': active_sidebar.type}">
                <div style="text-align: center">
                  <strong>Loại</strong>
                </div>
                <div style="padding-left: 20px">
                  <div v-for="item in type_item" :key="item.title" @click="clickSidebar('type')">
                    <input type="checkbox" name="vehicle1" v-model="item.status">
                    <label for="vehicle1"> {{item.title}}</label><br>
                  </div>
                </div>

                <div style="padding-top: 10px;padding-bottom: 10px; text-align: center" class="price-cover">
                  <vs-button type="line" class="price-cover" @click="filter_item('type')">Áp dụng</vs-button>
                </div>

              </div>
              <div style="text-align: left"  class="content_side" v-bind:class="{'style-select': active_sidebar.available}" @click="clickSidebar('available')">
                <div style="text-align: center">
                  <strong>Còn hàng</strong>
                </div>
                <div style="padding-left: 20px">
                  <div>
                    <label for="">Hiển thị khi còn hàng</label>
                    <vs-switch color="success" v-model="available_item" vs-icon="done"/>
                  </div>
                </div>

                <div style="padding-top: 10px;padding-bottom: 10px; text-align: center" class="price-cover">
                  <vs-button type="line" class="price-cover" @click="filter_item('available')">Áp dụng</vs-button>
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

    </div>
    <div class="page">
      <div class="content content-pagex">
        <div style="margin-left: 30px">
          <vs-chip @click="remove_filter(chip)" transparent color="success" v-for="chip in filter" :key="chip" closable>
            {{ chip }}
          </vs-chip>

        </div>
        <div style="padding-bottom: 5px">
          <grid-view></grid-view>
          <!--<home></home>-->
        </div>
      </div>
    </div>
    <div class="page">
      <home></home>
      <footerWeb></footerWeb>
    </div>
  </div>
</template>

<script>
import home from '@/carousel/carousel.vue'
import footerWeb from '@/components/bottom/bottomWeb.vue'
import gridView from '@/gridView/gridView.vue'
export default {
  name: 'header',
  components: {
    home,
    footerWeb,
    gridView
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
      available_item: true
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
