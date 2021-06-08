export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonByName {
  [name: string]: Pokemon;
}

export interface Pokemon {
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}
