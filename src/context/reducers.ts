import { actions } from './actions';
interface IRootState {
    pokemons: Object[],
    page: Number,
    loadingPokemons: boolean
}

export const initialState: IRootState = {
  pokemons: [],
  page: 0,
  loadingPokemons: false
};

export const reducer = (state: IRootState, action: any): Promise<IRootState> => {
  switch (action.type) {
  case actions.GET_POKEMONS_REQUEST: return { ...state, loadingPokemons: true };
  case actions.GET_POKEMONS_SUCCESS: {
    console.log(action.value);
    return { ...state, pokemons: state.pokemons.concat(Object.values(action.value)), loadingPokemons: false };
  }
  case actions.SET_PAGE: return { ...state, page: action.value.page };
  default: {
    console.error('Unknown action:', action);
    return state;
  }
  }
};
