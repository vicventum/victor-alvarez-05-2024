import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import type { Add } from '@/modules/pokemon/types/PokemonProvider'

import { addPokemonTeam } from '@/modules/pokemon/api/services/pokemon-service'
import { add as axiosAdd } from '@/modules/pokemon/api/providers/pokemon-axios-provider'
import { useFetch } from '@/modules/core/api/composables/use-fetch'

const useAddPokemons = async (pokemons: string[]) => {
  const provider: Add = axiosAdd

  const { isLoading, isError } = await useFetch<string[]>(() =>
    addPokemonTeam(provider, { team: pokemons })
  )

  return {
    // --- Properties
    isLoading,
    isError
    // error,
  }
}

export { useAddPokemons }
