import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PokemonList } from '../types/PokemonList'

export const usePokemonStore = defineStore('Pokemon', () => {
  const pokemonList = ref<PokemonList[]>([])
  // const pokemon = ref<pokemonDataDetail | null>(null)
  const currentPage = ref<number>(1)
  const isFinalPage = ref<boolean>(false)

  return {
    // --- State
    pokemonList,
    // pokemon,
    currentPage,
    isFinalPage,

    // --- Getters
    // squareCount: computed(() => currentPage.value * currentPage.value),

    // --- Actions
    setPokemonList(newPokemons: PokemonList[]) {
      pokemonList.value.push(...newPokemons)
    },
    // setPokemon(newPokemon: PokemonDetail | null) {
    //   pokemon.value = newPokemon ? { ...newPokemon } : null
    // },
    setPage(page: number) {
      if (currentPage.value === page) return null
      if (page <= 0) return null
      // if (page > totalPages.value) return null

      currentPage.value = page
    },
    setFinalPage(finalPage: string | null) {
      isFinalPage.value = !finalPage
    }
  }
})
