<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BaseButton from '@/modules/core/components/base/BaseButton.vue'
import BarAction from '@/modules/pokemon/components/bar/BarAction.vue'
import GalleryPokemons from '@/modules/pokemon/components/gallery/GalleryPokemons.vue'

import { usePokemonList } from '@/modules/pokemon/api/composables/use-pokemon-list'

const { pokemonList, isLoading, isFinalPage, currentPage, getPage } = await usePokemonList()

function nextPage(page: number) {
  getPage(page)
}
</script>

<template>
  <DefaultLayout class="home">
    <BarAction class="home__bar-action" />
    <!-- <Suspense> -->
    <GalleryPokemons class="home__gallery" :pokemon-list="pokemonList" />
    <!-- </Suspense> -->

    <footer class="actions pa-4 my-16">
      <BaseButton :disabled="isLoading || isFinalPage" @click="nextPage(currentPage + 1)">
        Load More
      </BaseButton>
    </footer>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.home {
  &__bar-action {
    margin-bottom: 6.5rem;
  }
}
</style>
