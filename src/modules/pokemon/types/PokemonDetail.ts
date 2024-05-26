
interface PokemonDetail {
  id: string
	name: string
  image?: string
	types: string[]
	stats: object[]
	cries: { latest: string; legacy: string }
	height: number
	weight: number
	// description: string
	// evolutionaryChain: object
}

export type { PokemonDetail }
