import { actions } from './actions';
interface IRootState {
    pokemonList: object[],
    pokemons: object,
    page: number,
    loadingPokemonList: boolean,
    loadingPokemons: string[]
}

export const initialState: IRootState = {
  pokemonList: [],
  page: 0,
  pokemons: {},
  loadingPokemonList: false,
  loadingPokemons: []
};

export const reducer = (state: IRootState, action: any): Promise<IRootState> => {
  switch (action.type) {
  case actions.GET_POKEMONS_REQUEST: return { ...state, loadingPokemonList: true };
  case actions.GET_POKEMONS_SUCCESS: {
    return { ...state, pokemonList: state.pokemonList.concat(Object.values(action.value)), loadingPokemonList: false };
  }
  case actions.SET_PAGE: return { ...state, page: action.value.page };
  case actions.GET_POKEMON_BASIC_DATA_REQUEST: return { ...state, loadingPokemons: ([...state.loadingPokemons, action.value.name]) };
  case actions.GET_POKEMON_BASIC_DATA_SUCESS: {
    console.log(state, action);
    return { ...state, pokemons: { ...state.pokemons, [action.value.name]: action.value } };
  }
  default: {
    console.error('Unknown action:', action);
    return state;
  }
  }
};
