<template>
  <SliceZone
    type="page"
    :uid="$route.params.uid"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },

  created () {
    this.$store.commit('changeNavLayout', 'page')
  }
}
</script>
