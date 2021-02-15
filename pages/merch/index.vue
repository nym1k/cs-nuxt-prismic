<template>
  <LayoutSection
    v-if="pageContent && merchItems"
  >
    <template #header>
      <prismic-rich-text
        :field="pageContent.title"
      />
      <prismic-rich-text
        :field="pageContent.description"
      />
    </template>
    <template #default>
      <ul
        v-if="merchItems.length !== 0"
        class="lst-Listing_Items"
      >
        <!-- Template for blog posts -->
        <li
          v-for="item in merchItems"
          :key="item.id"
          :post="item"
          class="lst-Listing_Item"
        >
          <CardMerch
            v-bind="{
              uid: item.uid,
              title: item.data.title,
              image: item.data.featured_image
            }"
          />
        </li>
      </ul>
      <!-- If no blog posts return message -->
      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
    </template>
  </LayoutSection>
</template>

<script>
export default {
  transition: 'transition',

  async asyncData ({ $prismic, error }) {
    try {
      // Query to get blog home content
      const pageContent = (await $prismic.api.getSingle('merch_index')).data

      // Query to get posts content to preview
      const merchItems = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'merch'),
        { orderings: '[my.post.date desc]' }
      )

      // Returns data to be used in template
      return {
        pageContent,
        merchItems: merchItems.results
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Blog'
    }
  }
}
</script>

<style lang="scss" scoped>
  @include page_transition;

  .lst-Listing_Items {
    @include structural_ul;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: $grid-gap;
  }
</style>
