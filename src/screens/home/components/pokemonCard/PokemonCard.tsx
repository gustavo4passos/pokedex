import React, { useEffect, useState } from 'react';

import api from '../../../../services/api';

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

  const getInfos = async () => {
    const response = await api.get(String(props.url));
    setPokemon({
      id: response.data.id,
      types: response.data.types
    });
  };

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <Container pokemonType={pokemon?.types[0].type.name || 'eletric'}>
      <Title>{props.name}</Title>

      <InfosContainer>
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
    </Container>
  );
};

export default PokemonCard;
