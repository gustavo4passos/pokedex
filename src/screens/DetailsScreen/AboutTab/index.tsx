import React from 'react';
import { View, Text } from 'react-native';

import {
  ContainerTab,
  DivTab,
  TextBoldTab,
  TextRegularTab,
  HabilitiesText,
  HabilitiesDiv
} from './styles';

// import { Container } from "./styles"

const AboutTab = (props: any) => (
  <ContainerTab style={{ flex: 1 }}>
    <DivTab>
      <TextBoldTab>Espécie</TextBoldTab>
      <TextRegularTab>{props.pokemonSpecies?.genera[7].genus}</TextRegularTab>
    </DivTab>
    <DivTab>
      <TextBoldTab>Peso</TextBoldTab>
      <TextRegularTab>{props.pokemon?.weight / 10} kilogramas</TextRegularTab>
    </DivTab>
    <DivTab>
      <TextBoldTab>Altura</TextBoldTab>
      <TextRegularTab>{props.pokemon?.height / 10} metros</TextRegularTab>
    </DivTab>
    <HabilitiesDiv>
      <HabilitiesText>Habilidades</HabilitiesText>
      {props.pokemon?.abilities.map((item: any) => (
        // eslint-disable-next-line react/jsx-key
        <TextRegularTab key={item.ability.name}> {item.ability.name} </TextRegularTab>
      ))}
    </HabilitiesDiv>
  </ContainerTab>
);

export default AboutTab;
