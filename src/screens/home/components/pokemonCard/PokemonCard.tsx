import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { PokedexContext } from '../../../../context/provider';

import {
  Container,
  Thumb,
  InfosContainer,
  Title,
  TypesContainer,
  TypeTag,
  TypeText
} from './styles';

interface IPokemonCardProrps {
  name: String,
  url: String
}

interface Pokemon {
  id: number,
  types: {
    slot: number,
    type: {
      name: string,
      url: string
    }
  }[]
}

const PokemonCard = (props: IPokemonCardProrps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);
  const { getPokemonBasicData, pokemons, loadingPokemons } = React.useContext(PokedexContext);

  useEffect(() => {
    if (pokemons[props.name] === undefined) {
      getPokemonBasicData(props.name);
    } else {
      setPokemon(pokemons[props.name]);
    }

    setLoading(loadingPokemons.findIndex(name => name === props.name) !== -1);
  }, [pokemons[props.name]]);

  return (
    <Container pokemonType={pokemon?.types[0].type.name || 'eletric'}>
      <Title>{props.name}</Title>
      {
        (loading || pokemons[props.name] === undefined)
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
    </Container>
  );
};

export default PokemonCard;
