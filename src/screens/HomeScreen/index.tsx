import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItem } from 'react-native';
import { PokedexContext } from '../../context/provider';
import { PokemonListItem } from '../../types';
import PokemonCard from './PokemonCard';
import SearchInput from './SearchInput';

import {
  Container,
  Title,
  ListContainer
} from './styles';

interface IHomeScreenProps {
  navigation: any
}

const HomeScreen = (props: IHomeScreenProps) => {
  const { getPokemons, pokemonList, loadingPokemonList, getAllPokemons, setPage, page, filter, allPokemonsList, setFilter } = React.useContext(PokedexContext);
  // const [triggerRender, setTriggerRender] = useState(false);

  const searchPokemon = (pokemonName: string) => {
    console.log(`Buscou por ${pokemonName}`);
    setFilter(pokemonName);
  };

  useEffect(() => {
    console.log(page);
    const update = () => {
      console.log(page + 'desgraça');
      getPokemons();
      console.log('GETOU');
      // setTriggerRender(!triggerRender);
    };

    if (allPokemonsList.length) {
      update();
    }
  }, [page, allPokemonsList, filter]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const goToDetailsScreen = (pokemonName: string) => props.navigation.push('Details', { pokemonName });

  const renderPokemon: ListRenderItem<PokemonListItem> = ({ item }) => (
    <PokemonCard name={item.name} goToDetailsScreen={goToDetailsScreen} />
  );

  return (
    <Container>
      <Title>Pokedex</Title>
      <SearchInput searchPokemon={searchPokemon} />
      <ListContainer
        data={pokemonList}
        renderItem={renderPokemon}
        // extraData={triggerRender}
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
