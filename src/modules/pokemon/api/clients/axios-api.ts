import axios, { type AxiosInstance } from 'axios'

const axiosClient: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_POKEMON_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

export { axiosClient }
