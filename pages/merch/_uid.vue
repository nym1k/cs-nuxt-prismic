<template>
  <LayoutSection
    v-if="product"
  >
    <template #header>
      <NuxtLink
        to="/merch"
        class="prd-Link"
      >
        &lt; Back to All Merch
      </NuxtLink>
    </template>
    <template #default>
      <div class="prd-Columns">
        <div class="prd-Column">
          <PrismicImage
            :field="product.featured_image"
          />
        </div>
        <div class="prd-Column">
          <h3
            class="prd-Title"
            v-html="$prismic.asText(product.title)"
          />
          <PrismicRichText
            class="prd-Text cms-richtext"
            :field="product.description"
          />
          <div class="prd-Purchase">
            <p class="prd-Purchase_Heading">
              Purchase now:
            </p>
            <ul class="prd-Purchase_Items">
              <li
                v-for="(item, index) in product.links"
                :key="'link-item-' + index"
                class="prd-Purchase_Item"
              >
                <PrismicLink
                  :field="item.link_url"
                  class="prd-Purchase_Button"
                >
                  {{ item.link_text[0].text }}
                </PrismicLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </LayoutSection>
</template>

<script>
export default {
  transition: 'transition',

  async asyncData ({ $prismic, params, error }) {
    try {
      // Query to get post content
      const product = (await $prismic.api.getByUID('product', params.uid)).data

      console.log(product)
      // Returns data to be used in template
      return {
        product
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  created () {
    this.$store.commit('changeNavLayout', 'page')
  }
}
</script>

<style lang="scss" scoped>
  @include page_transition;

  .prd-Columns {
    display: flex;
    justify-content: space-between;
  }

  .prd-Column {
    width: calc(50% - #{$grid-gap / 2});
  }

  .prd-Title {
    @include heading_with_margin;
  }

  .prd-Purchase {
    background-color: $color-secondary-dark;
    margin-top: $spacer-medium;
    padding: $item-padding;
  }

  .prd-Purchase_Heading {
    @include font_title-1;
    @include heading_with_margin;
  }

  .prd-Purchase_Items {
    @include structural_ul;
    margin-top: $item-padding;
    display: flex;
  }

  .prd-Purchase_Item {
    &:not(:last-child) {
      margin-right: $grid-gap;
    }
  }

  .prd-Purchase_Button {
    @include button_primary;
  }

  .prd-Link {
    @include button_text;
  }
</style>
