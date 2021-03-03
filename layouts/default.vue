<template>
  <main
    class="lyt-Main"
    :class="layoutClass"
  >
    <LayoutHeader />
    <Nuxt />
    <LayoutFooter />
  </main>
</template>

<script>
export default {
  async middleware ({ store, $prismic }) {
    await store.dispatch('fetchHeaderData', $prismic)
    await store.dispatch('fetchFooterData', $prismic)
  },

  head () {
    return {
      script: [
        {
          src: 'https://static.cdn.prismic.io/prismic.js?new=true&repo=countless-skies-nuxtjs'
        }
      ]
    }
  },

  computed: {
    layoutClass () {
      return 'lyt-Main--' + this.$store.state.layout
    }
  }
}
</script>

<style lang="scss" scoped>
  .lyt-Main {
    &:not(.lyt-Main--homepage, .lyt-Main--post) {
      padding-top: $headerHeight;
    }
  }
</style>
