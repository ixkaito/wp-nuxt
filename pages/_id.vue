<template>
  <div>
    <figure v-if="post._embedded['wp:featuredmedia']">
      <img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url" alt="Post thumbnail">
    </figure>
    <h2>{{ post.title.rendered }}</h2>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`/posts/${params.id}?_embed`)
    return { post: data }
  }
}
</script>
