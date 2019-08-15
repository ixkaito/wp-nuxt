import axios from 'axios'

const apiUrl = process.env.API_URL || 'https://kiteretz.xsrv.jp/wp-json/wp/v2'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'WordPress + Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WordPress + Nuxt.js live demo for CaT vol.7' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: apiUrl
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  generate: {
    routes: async () => {
      const { data } = await axios.get(`${apiUrl}/posts?_embed`)
      return data.map(post => {
        return {
          route: `${post.id}`,
          payload: post
        }
      })
    }
  }
}
