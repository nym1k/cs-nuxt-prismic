<template>
  <SliceZone
    type="homepage"
    queryType="single"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  transition: 'transition',

  components: {
    SliceZone
  }
}
</script>

<style lang="scss" scoped>
  @include page_transition;
</style>
