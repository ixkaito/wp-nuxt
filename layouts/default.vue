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
