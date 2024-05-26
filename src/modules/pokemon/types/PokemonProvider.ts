import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'

type PokemonListQuery = {
  page: number
}

type GetAll = (queries: PokemonListQuery) => Promise<PokemonListResponse>

type Get = (id: string) => Promise<PokemonDetailResponse>

type Add = (payload: { pokemonTeam: string[] }) => Promise<void>

export type { PokemonListQuery, GetAll, Get, Add }
