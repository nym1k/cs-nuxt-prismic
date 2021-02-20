import Vue from 'vue'

const components = {
  CardProduct: () => import('../../components/cards/Product.vue' /* webpackChunkName: "components/card-product" */).then(c => c.default || c),
  LayoutHeader: () => import('../../components/layout/Header.vue' /* webpackChunkName: "components/layout-header" */).then(c => c.default || c),
  LayoutSection: () => import('../../components/layout/Section.vue' /* webpackChunkName: "components/layout-section" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
