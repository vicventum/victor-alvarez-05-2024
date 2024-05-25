<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BarAction from '@/modules/pokemon/components/bar/BarAction.vue'
import GalleryPokemons from '@/modules/pokemon/components/gallery/GalleryPokemons.vue'
</script>

<template>
  <DefaultLayout class="home">
    <BarAction class="home__bar-action" />
    <Suspense>
      <GalleryPokemons class="home__gallery" />
    </Suspense>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.home {
  &__bar-action {
    margin-bottom: 6.5rem;
  }
}
</style>
