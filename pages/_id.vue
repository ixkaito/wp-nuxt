<template>
  <div>
    <img v-if="post._embedded['wp:featuredmedia']"
      :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" alt="Post thumbnail">
    <h2>{{ post.title.rendered }}</h2>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      const { data } = await $axios.get(`/posts/${params.id}?_embed`)
      return { post: data }
    }
  }
}
</script>
