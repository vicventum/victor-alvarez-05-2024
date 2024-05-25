<script setup lang="ts">
import HeaderLayout from '@/modules/core/components/layouts/HeaderLayout.vue'
</script>

<template>
  <div class="layout u-container">
    <HeaderLayout class="layout__header" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  max-width: var(--max-width-container);
  // margin-top: 1rem;
  margin-bottom: 4rem;

  &__header {
    margin-bottom: 3rem;
  }
}
</style>
