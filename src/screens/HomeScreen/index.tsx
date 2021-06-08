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

  const searchPokemon = (pokemonName: string) => {
    setFilter(pokemonName);
  };

  useEffect(() => {
    const update = () => {
      getPokemons();
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
        // ListFooterComponent={<ActivityIndicator size="large" color="#00ff00" />}
      />
    </Container>
  );
};

export default HomeScreen;
