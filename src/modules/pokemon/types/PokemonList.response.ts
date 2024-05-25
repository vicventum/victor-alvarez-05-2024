type PokemonListResponse = {
	count:    number;
	next:     string;
	previous: string;
	results:  PokemonListResult[];
}

type PokemonListResult = {
	name: string;
	url:  string;
}

export type { PokemonListResponse, PokemonListResult }