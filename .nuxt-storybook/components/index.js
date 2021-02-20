export { default as CardProduct } from '../../components/cards/Product.vue'
export { default as LayoutSection } from '../../components/layout/Section.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyCardProduct = import('../../components/cards/Product.vue' /* webpackChunkName: "components/card-product" */).then(c => c.default || c)
export const LazyLayoutSection = import('../../components/layout/Section.vue' /* webpackChunkName: "components/layout-section" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
