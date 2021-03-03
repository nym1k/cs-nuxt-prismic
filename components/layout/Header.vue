<template>
  <header class="hd-Header">
    <div class="hd-Header_Inner">
      <ul class="hd-Header_Items">
        <li class="hd-Header_Item">
          <GlobalLogo />
        </li>
        <li class="hd-Header_Item">
          <NavigationHeader />
        </li>
      </ul>
    </div>
  </header>
</template>

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
</style>
