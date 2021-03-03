<template>
  <section
    v-if="post"
    class="pst-Featured"
  >
    <div class="pst-Featured_Inner">
      <div class="pst-Featured_Body">
        <div class="pst-Featured_Columns">
          <div class="pst-Featured_Column">
            <h3
              class="pst-Featured_Title"
              v-html="$prismic.asText(post.data.title)"
            />
            <prismic-rich-text
              :field="post.data.excerpt"
              class="pst-Featured_Excerpt cms-richtext"
            />
            <NuxtLink
              :to="'/posts'"
              class="pst-Featured_Link"
            >
              View More
            </NuxtLink>
          </div>
          <div class="pst-Featured_Column">
            <PrismicImage
              :field="post.data.featured_image"
              class="pst-Featured_Image"
            />
          </div>
        </div>
      </div>
    </div>
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

  data () {
    return {
      post: undefined
    }
  },

  async fetch () {
    this.post = await this.$prismic.api.getByUID('post', this.slice.primary.post.uid)
  },

  mounted () {
    console.log(this.post)
  }
}
</script>

<style lang="scss" scoped>
  .pst-Featured {
    background-color: $color-primary;
  }

  .pst-Featured_Inner {
    @include inner;
  }

  .pst-Featured_Body {
    @include spacer_body;
  }

  .pst-Featured_Columns {
    display: flex;
  }

  .pst-Featured_Column {
    &:first-child {
      flex: 0 0 calc((9 / 12) * 100% - #{$grid-gap / 2});
      margin-right: $grid-gap;
    }
    &:last-child {
      flex: 0 0 calc((3 / 12) * 100% - #{$grid-gap / 2});
    }
  }

  .pst-Featured_Title {
    @include font_heading-3;
    margin-bottom: $item-padding;
  }

  .pst-Featured_Link {
    @include button_secondary;
    margin-top: $item-padding;
  }
</style>
