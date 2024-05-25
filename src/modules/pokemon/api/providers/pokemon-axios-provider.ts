import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'
import type { Get, GetAll, PokemonListQuery } from '@/modules/pokemon/types/PokemonProvider'
import { axiosClient } from '@/modules/pokemon/api/clients/axios-api'

export const getAll: GetAll = async (queries: PokemonListQuery) => {
  const { page } = queries
  const LIMIT_PAGE = 25
  const OFFSET = LIMIT_PAGE * (page - 1)
  const resp = await axiosClient(`/pokemon/?offset=${OFFSET}&limit=${LIMIT_PAGE}`)
  const data: PokemonListResponse = await resp.data

  return data
}

export const get: Get = async (id: string) => {
  const resp: PokemonDetailResponse = await axiosClient(`/pokemon/${id}`)
  return resp
}
