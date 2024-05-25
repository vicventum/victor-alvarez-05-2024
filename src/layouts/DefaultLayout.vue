<script setup lang="ts">
import HeaderLayout from '@/modules/core/components/layouts/HeaderLayout.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <HeaderLayout />
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
