import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import SearchInput from './SearchInput';

import { ActivityIndicator, ListRenderItem } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Title,
  ListContainer
} from './styles';

interface IHomeScreenProps {
  navigation: any
}

export interface Pokemon {
  name: string,
  url: string
}

const HomeScreen = (props: IHomeScreenProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getPokemons = async () => {
    const response = await api.get(`https://pokeapi.co/api/v2/pokemon?offset=${20 * page}`);
    setPokemons(pokemons.concat(response.data.results));
  };

  const searchPokemon = (pokemonName: string) => {
    console.log(`Buscou por ${pokemonName}`);
  };

  useEffect(() => {
    setLoading(true);
    getPokemons();
    setLoading(false);
  }, [page]);

  const renderPokemon: ListRenderItem<Pokemon> = ({ item }) => (
    <PokemonCard name={item.name} url={item.url} />
  );

  return (
    <Container>
      <Title>Pokedex</Title>
      <SearchInput searchPokemon={searchPokemon} />
      <ListContainer
        data={pokemons}
        renderItem={renderPokemon}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        onEndReachedThreshold={0.5}
        onEndReached={() => { if (!loading) { setPage(page + 1); } }}
        numColumns={2}
        ListFooterComponent={<ActivityIndicator size="large" color="#00ff00" />}
      />
    </Container>
  );
};

export default HomeScreen;
