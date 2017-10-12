module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '📝 CV Martin Risseeuw',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '🤓 Curriculum vitae of Martin Risseeuw' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [
    '~assets/css/reset.sass',
    '~assets/css/_variables.sass',
    '~assets/css/flexbox.sass',
    '~assets/css/lego.scss',
    '~assets/css/animation.sass',
    '~assets/css/buttons.sass',
    '~assets/css/typography.sass',
    '~assets/css/main.sass'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
