<script setup lang="ts">
type Props = {
  background?: string
}
const props = withDefaults(defineProps<Props>(), {
  background: 'var(--primary)'
})
</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
  color: var(--on-primary);
  background-color: v-bind(background);
  border-radius: var(--border);

  transition: background-color, filter, 0.15s;

  &:hover {
    // background-color: var(--primary-lighten-1);
    filter: brightness(1.3);
  }
}
</style>
