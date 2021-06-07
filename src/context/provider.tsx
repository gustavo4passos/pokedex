import React from 'react';
import { initialState, reducer } from './reducers';
import * as actions from './actions';

export const PokedexContext = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    ...state,
    getPokemons: (page: Number) => actions.getPokemons(page, dispatch)
  };

  return <PokedexContext.Provider value={value}>
    {children}
  </PokedexContext.Provider>;
};

export default Provider;
