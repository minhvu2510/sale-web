<template>
  <div>
    <vs-button @click="changed" color="primary" type="border">Primary</vs-button>
    <div v-for="it in $store.getters.products" :key="it.id">
      <p>You chose {{ it.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testStore',
  methods: {
    changed: function () {
      this.$store.commit('change', 'minhvu')
    }
  }
}
</script>

<style scoped>

</style>
