import { actions } from './actions';

import { PokemonListItem, PokemonByName } from '../types';
export interface IRootState {
  allPokemonsList: PokemonListItem[];
  pokemonList: PokemonListItem[];
  pokemonsByName: PokemonByName;

  page: number;
  filter: string;

  loadingAllPokemonsList: boolean;
  loadingPokemonList: boolean;
  loadingPokemonSpecies: string[];
  loadingPokemons: string[];
}

export const initialState: IRootState = {
  allPokemonsList: [],
  pokemonList: [],
  pokemonsByName: {},

  page: 0,
  filter: '',

  loadingAllPokemonsList: false,
  loadingPokemonList: false,
  loadingPokemonSpecies: [],
  loadingPokemons: []
};

export const reducer = (state: IRootState, action: any): IRootState => {
  switch (action.type) {
  case actions.GET_POKEMONS: {
    const { pokemonList, allPokemonsList, page, filter } = state;

    const updatedPokemonList = pokemonList.concat(
      allPokemonsList.filter((pokemon) =>
        pokemon.name.includes(filter)
      ).slice(page * 20, (page + 1) * 20)
    );

    return {
      ...state,
      pokemonList: updatedPokemonList,
      loadingPokemonList: false
    };
  }
  case actions.FILTER_POKEMONS: {
    const { allPokemonsList } = state;
    const filteredPokemons = allPokemonsList.filter((pokemon) =>
      pokemon.name.includes(action.value)
    );
    console.log(action);
    console.log(filteredPokemons);
    return { ...state, pokemonList: filteredPokemons };
  }
  case actions.SET_FILTER:
    return { ...state, filter: action.value };
  case actions.SET_PAGE:
    return { ...state, page: action.value.page };
  case actions.GET_ALL_POKEMONS_REQUEST:
    return { ...state, loadingAllPokemonsList: true };
  case actions.GET_ALL_POKEMONS_SUCCESS:
    return {
      ...state,
      allPokemonsList: action.value,
      loadingAllPokemonsList: false
    };
  case actions.GET_POKEMON_BASIC_DATA_REQUEST:
    return {
      ...state,
      loadingPokemons: [...state.loadingPokemons, action.value.name]
    };
  case actions.GET_POKEMON_BASIC_DATA_SUCESS:
    return {
      ...state,
      pokemonsByName: { ...state.pokemonsByName, [action.value.name]: action.value },
      loadingPokemons: state.loadingPokemons.filter(
        (x) => x !== action.value.name
      )
    };
  case actions.GET_POKEMON_SPECIES_REQUEST:
    return {
      ...state,
      loadingPokemonSpecies: [
        ...state.loadingPokemonSpecies,
        action.value.name
      ]
    };
  case actions.GET_POKEMON_SPECIES_SUCCESS:
    return {
      ...state,
      pokemonSpecies: {
        ...state.pokemonSpecies,
        [action.value.name]: action.value
      },
      loadingPokemonSpecies: state.loadingPokemonSpecies.filter(
        (x) => x !== action.value.name
      )
    };
  default: {
    console.error('Unknown action:', action);
    return state;
  }
  }
};
