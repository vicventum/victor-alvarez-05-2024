import type { PokemonListResult } from '@/modules/pokemon/types/PokemonList.response'

interface PokemonList extends PokemonListResult {
  id: string
}

export type { PokemonList }
