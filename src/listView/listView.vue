<template>
  <div>
    <vs-row
      vs-align="flex-start"
      vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-sm="5" vs-xs="12">
        <div>
          <div>
            <!--v-for="item in $store.getters.products" :key="item.id"-->
            <vs-table :data="$store.getters.products">
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
                    <h2>Phasellus iaculis dignissim erat at</h2>
                    {{data[indextr].name}}
                  </vs-td>
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
            <vs-table :data="users">
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
                    <img style="border-radius: 10px;" src="https://miro.medium.com/max/1000/1*vvxcLmBVV6v7iwzlTPIE4Q.jpeg" alt="Girl in a jacket" width="200" height="140">
                  </vs-td>

                  <vs-td :data="data[indextr].username">
                    <h2>Phasellus iaculis dignissim erat at</h2>
                    {{data[indextr].name}}
                  </vs-td>
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
  })
}
</script>

<style scoped>

</style>
