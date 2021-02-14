<template>
  <div>
    <h1 class="blog-title">{{ $prismic.asText(document.title) }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData ({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID('post', params.uid)).data

      // Returns data to be used in template
      return {
        document: post
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
