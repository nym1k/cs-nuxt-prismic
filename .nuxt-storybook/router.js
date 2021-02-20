import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ce8b4a08 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _4519a792 = () => interopDefault(import('../pages/merch/index.vue' /* webpackChunkName: "pages/merch/index" */))
const _c76f0388 = () => interopDefault(import('../pages/merch/_uid.vue' /* webpackChunkName: "pages/merch/_uid" */))
const _02805995 = () => interopDefault(import('../pages/post/_uid.vue' /* webpackChunkName: "pages/post/_uid" */))
const _d8827f72 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _799bafa8 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _ce8b4a08,
    name: "prismic-preview"
  }, {
    path: "/merch",
    component: _4519a792,
    name: "merch"
  }, {
    path: "/merch/:uid",
    component: _c76f0388,
    name: "merch-uid"
  }, {
    path: "/post/:uid?",
    component: _02805995,
    name: "post-uid"
  }, {
    path: "/",
    component: _d8827f72,
    name: "index"
  }, {
    path: "/:uid",
    component: _799bafa8,
    name: "uid"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
