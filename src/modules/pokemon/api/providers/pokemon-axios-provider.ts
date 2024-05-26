import type { PokemonListResponse } from '@/modules/pokemon/types/PokemonList.response'
import type { PokemonDetailResponse } from '@/modules/pokemon/types/PokemonDetail.response'
import type { Get, GetAll, Add, PokemonListQuery, GetTeam, PokemonTeam } from '@/modules/pokemon/types/PokemonProvider'
import { axiosClient } from '@/modules/pokemon/api/clients/axios-api'

export const getAll: GetAll = async (queries: PokemonListQuery) => {
  const { page } = queries
  const LIMIT_PAGE = 25
  const OFFSET = LIMIT_PAGE * (page - 1)
  const BASE_URL = import.meta.env.VITE_API_POKEMON_URL

  const resp = await axiosClient(`${BASE_URL}/pokemon/?offset=${OFFSET}&limit=${LIMIT_PAGE}`)
  const data: PokemonListResponse = await resp.data

  return data
}

export const get: Get = async (id: string) => {
  const BASE_URL = import.meta.env.VITE_API_POKEMON_URL
  const resp: PokemonDetailResponse = await axiosClient(`${BASE_URL}/pokemon/${id}`)
  return resp
}

export const add: Add = async (payload: { team: string[] }) => {
  const BASE_URL = import.meta.env.VITE_API_DB_URL

  await axiosClient.put(`${BASE_URL}/pokemon/1`, payload)
}

export const getTeam: GetTeam = async () => {
  const BASE_URL = import.meta.env.VITE_API_DB_URL

  const resp = await axiosClient.get(`${BASE_URL}/pokemon/1`)
  const data: PokemonTeam = await resp.data

  return data
}
