<script setup lang="ts">
import { ref, watch } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BaseButton from '@/modules/core/components/base/BaseButton.vue'
import BarAction from '@/modules/pokemon/components/bar/BarAction.vue'
import GalleryPokemons from '@/modules/pokemon/components/gallery/GalleryPokemons.vue'

import { MAX_POKEMONS, MAX_TEAM } from '@/modules/core/constants'
import { usePokemonList } from '@/modules/pokemon/api/composables/use-pokemon-list'
import { usePutPokemons } from '@/modules/pokemon/api/composables/use-put-pokemons'
import { useGetPokemonTeam } from '@/modules/pokemon/api/composables/use-get-pokemon-team'

const { pokemonList, isLoading, isFinalPage, currentPage, getPage } = await usePokemonList()
const { pokemonTeam, totalPokemonTeam, refetch } = await useGetPokemonTeam()

function nextPage(page: number) {
  getPage(page)
}

const selectedTeam = ref<string[]>([])
function addPokemons(selectedPokemons: string[]) {
  selectedTeam.value = selectedPokemons
}

async function submitTeam() {
  const teamUpdated = [...new Set([...selectedTeam.value, ...pokemonTeam.value])]
  await usePutPokemons(teamUpdated)
  // FIXME: Refactorizar luego
  setTimeout(() => refetch(), 700)
}

const isGreaterThanMax = ref(false)
const isButtonBarDisabled = ref(false)

watch(
  () => pokemonList.value,
  (pokemonList) => {
    if (pokemonList.length > MAX_POKEMONS) isGreaterThanMax.value = true
  },
  { deep: true }
)
watch(
  () => selectedTeam.value,
  (selectedTeam) => {
    if (!selectedTeam.length) isButtonBarDisabled.value = true
    else isButtonBarDisabled.value = false
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <DefaultLayout class="home">
    <BarAction
      class="home__bar-action"
      :total-team="totalPokemonTeam"
      :total-selected="selectedTeam.length"
      :max-team="MAX_TEAM"
      :is-button-disabled="isButtonBarDisabled"
      @add-team="submitTeam"
    />

    <GalleryPokemons
      class="home__gallery"
      :pokemon-list="pokemonList"
      :pokemon-team="pokemonTeam"
      :max-pokemons="MAX_POKEMONS"
      :max-team="MAX_TEAM"
      @change-select-pokemons="addPokemons"
    />

    <footer class="home__bottom">
      <BaseButton
        :disabled="isLoading || isFinalPage || isGreaterThanMax"
        @click="nextPage(currentPage + 1)"
      >
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
