export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cs-nuxt-prismic',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList'
    }, {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js'
    }]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vue-essential-slices/src/styles/styles.scss', '~assets/styles/base.scss'],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/components/cards/', prefix: 'card' },
    { path: '~/components/heros/', prefix: 'hero' },
    { path: '~/components/global/', prefix: 'global' },
    { path: '~/components/layout/', prefix: 'layout' },
    { path: '~/components/navigation/', prefix: 'navigation' }
  ],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [// https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
    ['@nuxtjs/google-fonts', {
      families: {
        Marcellus: true,
        'Marcellus+SC': true
      }
    }]
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [// https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', ['@nuxtjs/prismic', {
      endpoint: 'https://countless-skies-nuxtjs.cdn.prismic.io/api/v2',
      apiOptions: {
        routes: [{
          type: 'page',
          path: '/:uid'
        }]
      }
    }], ['nuxt-sm']],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm']
  },
  styleResources: {
    scss: ['~assets/styles/abstracts.scss']
  },
  storybook: {
    stories: ['~/slices/**/*.stories.js']
  },
  ignore: ['**/*.stories.js']
}
