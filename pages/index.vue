<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <img v-if="post._embedded['wp:featuredmedia']"
          :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url" alt="Post thumbnail">
        <h2>{{ post.title.rendered }}</h2>
        <div v-html="post.excerpt.rendered"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/posts?_embed')
    return { posts: data }
  }
}
</script>
