import { computed, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

import type { GetAll } from '@/modules/pokemon/types/PokemonProvider'
import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'

import { LIMIT_PAGE } from '@/modules/core/constants'
import { getPokemonList } from '@/modules/pokemon/api/services/pokemon-service'
import { getAll as axiosGetAll } from '@/modules/pokemon/api/providers/pokemon-axios-provider'
import { usePokemonStore } from '@/modules/pokemon/stores/pokemon.store'
import { useFetch } from '@/modules/core/api/composables/use-fetch'
import { utilFormatPokemonList } from '@/modules/pokemon/utils/uitl-format-pokemon-list'

const usePokemonList = async () => {
  const store = usePokemonStore()
  const { pokemonList, currentPage, isFinalPage } = storeToRefs(store)

  const isValidRequest = computed(
    () => pokemonList.value.length + LIMIT_PAGE === currentPage.value * LIMIT_PAGE 
  )
  const provider: GetAll = axiosGetAll

  const { data, isLoading, isError, refetch } = await useFetch<PokemonListResponse>(() => {
    if (!isValidRequest.value) return null
    return getPokemonList(provider, {
      page: currentPage.value
    })
  })

  const unwatchCurrentPage = watch(
    () => currentPage.value,
    async () => {
      await refetch()
    },
    { immediate: false }
  )

  // ? Insertando la data (cuando ya se obtenga) en el store
  const unwatchData = watch(
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

  function cleanEffects() {
    unwatchCurrentPage()
    unwatchData()
  }
  // onUnmounted(() => {
  //   cleanEffects()
  // })

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
    },
    cleanEffects
  }
}

export { usePokemonList }
