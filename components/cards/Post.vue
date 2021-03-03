<template>
  <article class="crd-Post">
    <NuxtLink
      :to="`/posts/${uid}`"
      class="crd-Post_Fauxlink"
    />
    <div class="crd-Post_ImageWrapper">
      <PrismicImage
        :field="image"
        class="crd-Post_Image"
      />
      <div class="crd-Post_ImageOverlay">
        <p class="crd-Post_ImageOverlayText">
          Read More
        </p>
      </div>
    </div>
    <h3 class="crd-Post_Title">
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
.crd-Post {
  position: relative;
}

.crd-Post_Fauxlink {
  @include absolute_fill;
  z-index: 3;
}

.crd-Post_ImageWrapper {
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;
}

.crd-Post_Image {
  @include absolute_fill;
  @include object_fit_cover;
  transition: transform .5s ease;
  will-change: transform;

  .crd-Post:hover & {
    transform: scale(1.015);
  }
}

.crd-Post_ImageOverlay {
  @include absolute_fill;
  background-color: rgba($color-secondary-dark, 0.7);
  opacity: 0;
  visibility: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  transition: opacity .5s ease, visibility .5s ease;

  .crd-Post:hover & {
    opacity: 1;
    visibility: visible;
  }
}

.crd-Post_ImageOverlayText {
  @include font_title-1;
  margin-bottom: 0;
}

.crd-Post_Title {
  @include font_title-2;
  margin-top: 1rem;
  transition: color .3s ease;
}
</style>
