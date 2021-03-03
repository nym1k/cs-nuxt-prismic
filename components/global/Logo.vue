<template>
  <NuxtLink to="/" class="glo-Logo">
    <h1
      class="glo-Logo_Text"
      v-html="$prismic.asText($store.state.headerData.title)"
    />
    <PrismicImage
      :field="$store.state.headerData.logo"
      class="glo-Logo_Image"
    />
  </NuxtLink>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.glo-Logo {
  display: block;
  width: 200px;
}

.glo-Logo_Text {
  display: none;
}

.glo-Logo_Image {
  width: 100%;
}
</style>
