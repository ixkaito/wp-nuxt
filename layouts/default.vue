<template>
  <div>
    <SiteHeader />
    <nuxt />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style scoped>
div {
  max-width: 960px;
  margin: auto;
}
</style>
