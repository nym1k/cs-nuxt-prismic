<template>
  <nav class="nav-Footer">
    <ul class="nav-Footer_Items">
      <li
        v-for="navLink in $store.state.footerData['navigation_links']"
        :key="navLink.id"
        class="nav-Footer_Item"
      >
        <NuxtLink
          :to="$prismic.asText(navLink.link_url)"
          class="nav-Footer_Link"
        >
          {{ $prismic.asText(navLink.link_text) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-Footer_Items {
  @include structural_ul;
}

.nav-Footer_Item {
  margin-bottom: 1rem;

  &:first-child {
    margin-bottom: 0;
  }
}

.nav-Footer_Link {
  @include button_text;
}
</style>
