import api from '../services/api';

export const actions = {
  GET_POKEMONS: 'GET_POKEMONS',
  SET_FILTER: 'SET_FILTER',
  FILTER_POKEMONS: 'FILTER_POKEMONS',
  GET_ALL_POKEMONS_REQUEST: 'GET_ALL_POKEMONS_REQUEST',
  GET_ALL_POKEMONS_SUCCESS: 'GET_ALL_POKEMONS_SUCCESS',
  GET_POKEMON_BASIC_DATA_REQUEST: 'GET_POKEMON_BASIC_DATA_REQUEST',
  GET_POKEMON_BASIC_DATA_SUCESS: 'GET_POKEMON_BASIC_DATA_SUCESS',
  GET_POKEMON_SPECIES_REQUEST: 'GET_POKEMON_SPECIES_REQUEST',
  GET_POKEMON_SPECIES_SUCCESS: 'GET_POKEMON_SPECIES_SUCESS',
  SET_PAGE: 'SET_PAGE'
};

const createAction = (actionType: String, data: Object = {}) => {
  return { type: actionType, value: data };
};

export const getPokemons = (dispatch: (action: any) => void) => {
  dispatch(createAction(actions.GET_POKEMONS));
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

export const getAllPokemons = async (dispatch: (action: any) => void) => {
  dispatch(createAction(actions.GET_ALL_POKEMONS_REQUEST));
  const response = await api.get(`https://pokeapi.co/api/v2/pokemon?limit=${1118}`);
  dispatch(createAction(actions.GET_ALL_POKEMONS_SUCCESS, response.data.results));
};

export const filterPokemons = async (query: string, dispatch: (action: any) => void) => {
  dispatch(createAction(actions.FILTER_POKEMONS, query));
};

export const setFilter = async (query: string, dispatch: (action: any) => void) => {
  dispatch(createAction(actions.SET_FILTER, query));
};
