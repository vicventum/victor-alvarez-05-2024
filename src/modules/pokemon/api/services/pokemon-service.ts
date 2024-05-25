import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'
import type { Get, GetAll, PokemonListQuery } from '@/modules/pokemon/types/PokemonProvider'
import type { GetPokemonList } from '@/modules/pokemon/types/GetPokemonList'

const getPokemonList: GetPokemonList = async (provider, options) => {
  const { page = 1 } = options

  const pokemonListResponse: PokemonListResponse = await provider({ page })

  // TODO: Validaciones con Zod...
  // ...

  return pokemonListResponse
}

async function getPokemonDetail(
  provider: Get,
  { id }: { id: string }
): Promise<PokemonDetailResponse> {
  const pokemonDetailResponse = await provider(id)

  // TODO: Validaciones con Zod...
  // ...

  return pokemonDetailResponse
}

export { getPokemonList, getPokemonDetail }
