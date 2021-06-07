import React from 'react';
import api from '../services/api';

export const actions = {
  GET_POKEMONS_REQUEST: 'GET_POKEMONS_REQUEST',
  GET_POKEMONS_SUCCESS: 'GET_POKEMONS_SUCCESS',
  SET_PAGE: 'SET_PAGE'
};

const createAction = (actionType: String, data: Object = {}) => {
  return { type: actionType, value: data };
};

export const getPokemons = async (page: Number, dispatch: (action) => void) => {
  dispatch(createAction(actions.GET_POKEMONS_REQUEST));

  const response = await api.get(`https://pokeapi.co/api/v2/pokemon?offset=${20 * page}`);
  return dispatch(createAction(actions.GET_POKEMONS_SUCCESS, response.data.results));
};

export const setPage = async (page: Number, dispatch: (action) => void) => {
  dispatch(createAction(actions.SET_PAGE, { page }));
};
