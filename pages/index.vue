<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <figure v-if="post._embedded['wp:featuredmedia']">
          <img v-bind:src="post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url" alt="Post thumbnail">
        </figure>
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
