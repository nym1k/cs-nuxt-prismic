<template>
  <nav class="nav-Header">
    <ul class="nav-Header_Items">
      <li
        v-for="navLink in $store.state.headerData['navigation_links']"
        :key="navLink.id"
        class="nav-Header_Item"
      >
        <NuxtLink
          :to="navLink.link_url[0].text"
          class="nav-Header_Link"
        >
          {{ $prismic.asText(navLink.link_text) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-Header_Items {
  @include structural_ul;
  display: flex;
}

.nav-Header_Item {
  margin-left: 1rem;

  &:first-child {
    margin-left: 0;
  }
}

.nav-Header_Link {
  @include button_text;
}
</style>
