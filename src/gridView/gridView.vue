<template>
  <div>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="6" vs-xs="12" v-for="item in $store.getters.products" :key="item.id">
        <vs-card actionable class="cardx">
          <!--<div slot="header">-->
            <!--<h3>-->
              <!--Hello world !-->
            <!--</h3>-->
          <!--</div>-->
          <div slot="media" style="height: 130px;border-radius: 15px;">
            <!--<img :src="$withBase('/card.png')">-->
            <img :src="item.image" style="border-radius: 7px;">
          </div>
          <div>
            <h3>{{item.title}}</h3><br/>
            <span>{{item.price}} 000 $</span>
          </div>
          <div style="margin: 10px 10px 10px 35px">
            <vs-tooltip text="Add to favorites">
              <vs-button  color="danger" type="line" icon="favorite"></vs-button>
            </vs-tooltip>
            <vs-tooltip text="watch it later">
              <vs-button @click="pickFavorite(item.id)" color="primary" type="line" icon="turned_in_not"></vs-button>
            </vs-tooltip>
            <vs-tooltip text="Add to the shopping cart">
              <vs-button @click="pickItem(item.id)" color="success" type="line" icon="shopping_cart"></vs-button>
            </vs-tooltip>
          </div>
          <!--<div style="padding: 10px 30px 10px 10px; align-content: center">-->
            <!--<vs-button color="dark" type="line" icon="event_note"></vs-button>-->
            <!--<vs-button color="dark" type="line" icon="event_note"></vs-button>-->
            <!--<vs-button color="dark" type="line" icon="event_note"></vs-button>-->
            <!--&lt;!&ndash;<vs-row vs-justify="flex-end">&ndash;&gt;-->
              <!--&lt;!&ndash;<vs-button type="gradient" color="danger" icon="favorite"></vs-button>&ndash;&gt;-->
              <!--&lt;!&ndash;<vs-button color="primary" icon="turned_in_not"></vs-button>&ndash;&gt;-->
              <!--&lt;!&ndash;<vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>&ndash;&gt;-->
            <!--&lt;!&ndash;</vs-row>&ndash;&gt;-->
          <!--</div>-->
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'gridView',
  data: () => ({
    saludo: 'Hola mundo',
    items: [
      {id: '1', 'title': 'bassinet', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque,', 'price': '2000'},
      {id: '2', 'title': 'bentwood rocker', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque,', 'price': '2000'},
      {id: '3', 'title': 'bunk bed', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque,', 'price': '2000'},
      {id: '4', 'title': 'breakfront', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque,.', 'price': '2000'},
      {id: '5', 'title': 'bureau', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque.', 'price': '2000'},
      {id: '6', 'title': 'chest of drawers', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque.', 'price': '2000'},
      {id: '7', 'title': 'credenza', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque.', 'price': '2000'},
      {id: '8', 'title': 'card table', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque.', 'price': '2000'}
    ]
  }),
  methods: {
    changeColor (colorx, whatColor) {
      this.$vs.theme({
        [whatColor]: colorx
      })
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
    }
  }
}
</script>

<style scoped>
  .cardx {
    /*padding: 15px 15px 15px 15px;*/
    max-width: 200px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    height: 280px;
    border-radius: 7px;
    /*margin: auto;*/

  }
  /* Create four equal columns that floats next to each other */
  .column {
    float: left;
    width: 25%;
  }

  /* On screens that are 992px wide or less, go from four columns to two columns */
  @media screen and (max-width: 250px) {
    .cardx {
      width: 250px;
    }
  }

  /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 180px) {
    .column {
      width: 180px;
    }
  }

</style>
