<template>
  <footer class="ft-Footer">
    <div class="ft-Footer_Inner">
      <div class="ft-Footer_Body">
        <ul class="ft-Footer_Items">
          <li class="ft-Footer_Item">
            <NavigationFooter />
          </li>
          <li class="ft-Footer_Item">
            <div class="ft-Footer_Logo">
              <GlobalLogo />
            </div>
          </li>
        </ul>
      </div>
      <div class="ft-Footer_Footer">
        <p class="ft-Footer_Text">
          <a
            :href="siteInfoURL"
            :target="siteInfoURLTarget"
          >
            {{ siteInfoText }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    siteInfoText () {
      return this.$prismic.asText(this.$store.state.footerData.site_info)
    },
    siteInfoURL () {
      return this.$store.state.footerData.site_info[0].spans[0].data.url
    },
    siteInfoURLTarget () {
      return this.$store.state.footerData.site_info[0].spans[0].data.target
    }
  }
}
</script>

<style lang="scss" scoped>
  .ft-Footer {
    background-color: $color-secondary-dark;
    color: $color-white;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .ft-Footer_Inner {
    @include inner;
  }

  .ft-Footer_Items {
    @include structural_ul;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ft-Footer_Footer {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOCAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiM0ODQ4NEEiPjwvY2lyY2xlPjwvc3ZnPg==);
    background-position: top;
    background-repeat: repeat-x;
    background-size: 0.5rem 0.125rem; // 8px 2px
    margin-top: 2rem;
    padding-top: 2rem;
    text-align: center;
  }

  .ft-Footer_Text {
    margin-bottom: 0;
  }

  .ft-Footer_Logo {
    display: block;
    width: 200px;
  }
</style>
