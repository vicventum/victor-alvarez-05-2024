<script setup lang="ts"></script>

<template>
  <span class="tag caption">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.tag {
  padding: 0.1rem 0.5rem 0.2rem;
  color: var(--light);
  background-color: var(--secondary);
  border-radius: 1rem;

  @media (min-width: 400px) {
    padding-bottom: 0.3rem;
  }
}
</style>
