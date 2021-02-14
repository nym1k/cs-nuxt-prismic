<template>
  <section>
    <prismic-rich-text
      :field="pageContent.title"
    />
    <prismic-rich-text
      :field="pageContent.description"
    />
    <article>
      <!-- Check blog posts exist -->
      <div v-if="merchItems.length !== 0" class="blog-main">
        <!-- Template for blog posts -->
        <section
          v-for="item in merchItems"
          :key="item.id"
          :post="item"
          class="blog-merch"
        >
          <!-- Here :post="merch" passes the data to the component -->
          <nuxt-link
            :to="`/merch/${item.uid}`"
          >
            <div class="blog-merch">
              <prismic-image :field="item.data.featured_image" />
              <h2>{{ $prismic.asText(item.data.title) }}</h2>
            </div>
          </nuxt-link>
        </section>
      </div>
      <!-- If no blog posts return message -->
      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
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
