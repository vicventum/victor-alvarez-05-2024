import type {
  Put,
  Get,
  GetAll,
  GetTeam,
  PokemonListQuery,
  PokemonTeam
} from '@/modules/pokemon/types/PokemonProvider'
import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from './PokemonDetail.response'

type GetPokemonList = (provider: GetAll, options: PokemonListQuery) => Promise<PokemonListResponse>

type GetPokemonDetail = (provider: Get, options: { id: string }) => Promise<PokemonDetailResponse>

type PutPokemonTeam = (provider: Put, payload: { team: string[] }) => Promise<void>

type GetPokemonTeam = (provider: GetTeam) => Promise<PokemonTeam>

export type { GetPokemonList, GetPokemonDetail, PutPokemonTeam, GetPokemonTeam }
