<template>
  <div style="padding: 15px 15px 15px 15px">
    <vs-row>
      <vs-col vs-w="6">
        <lingallery :iid.sync="currentId" :width="600" :height="400" :items="[
    {id:'someid1', src: 'https://miro.medium.com/max/1000/1*n5tDio_UgGSv5d9W-p-S6w.jpeg', thumbnail: 'https://miro.medium.com/max/517/1*EYl_uM7f8rQXcPVliTr7tQ.jpeg', alt: 'Some alt text', caption: 'Some Caption'},
    {id:'someid2', src: 'https://miro.medium.com/max/529/1*A3eGAtsseNMZY9IKz60ftg.jpeg', thumbnail: 'https://miro.medium.com/max/529/1*A3eGAtsseNMZY9IKz60ftg.jpeg', alt: 'Another alt text'},
    {id:'someid3', src: 'https://miro.medium.com/max/1000/1*n5tDio_UgGSv5d9W-p-S6w.jpeg', thumbnail: 'https://miro.medium.com/max/1000/1*n5tDio_UgGSv5d9W-p-S6w.jpeg'} ]"/>
      </vs-col>
      <vs-col  vs-w="6">
        <h2>Barett Mid-Century Modern 5 PC Dining Set</h2>
        <br/>
        <h2 style="color: #ff383d">2000 000 đ - 2500 000 đ</h2>
        <!--<div style="padding-left: 80px; padding-right: 80px">-->
          <!--<vs-chip transparent color="danger">-->
            <!--<vs-avatar />-->
            <!--Avatar Icon-->
          <!--</vs-chip>-->
          <!--<vs-chip transparent color="danger">-->
            <!--<vs-avatar />-->
            <!--Avatar Icon-->
          <!--</vs-chip>-->
          <!--<vs-chip transparent color="danger">-->
            <!--<vs-avatar />-->
            <!--Avatar Icon-->
          <!--</vs-chip>-->
        <!--</div>-->
        <br/>
        <div>
          <vs-button color="primary" size="small" type="border">50 %</vs-button>
          <vs-button color="primary" size="small" type="border">40 %</vs-button>
          <vs-button color="primary" size="small" type="border">Free ship</vs-button>
        </div>
        <br/>
        <div style="text-align: center">
          <vs-row>
            <!--<vs-col v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">-->
              <!--<vs-button color="primary" type="filled" @click="$vs.notify({title:'Danger',text:'Contact author',color:'danger'})" icon="favorite">Primary</vs-button>-->
            <!--</vs-col>-->
            <!--<vs-col v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">-->
              <!--<vs-button color="success" type="filled" icon="turned_in_not">Success</vs-button>-->
            <!--</vs-col>-->
            <!--<vs-col v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">-->
              <!--<vs-button color="danger" type="filled" icon="shopping_cart">Danger</vs-button>-->
            <!--</vs-col>-->
            <vs-col vs-offset="3" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              <vs-button color="primary" type="filled" @click="$vs.notify({title:'Danger',text:'Contact author',color:'danger'})" icon="favorite">Favorite</vs-button>
            </vs-col>
            <vs-col v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              <vs-button color="success" type="filled" icon="turned_in_not">Tag</vs-button>
            </vs-col>
            <vs-col v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              <vs-button color="danger" type="filled" icon="shopping_cart">Purchase</vs-button>
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

</template>

<script>
export default {
  name: 'detailProduct'
}
</script>

<style scoped>

</style>
