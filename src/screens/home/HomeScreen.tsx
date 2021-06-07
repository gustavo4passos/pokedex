import React, { useEffect, useState } from 'react';
import PokemonCard from './components/pokemonCard/PokemonCard';

import { ActivityIndicator, ListRenderItem } from 'react-native';
import { PokedexContext } from '../../context/provider';

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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [pokemons, setPokemons] = useState([]);

  const { getPokemons, pokemons } = React.useContext(PokedexContext);

  useEffect(() => {
    const update = async () => {
      setLoading(true);
      getPokemons();
      setLoading(false);
      console.log('pkemons', pokemons);
    };

    update();
  }, [page]);

  const renderPokemon: ListRenderItem<Pokemon> = ({ item }) => (
    <PokemonCard name={item.name} url={item.url} />
  );

  return (
    <Container>
      <Title>Pokedex</Title>
      <ListContainer
        data={Object.values(pokemons)}
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
