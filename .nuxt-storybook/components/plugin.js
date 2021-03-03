import Vue from 'vue'

const components = {
  CardPost: () => import('../../components/cards/Post.vue' /* webpackChunkName: "components/card-post" */).then(c => c.default || c),
  CardProduct: () => import('../../components/cards/Product.vue' /* webpackChunkName: "components/card-product" */).then(c => c.default || c),
  GlobalLogo: () => import('../../components/global/Logo.vue' /* webpackChunkName: "components/global-logo" */).then(c => c.default || c),
  LayoutFooter: () => import('../../components/layout/Footer.vue' /* webpackChunkName: "components/layout-footer" */).then(c => c.default || c),
  LayoutHeader: () => import('../../components/layout/Header.vue' /* webpackChunkName: "components/layout-header" */).then(c => c.default || c),
  LayoutSection: () => import('../../components/layout/Section.vue' /* webpackChunkName: "components/layout-section" */).then(c => c.default || c),
  NavigationFooter: () => import('../../components/navigation/Footer.vue' /* webpackChunkName: "components/navigation-footer" */).then(c => c.default || c),
  NavigationHeader: () => import('../../components/navigation/Header.vue' /* webpackChunkName: "components/navigation-header" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  HeroPost: () => import('../../components/hero/Post.vue' /* webpackChunkName: "components/hero-post" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
