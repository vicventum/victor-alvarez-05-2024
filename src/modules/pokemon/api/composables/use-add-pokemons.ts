import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import type { Add } from '@/modules/pokemon/types/PokemonProvider'
import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'

import { addPokemonTeam } from '@/modules/pokemon/api/services/pokemon-service'
import { add as axiosAdd } from '@/modules/pokemon/api/providers/pokemon-axios-provider'
import { usePokemonStore } from '@/modules/pokemon/stores/pokemon.store'
import { useFetch } from '@/modules/core/api/composables/use-fetch'
import { utilFormatPokemonList } from '@/modules/pokemon/utils/uitl-format-pokemon-list'

const useAddPokemons = async (pokemons: string[]) => {
  const store = usePokemonStore()
  const { pokemonTeam } = storeToRefs(store)

  const provider: Add = axiosAdd

  const { data, isLoading, isError } = await useFetch<string[]>(() =>
    addPokemonTeam(provider, { pokemonTeam: pokemons })
  )

  // ? Insertando la data (cuando ya se obtenga) en el store
  watch(
    () => data.value,
    (newData: string[] | undefined) => {
      if (!newData) return null
      store.setPokemonTeam(newData)
    },
    { immediate: true }
  )

  return {
    // --- Properties
    pokemonTeam,
    isLoading,
    isError
    // error,
  }
}

export { useAddPokemons }
