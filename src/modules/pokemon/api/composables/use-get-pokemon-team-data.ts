import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import type { Get } from '@/modules/pokemon/types/PokemonProvider'

import { getPokemonDetail } from '@/modules/pokemon/api/services/pokemon-service'
import { get as axiosGet } from '@/modules/pokemon/api/providers/pokemon-axios-provider'
import { usePokemonStore } from '@/modules/pokemon/stores/pokemon.store'
import { useFetch } from '@/modules/core/api/composables/use-fetch'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'
import type { PokemonDetail } from '@/modules/pokemon/types/PokemonDetail'
import { utilFormatPokemonDetail } from '@/modules/pokemon/utils/util-format-pokemon-detail'

// const useGetPokemonTeamData = async (pokemonTeam: string[]) => {
const useGetPokemonTeamData = async () => {
  const store = usePokemonStore()
  const { pokemonTeamData, pokemonTeam } = storeToRefs(store)

  const provider: Get = axiosGet

  const { data, isLoading, isError, refetch } = await useFetch<PokemonDetailResponse[]>(() => {
    const promises = pokemonTeam.value.map((id) => getPokemonDetail(provider, { id }))
    return Promise.all(promises)
  })

  const unwatchPokemonTeam = watch(
    pokemonTeam,
    async () => {
      await refetch()
    },
    { immediate: false }
  )

  // ? Insertando la data (cuando ya se obtenga) en el store
  const unwatchData = watch(
    () => data.value,
    (newTeamData: PokemonDetailResponse[] | undefined) => {
      if (!newTeamData) return null
      const teamDataFormatted: PokemonDetail[] = newTeamData.map((pokemonDetail) =>
        utilFormatPokemonDetail(pokemonDetail)
      )
      store.setPokemonTeamData(teamDataFormatted)
    },
    { immediate: true }
  )

  function cleanEffects() {
    unwatchPokemonTeam()
    unwatchData()
  }

  return {
    // --- Properties
    pokemonTeamData,
    isLoading,
    isError,
    // error,

    // --- Computed
    // totalPokemonTeam: computed(() => pokemonTeam.value?.length),

    // --- Methods
    refetch,
    cleanEffects
  }
}

export { useGetPokemonTeamData }
