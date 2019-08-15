<template>
  <div>
    <h2>{{ page.title.rendered }}</h2>
    <div v-html="page.content.rendered"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/pages/2')
    return { page: data }
  }
}
</script>
