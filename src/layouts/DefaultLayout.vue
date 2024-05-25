<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
  <div>
    <header>
			Header
		
			<nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
		</header>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
