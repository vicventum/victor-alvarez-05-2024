import { computed, watch } from 'vue'
import { storeToRefs } from 'pinia'

import type { GetTeam, PokemonTeam } from '@/modules/pokemon/types/PokemonProvider'

import { getPokemonTeam } from '@/modules/pokemon/api/services/pokemon-service'
import { getTeam as axiosGetTeam } from '@/modules/pokemon/api/providers/pokemon-axios-provider'
import { usePokemonStore } from '@/modules/pokemon/stores/pokemon.store'
import { useFetch } from '@/modules/core/api/composables/use-fetch'

const useGetPokemonTeam = async () => {
  const store = usePokemonStore()
  const { pokemonTeam } = storeToRefs(store)

  const provider: GetTeam = axiosGetTeam

  const { data, isLoading, isError, refetch } = await useFetch<PokemonTeam>(() => {
    return getPokemonTeam(provider)
  })

  // ? Insertando la data (cuando ya se obtenga) en el store
  const unwatchData = watch(
    () => data.value,
    (newData: PokemonTeam | undefined) => {
      if (!newData) return null
      store.setPokemonTeam(newData.team)
    },
    { immediate: false, deep: true }
  )

  function cleanEffects() {
    unwatchData()
  }

  return {
    // --- Properties
    pokemonTeam,
    isLoading,
    isError,
    // error,

    // --- Computed
    totalPokemonTeam: computed(() => pokemonTeam.value?.length),

    // --- Methods
    refetch,
    cleanEffects
  }
}

export { useGetPokemonTeam }
