<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <h2>{{ post.title.rendered }}</h2>
        <div v-html="post.excerpt.rendered"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/posts')
    return { posts: data }
  }
}
</script>
