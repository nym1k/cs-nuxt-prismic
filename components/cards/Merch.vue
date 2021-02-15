<template>
  <article class="crd-Merch">
    <div class="crd-Merch_ImageWrapper">
      <PrismicImage :field="image" />
    </div>
    <h3 class="crd-Merch_Title">
      {{ $prismic.asText(title) }}
    </h3>
    <NuxtLink
      :to="`/merch/${uid}`"
      class="crd-Merch_Fauxlink"
    />
  </article>
</template>

<script>
export default {
  props: {
    uid: {
      type: String,
      default: undefined
    },
    title: {
      type: Array,
      default: undefined
    },
    image: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.crd-Merch {
  position: relative;
}

.crd-Merch_ImageWrapper {
  position: relative;
}

.crd-Merch_Title {
  @include font_heading-3;
  margin-top: 1rem;
}

.crd-Merch_Fauxlink {
  @include absolute_fill;
  z-index: 3;
}
</style>
