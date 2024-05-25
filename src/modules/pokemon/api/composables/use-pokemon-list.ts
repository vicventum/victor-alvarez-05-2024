import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import type { Get, GetAll, PokemonListQuery } from '@/modules/pokemon/types/PokemonProvider'
import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { GetPokemonList } from '@/modules/pokemon/types/GetPokemonList'
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'

import { getPokemonList } from '@/modules/pokemon/api/services/pokemon-service'
import { getAll as axiosGetAll } from '@/modules/pokemon/api/providers/pokemon-axios-provider'
import { usePokemonStore } from '@/modules/pokemon/stores/pokemon.store'
import { useFetch } from '@/modules/core/api/composables/use-fetch'
import { utilFormatPokemonList } from '@/modules/pokemon/utils/uitl-format-pokemon-list'

const usePokemonList = async () => {
  const store = usePokemonStore()
  const { pokemonList, currentPage, isFinalPage } = storeToRefs(store)

  const provider: GetAll = axiosGetAll

  const { data, isLoading, isError } = await useFetch<PokemonListResponse>(
    () =>
      getPokemonList(provider, {
        page: currentPage.value
      })
    // {
    //   watch: [currentPage, dataFilter],
    //   lazy: true
    // }
  )

  // ? Insertando la data (cuando ya se obtenga) en el store
  watch(
    () => data.value,
    (newPokemonListResponse: PokemonListResponse | undefined) => {
      if (!newPokemonListResponse) return null

      const pokemonListFormatted: PokemonList[] = utilFormatPokemonList(
        newPokemonListResponse.results
      )
      store.setPokemonList(pokemonListFormatted)
      store.setFinalPage(newPokemonListResponse.next)
    },
    { immediate: true }
  )

  return {
    // --- Properties
    // pokemonList: computed(() => [pokemonList.value[0], pokemonList.value[1]]),
    pokemonList,
    currentPage,
    isFinalPage,
    isLoading,
    isError,
    // error,

    // --- Computed
    // isError: computed(() => !!error.value),

    // --- Methods
    getPage(page: number) {
      store.setPage(page)
    }
  }
}

export { usePokemonList }
