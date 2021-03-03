export { default as CardPost } from '../../components/cards/Post.vue'
export { default as CardProduct } from '../../components/cards/Product.vue'
export { default as GlobalLogo } from '../../components/global/Logo.vue'
export { default as LayoutFooter } from '../../components/layout/Footer.vue'
export { default as LayoutHeader } from '../../components/layout/Header.vue'
export { default as LayoutSection } from '../../components/layout/Section.vue'
export { default as NavigationFooter } from '../../components/navigation/Footer.vue'
export { default as NavigationHeader } from '../../components/navigation/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as HeroPost } from '../../components/hero/Post.vue'

export const LazyCardPost = import('../../components/cards/Post.vue' /* webpackChunkName: "components/card-post" */).then(c => c.default || c)
export const LazyCardProduct = import('../../components/cards/Product.vue' /* webpackChunkName: "components/card-product" */).then(c => c.default || c)
export const LazyGlobalLogo = import('../../components/global/Logo.vue' /* webpackChunkName: "components/global-logo" */).then(c => c.default || c)
export const LazyLayoutFooter = import('../../components/layout/Footer.vue' /* webpackChunkName: "components/layout-footer" */).then(c => c.default || c)
export const LazyLayoutHeader = import('../../components/layout/Header.vue' /* webpackChunkName: "components/layout-header" */).then(c => c.default || c)
export const LazyLayoutSection = import('../../components/layout/Section.vue' /* webpackChunkName: "components/layout-section" */).then(c => c.default || c)
export const LazyNavigationFooter = import('../../components/navigation/Footer.vue' /* webpackChunkName: "components/navigation-footer" */).then(c => c.default || c)
export const LazyNavigationHeader = import('../../components/navigation/Header.vue' /* webpackChunkName: "components/navigation-header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyHeroPost = import('../../components/hero/Post.vue' /* webpackChunkName: "components/hero-post" */).then(c => c.default || c)
