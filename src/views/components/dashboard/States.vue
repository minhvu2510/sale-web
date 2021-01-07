<template>
    <div style="padding: 0px 20px 0px 20px">
      <vs-row vs-align="flex-end"
              vs-type="flex" vs-justify="space-between" vs-w="12">
        <vs-col vs-lg="3" vs-xs="12" vs-type="flex" vs-w="2">
          <vs-card>
            <h4 class="mb-1">+70%</h4>
            <span>Total Sales</span>
            <vs-progress :percent="70" color="primary">primary</vs-progress>
          </vs-card>
        </vs-col>
        <vs-col vs-lg="3" vs-xs="12" vs-type="flex">
          <vs-card>
            <h4 class="mb-1">-10%</h4>
            <span>Monthly Sales</span>
            <vs-progress :percent="10" color="danger">primary</vs-progress>
          </vs-card>
        </vs-col>
        <vs-col vs-lg="3" vs-xs="12" vs-type="flex">
          <vs-card>
            <h4 class="mb-1">50%</h4>
            <span>Yearly Sales</span>
            <vs-progress :percent="50" color="success">primary</vs-progress>
          </vs-card>
        </vs-col>
        <!--<vs-col vs-lg="3" vs-xs="12">-->
        <!--<vs-card>-->
        <!--<h4 class="mb-1">30%</h4>-->
        <!--<span>Company Growth</span>-->
        <!--<vs-progress :percent="30" color="warning">primary</vs-progress>-->
        <!--</vs-card>-->
        <!--</vs-col>-->
      </vs-row>
    </div>
</template>
<script>
export default {
  name: 'States'
}
</script>
