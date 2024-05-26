import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'
import type { Get, GetAll, PokemonListQuery } from '@/modules/pokemon/types/PokemonProvider'
import type {
  AddPokemonList,
  GetPokemonDetail,
  GetPokemonList
} from '@/modules/pokemon/types/PokemonService'

const getPokemonList: GetPokemonList = async (provider, options) => {
  const { page = 1 } = options

  const pokemonListResponse: PokemonListResponse = await provider({ page })

  // TODO: Validaciones con Zod...
  // ...

  return pokemonListResponse
}

const getPokemonDetail: GetPokemonDetail = async (provider, { id }) => {
  const pokemonDetailResponse = await provider(id)

  // TODO: Validaciones con Zod...
  // ...

  return pokemonDetailResponse
}

const addPokemonTeam: AddPokemonList = async (provider, payload) => {
  const addPokemonTeamResponse = await provider(payload)

  return addPokemonTeamResponse
}

export { getPokemonList, getPokemonDetail, addPokemonTeam }
