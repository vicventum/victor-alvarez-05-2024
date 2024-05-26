<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BaseButton from '@/modules/core/components/base/BaseButton.vue'
import BarAction from '@/modules/pokemon/components/bar/BarAction.vue'
import GalleryPokemons from '@/modules/pokemon/components/gallery/GalleryPokemons.vue'

import { usePokemonList } from '@/modules/pokemon/api/composables/use-pokemon-list'
import { useAddPokemons } from '@/modules/pokemon/api/composables/use-add-pokemons'
import { useGetPokemonTeam } from '@/modules/pokemon/api/composables/use-get-pokemon-team'

const { pokemonList, isLoading, isFinalPage, currentPage, getPage } = await usePokemonList()
const { totalPokemonTeam, refetch } = await useGetPokemonTeam()

function nextPage(page: number) {
  getPage(page)
}

const pokemonTeam = ref<string[]>([])
function addPokemons(selectedPokemons: string[]) {
  pokemonTeam.value = selectedPokemons
}

async function submitTeam() {
  await useAddPokemons([...pokemonTeam.value])
  // FIXME: Refactorizar luego
  setTimeout(() => refetch(), 500)
}
</script>

<template>
  <DefaultLayout class="home">
    <BarAction class="home__bar-action" :total-team="totalPokemonTeam" @add-team="submitTeam" />
    <!-- <Suspense> -->
    <GalleryPokemons
      class="home__gallery"
      :pokemon-list="pokemonList"
      @change-select-pokemons="addPokemons"
    />
    <!-- </Suspense> -->

    <footer class="home__bottom">
      <BaseButton :disabled="isLoading || isFinalPage" @click="nextPage(currentPage + 1)">
        {{ isLoading ? 'Loading...' : 'Load more' }}
      </BaseButton>
    </footer>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.home {
  &__bar-action {
    margin-bottom: 6.5rem;
  }

  &__bottom {
    padding: 2rem;
    margin: 2rem auto;

    text-align: center;
  }
}
</style>
