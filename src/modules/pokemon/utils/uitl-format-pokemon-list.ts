import type { PokemonListResult } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'
import { utilExtractIdFromUrl } from './util-extract-id-from-url'

export function utilFormatPokemonList(pokemonListResponse: PokemonListResult[]): PokemonList[] {
  const formattedPokemonList: PokemonList[] = pokemonListResponse.map((pokemon) => ({
    id: utilExtractIdFromUrl(pokemon.url),
    name: pokemon.name,
    url: pokemon.url
  }))

  return formattedPokemonList
}
