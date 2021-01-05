<template>
  <div>
    <div>
      <!--<vs-button color="primary" type="border" icon="home">Home</vs-button>-->
    </div>
    <div style="padding: 15px 15px 15px 15px">
      <vs-row>
        <vs-col vs-w="6">
          <lingallery :iid.sync="currentId" :width="600" :height="400" :items="[
    {id:'someid1', src: 'https://miro.medium.com/max/1000/1*n5tDio_UgGSv5d9W-p-S6w.jpeg', thumbnail: 'https://miro.medium.com/max/517/1*EYl_uM7f8rQXcPVliTr7tQ.jpeg', alt: 'Some alt text', caption: 'Some Caption'},
    {id:'someid2', src: 'https://miro.medium.com/max/529/1*A3eGAtsseNMZY9IKz60ftg.jpeg', thumbnail: 'https://miro.medium.com/max/529/1*A3eGAtsseNMZY9IKz60ftg.jpeg', alt: 'Another alt text'},
    {id:'someid3', src: 'https://miro.medium.com/max/1000/1*n5tDio_UgGSv5d9W-p-S6w.jpeg', thumbnail: 'https://miro.medium.com/max/1000/1*n5tDio_UgGSv5d9W-p-S6w.jpeg'} ]"/>
        </vs-col>
        <vs-col  vs-w="6">
          <h2>{{detail.title}}</h2>
          <!--<h2>Barett Mid-Century Modern 5 PC Dining Set</h2>-->
          <br/>
          <!--<h2 style="color: #ff383d">2000 000 đ - 2500 000 đ</h2>-->
          <div>
            <h2 style="color: #ff383d">{{detail.price}} 000 Đ</h2>
            <p style="color: #b5afae; text-decoration-line: line-through">25000 000 Đ</p>
          </div>
          <br/>
          <div>
            <vs-button color="primary" size="small" type="border">50 %</vs-button>
            <vs-button color="primary" size="small" type="border">40 %</vs-button>
            <vs-button color="primary" size="small" type="border">Free ship</vs-button>
          </div>
          <br/>
          <div style="text-align: center">
            <vs-row>
              <vs-col vs-offset="3" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-button color="primary" type="filled" @click="$vs.notify({title:'Danger',text:'Contact author',color:'danger'})" icon="favorite">Favorite</vs-button>
              </vs-col>
              <vs-col v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-button @click="pickFavorite(detail.id)" color="success" type="filled" icon="turned_in_not">Tag</vs-button>
              </vs-col>
              <vs-col v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-button @click="pickItem(detail.id)" color="danger" type="filled" icon="shopping_cart">Purchase</vs-button>
              </vs-col>
            </vs-row>
          </div>
          <br/>
          <div style="padding: 10px 20px 10px 20px">
            <vs-alert active="true">
              Looking to reach more customers locally with your furniture advertisement? Here’s 6 absolutely brilliant local advertising strategies used by the big furniture giants that you should copy.
            </vs-alert>
          </div>
        </vs-col>
      </vs-row>
      <div style="padding: 30px 40px 0px 40px">
        <vs-list>
          <vs-list-header title="Comments" color="danger"></vs-list-header>
          <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
            <template slot="avatar">
              <vs-avatar />
            </template>
          </vs-list-item>
          <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
            <template slot="avatar">
              <vs-avatar />
            </template>
          </vs-list-item>
          <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
            <template slot="avatar">
              <vs-avatar />
            </template>
          </vs-list-item>
          <vs-list-item title="Matt" subtitle="11 Points">
            <template slot="avatar">
              <vs-avatar vs-text="Vuesax"/>
            </template>
          </vs-list-item>
        </vs-list>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'detailProduct',
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    console.log(this.$route.params.id_item)
    this.getDetail()
  },

  methods: {
    myFilter () {
      this.isActive = !this.isActive
      this.noSideba = !this.noSideba
      console.log(this.isActive)
      // some code to filter users
    },
    getDetail () {
      let allItems = this.$store.getters.products
      for (let it in allItems) {
        // console.log(allItems[it]['id'])
        // console.log(this.$route.params.id_item)
        if (allItems[it]['id'].toString() === this.$route.params.id_item.toString()) {
          this.detail = allItems[it]
          console.log(this.detail)
        }
      }
    },
    checkKeyExist (id, list) {
      for (let it in list) {
        if (list[it]['id'] === id) {
          return true
        }
      }
      return false
    },
    pickItem (id) {
      if (this.checkKeyExist(id, this.$store.getters.carts)) {
        this.$vs.notify({
          title: 'Error',
          text: 'Item exist',
          color: 'warning',
          icon: 'shopping_cart',
          position: 'top-right'
        })
      } else {
        this.$vs.notify({
          title: 'Done! Success',
          text: 'Add to the basket sucess',
          color: 'success',
          icon: 'shopping_cart',
          position: 'top-right'
        })
        this.$store.commit('addCart', id)
      }
      console.log(this.$store.getters)
    },
    pickFavorite (id) {
      console.log(this.$store.getters.favarite)
      if (this.checkKeyExist(id, this.$store.getters.favarite)) {
        this.$vs.notify({
          title: 'Error',
          text: 'Item exist',
          color: 'warning',
          icon: 'shopping_cart',
          position: 'top-right'
        })
      } else {
        this.$store.commit('addFavorite', id)
      }
      // this.$store.commit('pickSide')
    }
  }
}
</script>

<style scoped>

</style>
