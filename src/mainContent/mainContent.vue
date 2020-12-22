<template>
  <div>
    <div class="page">
      <div>
        <div class="content content-pagex">
          <div style="padding-bottom: 5px">
            <!--<grid-view></grid-view>-->
            <!--<carousel></carousel>-->
            <!--<bottom-web></bottom-web>-->
          </div>
        </div>
      </div>
    </div>
    <top-web></top-web>
  </div>

</template>

<script>
import carousel from '@/carousel/carousel.vue'
import bottomWeb from '@/components/bottom/bottomWeb.vue'
import topWeb from '@/header/header.vue'
import gridView from '@/gridView/gridView.vue'
export default {
  name: 'mainContent',
  components: {
    carousel,
    bottomWeb,
    topWeb,
    gridView
    // HelloWorld
  }
}
</script>

<style scoped>

</style>
