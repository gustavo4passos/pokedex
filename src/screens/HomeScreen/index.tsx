import React, { useEffect } from 'react';
import { ActivityIndicator, ListRenderItem } from 'react-native';
import { PokedexContext } from '../../context/provider';
import PokemonCard from './PokemonCard';

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
  const { getPokemons, pokemonList, loadingPokemonList, setPage, page } = React.useContext(PokedexContext);

  useEffect(() => {
    const update = async () => {
      await getPokemons(page);
    };

    update();
  }, [page]);

  const renderPokemon: ListRenderItem<Pokemon> = ({ item }) => (
    <PokemonCard name={item.name}/>
  );

  return (
    <Container>
      <Title>Pokedex</Title>
      <ListContainer
        data={Object.values(pokemonList)}
        renderItem={renderPokemon}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        onEndReachedThreshold={0.5}
        onEndReached={() => { if (!loadingPokemonList) { setPage(page + 1); } }}
        numColumns={2}
        ListFooterComponent={<ActivityIndicator size="large" color="#00ff00" />}
      />
    </Container>
  );
};

export default HomeScreen;
