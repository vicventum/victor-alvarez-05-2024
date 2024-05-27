<script setup lang="ts"></script>

<template>
  <span class="tag caption">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.tag {
  padding: 0.1rem 0.5rem 0.4rem;
  color: var(--light);
  background-color: var(--secondary);
  border-radius: 1rem;
}
</style>
