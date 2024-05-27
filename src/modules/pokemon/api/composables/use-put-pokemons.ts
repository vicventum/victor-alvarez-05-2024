import type { Put } from '@/modules/pokemon/types/PokemonProvider'

import { putPokemonTeam } from '@/modules/pokemon/api/services/pokemon-service'
import { put as axiosPut } from '@/modules/pokemon/api/providers/pokemon-axios-provider'
import { useFetch } from '@/modules/core/api/composables/use-fetch'

const usePutPokemons = async (pokemons: string[]) => {
  const provider: Put = axiosPut

  const { isLoading, isError } = await useFetch<string[]>(() =>
    putPokemonTeam(provider, { team: pokemons })
  )

  return {
    // --- Properties
    isLoading,
    isError
    // error,
  }
}

export { usePutPokemons }
