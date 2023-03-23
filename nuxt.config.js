export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/gwas-blog/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gwas-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style.css'
  ],

  js: [
    'https://code.highcharts.com/highcharts.js',
    'https://code.highcharts.com/highcharts-3d.js',
    'https://code.highcharts.com/modules/exporting.js',
    'https://code.highcharts.com/modules/data.js',
    'https://code.highcharts.com/modules/drilldown.js'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
