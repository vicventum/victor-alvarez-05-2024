import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'
import type { PokemonDetail } from '../types/PokemonDetail'

export const usePokemonStore = defineStore('Pokemon', () => {
  const pokemonList = ref<PokemonList[]>([])
  const pokemonTeam = ref<string[]>([])
  const pokemonTeamData = ref<PokemonDetail[]>([])
  // const pokemon = ref<pokemonDataDetail | null>(null)
  const currentPage = ref<number>(1)
  const isFinalPage = ref<boolean>(false)

  return {
    // --- State
    pokemonList,
    pokemonTeam,
    pokemonTeamData,
    // pokemon,
    currentPage,
    isFinalPage,

    // --- Getters
    // squareCount: computed(() => currentPage.value * currentPage.value),

    // --- Actions
    setPokemonList(newPokemons: PokemonList[]) {
      pokemonList.value.push(...newPokemons)
    },
    setPokemonTeam(newPokemonTeam: string[]) {
      pokemonTeam.value = newPokemonTeam
    },
    setPokemonTeamData(newPokemonTeam: PokemonDetail[]) {
      pokemonTeamData.value = newPokemonTeam
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
