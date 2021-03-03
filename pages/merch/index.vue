<template>
  <LayoutSection
    v-if="pageContent && productItems"
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
        v-if="productItems.length !== 0"
        class="pge-Listing_Items"
      >
        <!-- Template for blog posts -->
        <li
          v-for="item in productItems"
          :key="item.id"
          :post="item"
          class="pge-Listing_Item"
        >
          <CardProduct
            v-bind="{
              uid: item.uid,
              title: item.data.title,
              image: item.data.featured_image.small
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
      const pageContent = (await $prismic.api.getSingle('products')).data

      // Query to get posts content to preview
      const productItems = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'product'),
        { orderings: '[my.post.date desc]' }
      )

      console.log(productItems) // eslint-disable-line no-console

      // Returns data to be used in template
      return {
        pageContent,
        productItems: productItems.results
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
  },

  mounted () {
    this.$store.commit('changeNavLayout', 'page')
  }
}
</script>

<style lang="scss" scoped>
  @include page_transition;

  .pge-Listing_Items {
    @include listing_grid;
  }
</style>
