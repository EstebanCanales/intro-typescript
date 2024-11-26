export const pokemosIds = [1, 2, 3, 4, 5, 6, 7];

interface Pokemon {
	id: number;
	name: string;
	age: number;
}

export const charmander: Pokemon = {
	id: 1,
	name: "Charmander",
	age: 3,
};

export const bulbasaur: Pokemon = {
	id: 2,
	name: "Bulbasaur",
	age: 5,
};

export const pokemons: Pokemon[] = []; // Arreglo de tipo pokemons

pokemons.push(charmander);
pokemons.push(bulbasaur);

console.log(pokemons);
