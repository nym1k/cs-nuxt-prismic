export const state = () => ({
  headerData: undefined,
  layout: undefined
})

export const mutations = {
  changeNavLayout (state, layout) {
    state.layout = layout
  },
  updateHeaderData: (state, headerData) => {
    state.headerData = headerData
  }
}

export const actions = {
  async fetchHeaderData ({ commit }, $prismic) {
    try {
      const currentHeaderData = (await $prismic.api.getSingle('header')).data
      commit('updateHeaderData', currentHeaderData)
    } catch (e) {
      console.error(e)
      console.error('Please create a menu document')
    }
  }
}
