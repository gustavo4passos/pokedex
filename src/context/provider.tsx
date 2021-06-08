import React, { Reducer } from 'react';
import { initialState, reducer, IRootState } from './reducers';
import * as actions from './actions';
interface PokedexData extends IRootState {
  getAllPokemons: () => Promise<void>,
  getPokemons: () => void
  getPokemonBasicData: (name: string) => Promise<void>
  getPokemonSpeciesData: (name: string) => Promise<void>
  setPage: (page: number) => void,
  setFilter: (filter: string) => void
}

export const PokedexContext = React.createContext({} as PokedexData);

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer<Reducer<IRootState, any>>(reducer, initialState);

  const value = {
    ...state,
    getPokemons: () => actions.getPokemons(dispatch),
    setPage: (page: number) => actions.setPage(page, dispatch),
    getPokemonBasicData: (name: string) => actions.getPokemonBasicData(name, dispatch),
    getPokemonSpeciesData: (name: string) => actions.getPokemonSpeciesData(name, dispatch),
    getAllPokemons: () => actions.getAllPokemons(dispatch),
    filterPokemons: (query: string) => actions.filterPokemons(query, dispatch),
    setFilter: (query: string) => actions.setFilter(query, dispatch)
  };

  return <PokedexContext.Provider value={value}>
    {children}
  </PokedexContext.Provider>;
};

export default Provider;
