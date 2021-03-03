export const state = () => ({
  footerData: undefined,
  headerData: undefined,
  layout: undefined
})

export const mutations = {
  changeNavLayout: (state, layout) => {
    state.layout = layout
  },

  updateFooterData: (state, footerData) => {
    state.footerData = footerData
  },

  updateHeaderData: (state, headerData) => {
    state.headerData = headerData
  }
}

export const actions = {
  async fetchFooterData ({ commit }, $prismic) {
    try {
      const currentFooterData = (await $prismic.api.getSingle('footer')).data
      commit('updateFooterData', currentFooterData)
    } catch (e) {
      /* eslint-disable */
      console.error(e)
      console.error('Please create a menu document')
      /* eslint-enable */
    }
  },

  async fetchHeaderData ({ commit }, $prismic) {
    try {
      const currentHeaderData = (await $prismic.api.getSingle('header')).data
      commit('updateHeaderData', currentHeaderData)
    } catch (e) {
      /* eslint-disable */
      console.error(e)
      console.error('Please create a menu document')
      /* eslint-enable */
    }
  }
}
