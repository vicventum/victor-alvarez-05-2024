<script setup lang="ts">
type Props = {
  background?: string
  color?: string
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  background: 'var(--primary)',
  color: 'var(--on-primary)',
  disabled: false
})
</script>

<template>
  <button class="btn" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
  color: v-bind(color);
  background-color: v-bind(background);
  border-radius: var(--border);
  font-weight: 500;

  transition: background-color, filter, 0.15s;

  &:hover {
    // background-color: var(--primary-lighten-1);
    filter: brightness(1.3);
  }
  &:disabled {
    filter: grayscale(1) contrast(0.9);
    cursor: default;
  }
}
</style>
