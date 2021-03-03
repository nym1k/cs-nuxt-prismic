<template>
  <header
    ref="header"
    class="hd-Header"
    :class="{ 'hd-Header--scrolled': scrolled }"
  >
    <div class="hd-Header_Inner">
      <ul class="hd-Header_Items">
        <li class="hd-Header_Item">
          <NuxtLink to="/" class="hd-Header_Logo">
            <h1
              class="hd-Header_LogoText"
              v-html="$prismic.asText($store.state.headerData.title)"
            />
            <GlobalLogo />
          </NuxtLink>
        </li>
        <li class="hd-Header_Item">
          <NavigationHeader />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { debounce } from 'throttle-debounce'

export default {
  data () {
    return {
      headerHeight: 0,
      scrolled: false
    }
  },

  beforeMount () {
    window.addEventListener('scroll', this.headerScroll)
  },

  mounted () {
    this.getHeaderHeight()
  },

  destroyed () {
    window.removeEventListener('scroll', this.headerScroll)
  },

  methods: {
    getHeaderHeight () {
      this.headerHeight = this.$refs.header.clientHeight
    },

    headerScroll: debounce(100, function () {
      this.scrolled = document.documentElement.scrollTop > this.headerHeight
    })
  }
}
</script>

<style lang="scss" scoped>
  .hd-Header {
    background-color: rgba($color-secondary-dark, 0.4);
    color: $color-white;
    height: $headerHeight;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    transition: background-color .3s ease;

    &.hd-Header--scrolled {
      background-color: rgba($color-secondary-dark, 0.9);
    }

    .lyt-Main--homepage &,
    .lyt-Main--post & {
      background-color: transparent;

      &.hd-Header--scrolled {
        background-color: rgba($color-secondary-dark, 0.75);
      }
    }
  }

  .hd-Header_Inner {
    @include inner;
  }

  .hd-Header_Items {
    @include structural_ul;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hd-Header_Logo {
    display: block;
    width: 200px;
  }

  .hd-Header_LogoText {
    display: none;
  }
</style>
