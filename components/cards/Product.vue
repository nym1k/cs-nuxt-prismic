<template>
  <article class="crd-Merch">
    <NuxtLink
      :to="`/merch/${uid}`"
      class="crd-Merch_Fauxlink"
    />
    <div class="crd-Merch_ImageWrapper">
      <PrismicImage
        :field="image"
        class="crd-Merch_Image"
      />
      <div class="crd-Merch_ImageOverlay">
        <p class="crd-Merch_ImageOverlayText">
          View More
        </p>
      </div>
    </div>
    <h3 class="crd-Merch_Title">
      {{ $prismic.asText(title) }}
    </h3>
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

.crd-Merch_Fauxlink {
  @include absolute_fill;
  z-index: 3;
}

.crd-Merch_ImageWrapper {
  position: relative;
  overflow: hidden;
}

.crd-Merch_Image {
  transition: transform .5s ease;
  will-change: transform;

  .crd-Merch:hover & {
    transform: scale(1.015);
  }
}

.crd-Merch_ImageOverlay {
  @include absolute_fill;
  background-color: rgba($color-secondary-dark, 0.7);
  opacity: 0;
  visibility: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  transition: opacity .5s ease, visibility .5s ease;

  .crd-Merch:hover & {
    opacity: 1;
    visibility: visible;
  }
}

.crd-Merch_ImageOverlayText {
  @include font_title-1;
}

.crd-Merch_Title {
  @include font_title-2;
  margin-top: 1rem;
  transition: color .3s ease;
}
</style>
