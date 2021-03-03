<template>
  <div class="her-Post">
    <div class="her-Post_Inner">
      <div class="her-Post_Body">
        <div class="her-Post_Content">
          <h2 class="her-Post_Title">
            {{ title }}
          </h2>
          <p
            v-if="date"
            class="her-Post_Date"
          >
            {{ new Date(date).toLocaleDateString('en-gb') }}
          </p>
        </div>
      </div>
    </div>
    <PrismicImage
      :field="image"
      class="her-Post_BackgroundImage"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    date: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
  .her-Post {
    background-color: $color-secondary-dark;
    padding-top: $headerHeight;
    position: relative;
  }

  .her-Post_Inner {
    @include inner;
  }

  .her-Post_Body {
    @include spacer_body;
    min-height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 2;

    @include break-min($md) {
      min-height: 400px;
    }
  }

  .her-Post_Title {
    @include font_heading-2;
    text-align: center;
  }

  .her-Post_Date {
    margin-top: $item-padding * 2;
    margin-bottom: 0;
    text-align: center;

    position: relative;

    &::before {
      background-color: $color-white;
      content: '';
      width: 60px;
      height: 2px;

      position: absolute;
      top: -$item-padding;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }

  .her-Post_BackgroundImage {
    @include absolute_fill;
    @include object_fit_cover;
    opacity: 0.6;

    z-index: 1;
  }
</style>
