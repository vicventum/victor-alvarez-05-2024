<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardBase from '@/modules/core/components/base/CardBase.vue'
</script>

<template>
  <header class="header">
    <CardBase class="header__inner">
      <RouterLink to="/">
        <img class="header__logo" src="@/assets/img/pokemon-logo.svg" alt="Pokemon logo" />
      </RouterLink>

			
      <nav class="header__links">
				<!-- <div class="header__divider" /> -->

        <RouterLink to="/" class="header__link">Home</RouterLink>
        <RouterLink to="/about" class="header__link">About</RouterLink>
      </nav>
    </CardBase>
  </header>
</template>

<style lang="scss" scoped>
.header {
	// outline: 1px solid;
  max-width: var(--max-width-container);
	margin: 1rem auto;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: 7rem;
  }

	&__divider {
		background: var(--light-lighten-1);
    width: 1px;
    height: 2rem;
    display: block;
	}

  &__links {
    display: flex;
    gap: 3rem;
  }
  &__link {
    color: var(--light-darken-4);
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.15s;

    &:hover {
      border-color: var(--primary);
    }

    &.router-link-exact-active {
      color: var(--primary);
      border-color: var(--primary);
    }
  }
  // nav a.router-link-exact-active:hover {
  //   background-color: transparent;
  // }
}
</style>
