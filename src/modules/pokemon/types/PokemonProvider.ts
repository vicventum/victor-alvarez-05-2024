import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'

type PokemonListQuery = {
  page: number
}
type PokemonTeam = {
  id: string
  team: string[]
}

type GetAll = (queries: PokemonListQuery) => Promise<PokemonListResponse>

type Get = (id: string) => Promise<PokemonDetailResponse>

type Put = (payload: { team: string[] }) => Promise<void>

type GetTeam = () => Promise<PokemonTeam>

export type { GetAll, Get, Put, GetTeam, PokemonListQuery, PokemonTeam }
