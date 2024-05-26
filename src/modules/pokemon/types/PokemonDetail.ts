
interface PokemonDetail {
  id: string
	name: string
  image?: string
	types: string[]
	stats: object[]
	cries: object
	height: number
	weight: number
	// description: string
	// evolutionaryChain: object
}

export type { PokemonDetail }
