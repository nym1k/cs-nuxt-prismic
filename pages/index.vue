<template>
  <SliceZone
    type="homepage"
    queryType="single"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },

  transition: 'transition',

  mounted () {
    this.$nextTick(() => {
      this.$store.commit('changeNavLayout', 'homepage')
    })
  }
}
</script>

<style lang="scss" scoped>
  @include page_transition;
</style>
