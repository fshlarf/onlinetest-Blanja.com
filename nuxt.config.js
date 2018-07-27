module.exports = {
  head: {
    title: 'online test Blanja.com (Developed by Faishal Arif)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'a project for Blanja.com online test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/starwars-icon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
    ],
    script: [
      { src: 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js' },
      { src: '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' }
    ],
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/main.css'
  ],

  script: [
    'bootstrap/dist/js/bootstrap.js',
  ],

  loading: { color: '#3B8070' },

  plugins: [
    '~/plugins/stringtodate.js'
  ],

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

