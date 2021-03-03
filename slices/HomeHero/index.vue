<template>
  <section class="her-Home">
    <div class="her-Home_Content">
      <PrismicRichText
        :field="slice.primary.title"
        class="her-Home_Title"
      />
      <PrismicRichText
        :field="slice.primary.text"
        class="her-Home_Text"
      />
      <div
        v-if="slice.primary.buttonPrimaryURL || slice.primary.buttonSecondaryURL"
        class="her-Home_Buttons"
      >
        <ul class="her-Home_Item">
          <li
            v-if="slice.primary.buttonPrimaryURL"
            class="her-Home_Item"
          >
            <NuxtLink
              :to="slice.primary.buttonPrimaryURL"
            >
              {{ slice.primary.buttonPrimaryText }}
            </NuxtLink>
          </li>
          <li
            v-if="slice.primary.buttonSecondaryURL"
            class="her-Home_Item"
          >
            <NuxtLink
              :to="slice.primary.buttonSecondaryURL"
            >
              {{ slice.primary.buttonSecondaryText }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <PrismicImage
      :field="slice.primary.backgroundImage"
      class="her-Home_BackgroundImage"
      :style="`opacity: ${slice.primary.backgroundOpacity}`"
    />
    <video
      v-if="slice.primary.showVideo"
      autoplay
      loop
      muted
      playsinline
      poster="none"
      class="her-Home_BackgroundVideo"
    >
      <source
        src="~/assets/videos/particle-hero-bg.mp4"
        type="video/mp4"
      >
    </video>
    <div class="her-Home_BackgroundOverlay" />
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
  },

  mounted () {
    console.log(this.slice)
  }
}
</script>

<style lang="scss" scoped>
.her-Home {
  background-color: black;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.her-Home_Content {
  color: white;
  margin: 0 auto;
  padding: 8em 4em;
  text-align: center;
  max-width: 60rem;
  position: relative;
  z-index: 4;
}

.her-Home_Title {
  margin-bottom: 2em;
}

.her-Home_Link {
  color: $color-white;
  margin-top: $spacer-large;
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

.her-Home_BackgroundVideo {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
}

.her-Home_BackgroundOverlay {
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
}
</style>
