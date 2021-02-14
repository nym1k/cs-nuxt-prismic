<template>
  <section class="her-Home">
    <div class="her-Home_Content">
      <prismic-rich-text
        :field="slice.primary.title"
        class="her-Home_Title"
      />
      <prismic-rich-text
        :field="slice.primary.description"
        class="her-Home_Text"
      />
    </div>
    <prismic-image
      :field="slice.primary.backgroundImage"
      class="her-Home_BackgroundImage"
      :style="`opacity: ${slice.primary.backgroundOpacity}`"
    />
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.her-Home {
  position: relative;
  background-color: black;
}

.her-Home_Content {
  color: white;
  margin: 0 auto;
  padding: 8em 4em;
  text-align: center;
  max-width: 60rem;
  position: relative;
  z-index: 2;
}

.her-Home_Title {
  margin-bottom: 2em;
}

.her-Home_BackgroundImage {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>
