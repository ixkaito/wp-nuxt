export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async getPosts({ commit }) {
    const { data } = await this.$axios.get('/posts?_embed')
    commit('setPosts', data)
  }
}
