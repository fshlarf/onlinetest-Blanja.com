module.exports = {
  head: {
    title: 'client-side',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'a project for Blanja.com online test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/css/main.css'
  ],

  script: [
    'bootstrap/dist/js/bootstrap.js'
  ],

  loading: { color: '#3B8070' },

  build: {
    vendor: [
      'axios',
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

