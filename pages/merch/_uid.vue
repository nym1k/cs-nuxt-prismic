<template>
  <div>
    <PrismicRichText
      :field="document.title"
    />
    <PrismicImage
      :field="document.featured_image"
    />
    <PrismicRichText
      :field="document.description"
    />
    <ul>
      <li v-for="(item, index) in document.links" :key="'link-item-' + index">
        <PrismicLink :field="item.store_link">
          {{ item.link_text[0].text }}
        </PrismicLink>
      </li>
    </ul>
    <NuxtLink
      to="/merch"
    >
      Back to All Merch
    </NuxtLink>
  </div>
</template>

<script>
export default {
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
