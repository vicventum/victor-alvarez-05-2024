import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'
import type { Get, GetAll, PokemonListQuery } from '@/modules/pokemon/types/PokemonProvider'
import type {
  PutPokemonTeam,
  GetPokemonDetail,
  GetPokemonList,
  GetPokemonTeam
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

const putPokemonTeam: PutPokemonTeam = async (provider, payload) => {
  const putPokemonTeamResponse = await provider(payload)

  return putPokemonTeamResponse
}

const getPokemonTeam: GetPokemonTeam = async (provider) => {
  const pokemonTeamResponse = await provider()

  // TODO: Validaciones con Zod...
  // ...

  return pokemonTeamResponse
}

export { getPokemonList, getPokemonDetail, putPokemonTeam, getPokemonTeam }
