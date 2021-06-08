import api from '../services/api';

export const actions = {
  GET_POKEMONS_REQUEST: 'GET_POKEMONS_REQUEST',
  GET_POKEMONS_SUCCESS: 'GET_POKEMONS_SUCCESS',
  GET_POKEMON_BASIC_DATA_REQUEST: 'GET_POKEMON_BASIC_DATA_REQUEST',
  GET_POKEMON_BASIC_DATA_SUCESS: 'GET_POKEMON_BASIC_DATA_SUCESS',
  GET_POKEMON_SPECIES_REQUEST: 'GET_POKEMON_SPECIES_REQUEST',
  GET_POKEMON_SPECIES_SUCCESS: 'GET_POKEMON_SPECIES_SUCESS',
  SET_PAGE: 'SET_PAGE'
};

const createAction = (actionType: String, data: Object = {}) => {
  return { type: actionType, value: data };
};

export const getPokemons = async (page: number, dispatch: (action) => void) => {
  dispatch(createAction(actions.GET_POKEMONS_REQUEST));
  const response = await api.get(`https://pokeapi.co/api/v2/pokemon?offset=${20 * page}`);
  return dispatch(createAction(actions.GET_POKEMONS_SUCCESS, response.data.results));
};

export const setPage = async (page: number, dispatch: (action: any) => void) => {
  dispatch(createAction(actions.SET_PAGE, { page }));
};

export const getPokemonBasicData = async (name: string, dispatch: (action: any) => void) => {
  dispatch(createAction(actions.GET_POKEMON_BASIC_DATA_REQUEST, { name }));
  const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return dispatch(createAction(actions.GET_POKEMON_BASIC_DATA_SUCESS, { name, ...response.data }));
};

export const getPokemonSpeciesData = async (name: string, dispatch: (action: any) => void) => {
  dispatch(createAction(actions.GET_POKEMON_SPECIES_REQUEST, { name }));
  const response = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  return dispatch(createAction(actions.GET_POKEMON_SPECIES_SUCCESS, { name, ...response.data }));
};
