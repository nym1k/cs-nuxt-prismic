<template>
  <div class="pst-Post">
    <HeroPost
      v-bind="{
        title: $prismic.asText(document.title),
        date: document.published_date,
        image: document.featured_image
      }"
    />
    <div class="pst-Post_Inner">
      <div class="pst-Post_Body">
        <prismic-rich-text
          :field="document.content"
          class="pst-Post_Content cms-richtext"
        />
      </div>
    </div>
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
  },

  mounted () {
    this.$store.commit('changeNavLayout', 'post')
  }
}
</script>

<style lang="scss" scoped>
  .pst-Post {
    min-height: 100vh;
  }

  .pst-Post_Inner {
    @include inner;
  }

  .pst-Post_Body {
    @include spacer_body;
  }

  .pst-Post_Content {
    @include restrained_width;
  }
</style>
