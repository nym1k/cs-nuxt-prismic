export { default as CardMerch } from '../../components/cards/Merch.vue'
export { default as LayoutSection } from '../../components/layout/Section.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyCardMerch = import('../../components/cards/Merch.vue' /* webpackChunkName: "components/merch" */).then(c => c.default || c)
export const LazyLayoutSection = import('../../components/layout/Section.vue' /* webpackChunkName: "components/section" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
