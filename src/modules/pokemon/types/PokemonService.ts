import type { Add, Get, GetAll, PokemonListQuery } from '@/modules/pokemon/types/PokemonProvider'
import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from './PokemonDetail.response'

type GetPokemonList = (provider: GetAll, options: PokemonListQuery) => Promise<PokemonListResponse>

type GetPokemonDetail = (provider: Get, options: { id: string }) => Promise<PokemonDetailResponse>

type AddPokemonList = (provider: Add, payload: { pokemonTeam: string[] }) => Promise<void>

export type { GetPokemonList, GetPokemonDetail, AddPokemonList }
