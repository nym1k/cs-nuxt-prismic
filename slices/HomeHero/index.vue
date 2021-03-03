<template>
  <section class="her-Home">
    <div class="her-Home_Inner">
      <div class="her-Home_Body">
        <div class="her-Home_Content">
          <h2 class="her-Home_Title">
            {{ $prismic.asText(slice.primary.title) }}
          </h2>
          <h3 class="her-Home_Text cms-richtext">
            {{ $prismic.asText(slice.primary.text) }}
          </h3>
          <ul
            v-if="slice.primary.buttonPrimaryURL || slice.primary.buttonSecondaryURL"
            class="her-Home_Items"
          >
            <li
              v-if="slice.primary.buttonPrimaryURL"
              class="her-Home_Item"
            >
              <NuxtLink
                :to="slice.primary.buttonPrimaryURL"
                class="her-Home_Link"
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
                class="her-Home_Link"
              >
                {{ slice.primary.buttonSecondaryText }}
              </NuxtLink>
            </li>
          </ul>
        </div>
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
  }
}
</script>

<style lang="scss" scoped>
.her-Home {
  @include spacer_padding_bottom;
  background-color: black;
  padding-top: $headerHeight;
  min-height: 100vh;

  display: flex;

  position: relative;
}

.her-Home_Inner {
  @include inner;
  display: flex;
}

.her-Home_Body {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.her-Home_Content {
  color: white;
  // text-align: center;
  max-width: 60rem;

  position: relative;
  z-index: 4;
}

.her-Home_Title {
  @include font_huge;
  font-weight: $fw-light;
  letter-spacing: 1rem;
  text-transform: uppercase;
  margin-bottom: $item-padding;
  text-shadow: 2px 4px 4px rgba($color-secondary-dark, 0.2),
    0px -5px 10px rgba($color-white, 0.15);
}

.her-Home_Text {
  @include font_heading-3;
  margin-bottom: $item-padding;
}

.her-Home_Items {
  @include structural_ul;
  margin-top: $item-padding;

  display: flex;
}

.her-Home_Item {
  margin-right: $grid-gap;

  &:last-child {
    margin-right: 0;
  }
}

.her-Home_Link {
  .her-Home_Item:nth-child(odd) & {
    @include button_primary;
  }

  .her-Home_Item:nth-child(even) & {
    @include button_secondary;
  }
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
