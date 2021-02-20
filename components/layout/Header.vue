<template>
  <header class="hd-Header">
    <div class="hd-Header_Inner">
      <ul class="hd-Header_Items">
        <li class="hd-Header_Item">
          <NuxtLink to="/" class="hd-Logo">
            <h1
              class="hd-Logo_Text"
              v-html="$prismic.asText($store.state.headerData.title)"
            />
            <PrismicImage
              :field="$store.state.headerData.logo"
              class="hd-Logo_Image"
            />
          </NuxtLink>
        </li>
        <li class="hd-Header_Item">
          <nav class="hd-Header_Nav">
            <ul class="hd-Header_NavItems">
              <li
                v-for="navLink in $store.state.headerData['navigation_links']"
                :key="navLink.id"
                class="hd-Header_NavItem"
              >
                <NuxtLink
                  :to="navLink.link_url[0].text"
                  class="hd-Header_NavLink"
                >
                  {{ $prismic.asText(navLink.link_text) }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  mounted () {
    console.log(this.$store.state.headerData)
  }
}
</script>

<style lang="scss" scoped>
  .hd-Header {
    background-color: $color-secondary-dark;
    color: $color-white;
    height: $headerHeight;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    transition: background-color .3s ease;

    .lyt-Main--homepage & {
      background-color: transparent;
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

  .hd-Logo {
    display: block;
    width: 200px;
  }

  .hd-Logo_Text {
    display: none;
  }

  .hd-Logo_Image {
    width: 100%;
  }

  .hd-Header_NavItems {
    @include structural_ul;
  }

  .hd-Header_NavItem {
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }
  }

  .hd-Header_NavLink {
    @include button_text;
  }
</style>
