import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'
import type {
  Get,
  GetAll,
  Put,
  PokemonListQuery,
  GetTeam,
  PokemonTeam
} from '@/modules/pokemon/types/PokemonProvider'
import { BASE_URL_DB, BASE_URL_POKEMON, LIMIT_PAGE } from '@/modules/core/constants'
import { axiosClient } from '@/modules/pokemon/api/clients/axios-api'

export const getAll: GetAll = async (queries: PokemonListQuery) => {
  const { page } = queries
  const OFFSET = LIMIT_PAGE * (page - 1)

  const resp = await axiosClient(`${BASE_URL_POKEMON}/pokemon/?offset=${OFFSET}&limit=${LIMIT_PAGE}`)
  const data: PokemonListResponse = await resp.data

  return data
}

export const get: Get = async (id: string) => {
  const resp = await axiosClient(`${BASE_URL_POKEMON}/pokemon/${id}`)
  const data: PokemonDetailResponse = resp.data
  return data
}

export const put: Put = async (payload: { team: string[] }) => {

  await axiosClient.put(`${BASE_URL_DB}/pokemon/1`, payload)
}

export const getTeam: GetTeam = async () => {

  const resp = await axiosClient.get(`${BASE_URL_DB}/pokemon/1`)
  const data: PokemonTeam = await resp.data

  return data
}
