import {
	Move,
	PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

import {
	HttpAdapter,
	PokeApiAxiosAdapter,
	PokeApiFetchAdapter,
} from "../api/pokeApi.adapter";

export class Pokemon {
	constructor(
		public readonly id: number,
		public name: string,
		private readonly http: HttpAdapter,
	) {}

	async getMoves(): Promise<Move[]> {
		const data = await this.http.get<PokeapiResponse>(
			`https://pokeapi.co/api/v2/pokemon/${this.id}`,
		);

		console.log(data.moves);

		return data.moves;
	}
}

const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApiAxios);
export const bulbarsour = new Pokemon(6, "Bulbarsour", pokeApiAxios);
export const pikachu = new Pokemon(5, "Pikachu", pokeApiFetch);

charmander.getMoves();
pikachu.getMoves();
bulbarsour.getMoves();
