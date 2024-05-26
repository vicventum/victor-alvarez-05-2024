import type { PokemonList } from '@/modules/pokemon/types/PokemonList'
import type { PokemonDetailResponse } from '../types/PokemonDetail.response'
import type { PokemonDetail } from '../types/PokemonDetail'

export function utilFormatPokemonDetail(
  pokemonDetailResponse: PokemonDetailResponse
): PokemonDetail {

  const formattedPokemonDetail: PokemonDetail = {
    id: pokemonDetailResponse.id.toString(),
    name: pokemonDetailResponse.name,
    image: pokemonDetailResponse.sprites.other?.showdown?.front_default,
    types: pokemonDetailResponse.types.map((type) => type.type.name),
    stats: pokemonDetailResponse.stats,
    cries: pokemonDetailResponse.cries,
    height: pokemonDetailResponse.height,
    weight: pokemonDetailResponse.weight
  }

  return formattedPokemonDetail
}
