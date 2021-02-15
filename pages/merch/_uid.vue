<template>
  <LayoutSection
    v-if="document"
  >
    <template #default>
      <div class="mrc-Columns">
        <div class="mrc-Column">
          <PrismicImage
            :field="document.featured_image"
          />
        </div>
        <div class="mrc-Column">
          <h3
            class="mrc-Title"
            v-html="$prismic.asText(document.title)"
          />
          <PrismicRichText
            class="mrc-Text cms-richtext"
            :field="document.description"
          />
          <div class="mrc-Purchase">
            <p class="mrc-Purchase_Heading">
              Purchase now:
            </p>
            <ul class="mrc-Purchase_Items">
              <li
                v-for="(item, index) in document.links"
                :key="'link-item-' + index"
                class="mrc-Purchase_Item"
              >
                <PrismicLink
                  :field="item.store_link"
                  class="mrc-Purchase_Button"
                >
                  {{ item.link_text[0].text }}
                </PrismicLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <NuxtLink
        to="/merch"
        class="mrc-Link"
      >
        &lt; Back to All Merch
      </NuxtLink>
    </template>
  </LayoutSection>
</template>

<script>
export default {
  transition: 'transition',

  async asyncData ({ $prismic, params, error }) {
    try {
      // Query to get post content
      const merch = (await $prismic.api.getByUID('merch', params.uid)).data

      console.log(merch)
      // Returns data to be used in template
      return {
        document: merch
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
  @include page_transition;

  .mrc-Columns {
    display: flex;
    justify-content: space-between;
  }

  .mrc-Column {
    width: calc(50% - #{$grid-gap / 2});
  }

  .mrc-Title {
    @include heading_with_margin;
  }

  .mrc-Purchase {
    background-color: $color-secondary-dark;
    margin-top: $spacer-medium;
    padding: $item-padding;
  }

  .mrc-Purchase_Heading {
    @include font_title-1;
    @include heading_with_margin;
  }

  .mrc-Purchase_Items {
    @include structural_ul;
    margin-top: $item-padding;
    display: flex;
  }

  .mrc-Purchase_Item {
    &:not(:last-child) {
      margin-right: $grid-gap;
    }
  }

  .mrc-Purchase_Button {
    @include button_primary;
  }

  .mrc-Link {
    @include button_text;
  }
</style>
