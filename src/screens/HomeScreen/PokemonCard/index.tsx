import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { PokedexContext } from '../../../context/provider';
import { Pokemon } from '../../../types';

import {
  TouchableContainer,
  Thumb,
  InfosContainer,
  Title,
  TypesContainer,
  TypeTag,
  TypeText
} from './styles';

interface IPokemonCardProrps {
  name: string,
  goToDetailsScreen: (name: string) => void
}

const PokemonCard = (props: IPokemonCardProrps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);

  const { getPokemonBasicData, getPokemonSpeciesData, pokemonsByName, loadingPokemons } = React.useContext(PokedexContext);

  useEffect(() => {
    if (pokemonsByName[props.name] === undefined) {
      getPokemonBasicData(props.name);
      getPokemonSpeciesData(props.name);
    } else {
      setPokemon(pokemonsByName[props.name]);
    }

    setLoading(loadingPokemons.findIndex(name => name === props.name) !== -1);
  }, [pokemonsByName[props.name]]);

  return (
    <TouchableContainer pokemonType={pokemon?.types[0].type.name || 'eletric'} onPress={() => props.goToDetailsScreen(props.name)}>
      <Title>{props.name}</Title>
      {
        (loading || pokemonsByName[props.name] === undefined)
          ? <ActivityIndicator color="#00ff00" size="large" />
          : <InfosContainer>
            <Thumb source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id || 1}.png` }} />
            <TypesContainer>
              {
                pokemon?.types.map(type => {
                  return (
                    <TypeTag key={type.type.name} pokemonType={pokemon?.types[0].type.name}>
                      <TypeText>
                        {type.type.name}
                      </TypeText>
                    </TypeTag>
                  );
                })
              }
            </TypesContainer>

          </InfosContainer>
      }
    </TouchableContainer>
  );
};

export default PokemonCard;
