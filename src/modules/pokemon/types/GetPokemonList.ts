import type { GetAll, PokemonListQuery } from '@/modules/pokemon/types/PokemonProvider'
import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'

type GetPokemonList = (provider: GetAll, options: PokemonListQuery) => Promise<PokemonListResponse>

export type { GetPokemonList }
