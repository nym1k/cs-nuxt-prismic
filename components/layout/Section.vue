<template functional>
  <section class="layout-section">
    <div class="layout-section__inner">
      <div
        v-if="$slots.header"
        class="layout-section__header"
      >
        <slot name="header" />
      </div>
      <div
        v-if="$slots.default"
        class="layout-section__body"
      >
        <div class="layout-section__content">
          <slot name="default" />
        </div>
      </div>
      <div
        v-if="$slots.footer"
        class="layout-section__footer"
      >
        <slot name="footer" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.layout-section {
  &:not(:only-child) {
    @include spacer;
  }
  &:only-child {
    @include spacer_body;
  }
}

.layout-section__inner {
  @include inner;
}

.layout-section__header {
  margin-bottom: $spacer-medium;
}

.layout-section__content {
  .layout--restrained & {
    @include break-min($lg) {
      margin: 0 auto;
      max-width: $restrained-width - ($gutter-large * 2);
    }
  }
}

.layout-section__footer {
  margin-top: $spacer-medium;
}
</style>
