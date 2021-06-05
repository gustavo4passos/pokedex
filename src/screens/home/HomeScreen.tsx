import React, { useEffect, useState } from 'react';
import PokemonCard from './components/pokemonCard/PokemonCard';

import { ScrollView } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Title,
  ListContainer
} from './styles';

interface IHomeScreenProps {
  navigation: any
}

interface Pokemon {
  name: String,
  url: String
}

const HomeScreen = (props: IHomeScreenProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    const response = await api.get('https://pokeapi.co/api/v2/pokemon');

    setPokemons(response.data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <ScrollView>
      <Container>
        <Title>Pokedex</Title>
        <ListContainer>
          {pokemons.map(pokemon =>
            <PokemonCard key={String(pokemon.name)} name={pokemon.name} url={pokemon.url}/>

          )}
        </ListContainer>
      </Container>
    </ScrollView>
  );
};

export default HomeScreen;
