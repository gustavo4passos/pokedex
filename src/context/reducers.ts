import { actions } from './actions';
interface IRootState {
    pokemons: any
}

export const initialState: IRootState = {
  pokemons: { },
  page: 1
};

const getPokemons = (state, action) => {
  return { ...state, pokemons: { ...(state.pokemons), ...action.value } };
};

export const reducer = (state: IRootState, action): Promise<IRootState> => {
  switch (action.type) {
  case actions.GET_POKEMONS_SUCCESS: {
    return getPokemons(state, action);
  }
  default: {
    return state;
  }
  }
};
