import type { PokemonListResult } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'
import { utilExtractIdFromUrl } from './util-extract-id-from-url'

export function utilFormatPokemonList(pokemonListResponse: PokemonListResult[]): PokemonList[] {
  const URL_POKEMON_IMAGE =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/'

  const formattedPokemonList: PokemonList[] = pokemonListResponse.map((pokemon) => ({
    id: utilExtractIdFromUrl(pokemon.url),
    name: pokemon.name,
    url: pokemon.url,
    image: `${URL_POKEMON_IMAGE}${utilExtractIdFromUrl(pokemon.url)}.gif`
  }))

  return formattedPokemonList
}
