<template>
  <div>
    <vs-row vs-justify="center">
      <!--<vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="6" vs-xs="12">-->
        <!--<vs-card actionable class="cardx">-->
          <!--&lt;!&ndash;<div slot="header">&ndash;&gt;-->
          <!--&lt;!&ndash;<h3>&ndash;&gt;-->
          <!--&lt;!&ndash;Hello world !&ndash;&gt;-->
          <!--&lt;!&ndash;</h3>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--<div slot="media">-->
            <!--&lt;!&ndash;<img :src="$withBase('/card.png')">&ndash;&gt;-->
            <!--<img src="https://miro.medium.com/max/1000/1*YwiyqtNPXlTlW2jGj5XKEA.jpeg">-->
          <!--</div>-->
          <!--<div>-->
            <!--<span>Description</span>-->
          <!--</div>-->
          <!--<div slot="bottom">-->
            <!--<vs-row vs-justify="flex-end">-->
              <!--<vs-button color="primary" type="gradient" >View</vs-button>-->
              <!--<vs-button color="danger" type="gradient">Delete</vs-button>-->
            <!--</vs-row>-->
          <!--</div>-->
        <!--</vs-card>-->
      <!--</vs-col>-->
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="6" vs-xs="12" v-for="item in items" :key="item.id">
        <vs-card actionable class="cardx">
          <!--<div slot="header">-->
            <!--<h3>-->
              <!--Hello world !-->
            <!--</h3>-->
          <!--</div>-->
          <div slot="media">
            <!--<img :src="$withBase('/card.png')">-->
            <img src="https://miro.medium.com/max/1000/1*YwiyqtNPXlTlW2jGj5XKEA.jpeg">
          </div>
          <div>
            <span>{{item.description}}</span>
          </div>
          <div slot="footer" style="margin: 15px">
            <vs-row vs-justify="flex-end">
              <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
              <vs-button color="primary" icon="turned_in_not"></vs-button>
              <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
            </vs-row>
          </div>
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
    /*margin: auto;*/

  }

</style>
