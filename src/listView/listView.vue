<template>
  <div>
    <vs-row
      vs-align="flex-start"
      vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-sm="5" vs-xs="12">
        <div>
          <div>
            <!--v-for="item in $store.getters.products" :key="item.id"-->
            <vs-table :data="$store.getters.products.slice(0,4)">
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
                  <vs-td :data="data[indextr].email">
                    <!--{{data[indextr].email}}-->
                    <img style="border-radius: 10px;" :src="data[indextr].image" alt="Girl in a jacket" width="200" height="140">
                  </vs-td>

                  <vs-td :data="data[indextr].username">
                    <!--<h2>Phasellus iaculis dignissim erat at</h2>-->
                    <h3>{{data[indextr].title}}</h3>
                    <p style="color: red">{{data[indextr].price}} 000 $</p>
                  </vs-td>
                  <div style="margin: 10px 10px 10px 35px">
                    <vs-tooltip text="Add to favorites">
                      <vs-button @click="$vs.notify({title:'Danger',text:'Contact author',color:'danger'})"  color="danger" type="line" icon="favorite"></vs-button>
                    </vs-tooltip>
                    <vs-tooltip text="watch it later">
                      <vs-button @click="pickFavorite(data[indextr].id)" color="primary" type="line" icon="turned_in_not"></vs-button>
                    </vs-tooltip>
                    <vs-tooltip text="Add to the shopping cart">
                      <vs-button @click="pickItem(data[indextr].id)" color="success" type="line" icon="shopping_cart"></vs-button>
                    </vs-tooltip>
                  </div>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-sm="5" vs-xs="12">
        <div>
          <div>
            <vs-table :data="$store.getters.products.slice(4,8)">
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
                  <vs-td :data="data[indextr].email">
                    <!--{{data[indextr].email}}-->
                    <img style="border-radius: 10px;" :src="data[indextr].image" alt="Girl in a jacket" width="200" height="140">
                  </vs-td>

                  <vs-td :data="data[indextr].username">
                    <!--<h2>Phasellus iaculis dignissim erat at</h2>-->
                    <h3>{{data[indextr].title}}</h3>
                    <p style="color: red">{{data[indextr].price}} 000 $</p>
                  </vs-td>
                  <div style="margin: 10px 10px 10px 35px">
                    <vs-tooltip text="Add to favorites">
                      <vs-button @click="$vs.notify({title:'Danger',text:'Contact author',color:'danger'})" color="danger" type="line" icon="favorite"></vs-button>
                    </vs-tooltip>
                    <vs-tooltip text="watch it later">
                      <vs-button @click="pickFavorite(item.id)" color="primary" type="line" icon="turned_in_not"></vs-button>
                    </vs-tooltip>
                    <vs-tooltip text="Add to the shopping cart">
                      <vs-button @click="pickItem(item.id)" color="success" type="line" icon="shopping_cart"></vs-button>
                    </vs-tooltip>
                  </div>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>

</template>

<script>
export default {
  name: 'listView.vue',
  data: () => ({
    users: [
      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'email': 'Shanna@melissa.tv',
        'website': 'anastasia.net'
      },
      {
        'id': 3,
        'name': 'Clementine Bauch',
        'username': 'Samantha',
        'email': 'Nathan@yesenia.net',
        'website': 'ramiro.info'
      },
      {
        'id': 4,
        'name': 'Patricia Lebsack',
        'username': 'Karianne',
        'email': 'Julianne.OConner@kory.org',
        'website': 'kale.biz'
      }
    ]
  }),
  methods: {
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
    }
  }
}
</script>

<style scoped>

</style>
