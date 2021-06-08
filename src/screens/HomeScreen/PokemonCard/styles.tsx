import styled from 'styled-components/native';

interface ContainerProps {
  readonly pokemonType: String
}

export const Container = styled.View<ContainerProps>`
  flex-basis: 46%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 8px;
  margin: 2%;

  background-color: ${
  props => {
    switch (props.pokemonType) {
    case 'electric':
      return '#FFDD36';
    case 'dragon':
      return '#37A6FF';
    case 'fire':
      return '#FF9238';
    case 'grass':
      return '#37FF53';
    case 'rock':
      return '#C8B686';
    case 'ice':
      return '#4CD1C0';
    case 'normal':
      return '#919AA2';
    case 'poison':
      return '#B567Ce';
    case 'water':
      return '#3692DC';
    case 'bug':
      return '#83C300';
    case 'steel':
      return '#5A8EA2';
    case 'fighting':
      return '#E0306A';
    case 'ghost':
      return '#4C6AB2';
    case 'flying':
      return '#89AAE3';
    case 'dark':
      return '#5B5466';
    case 'fairy':
      return '#FB89EB';
    case 'psychic':
      return '#FF6675';
    case 'ground':
      return '#E87236';
    default:
      return 'grey';
    }
  }
}
`;

export const TouchableContainer = styled.TouchableOpacity<ContainerProps>`
  flex-basis: 46%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 8px;
  margin: 2%;

  background-color: ${
  props => {
    switch (props.pokemonType) {
    case 'electric':
      return '#FFDD36';
    case 'dragon':
      return '#37A6FF';
    case 'fire':
      return '#FF9238';
    case 'grass':
      return '#37FF53';
    case 'rock':
      return '#C8B686';
    case 'ice':
      return '#4CD1C0';
    case 'normal':
      return '#919AA2';
    case 'poison':
      return '#B567Ce';
    case 'water':
      return '#3692DC';
    case 'bug':
      return '#83C300';
    case 'steel':
      return '#5A8EA2';
    case 'fighting':
      return '#E0306A';
    case 'ghost':
      return '#4C6AB2';
    case 'flying':
      return '#89AAE3';
    case 'dark':
      return '#5B5466';
    case 'fairy':
      return '#FB89EB';
    case 'psychic':
      return '#FF6675';
    case 'ground':
      return '#E87236';
    default:
      return 'grey';
    }
  }
}
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Thumb = styled.Image`
  width: 60px;
  height: 60px;
`;

export const InfosContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const TypesContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TypeTag = styled.View<ContainerProps>`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 20px;
  padding: 8px;
  border-radius: 16px;
  color: white;
  margin: 4px;

  background-color: ${
  props => {
    switch (props.pokemonType) {
    case 'electric':
      return '#E0BB00';
    case 'dragon':
      return '#007CE0';
    case 'fire':
      return '#E16600';
    case 'grass':
      return '#00E020';
    case 'rock':
      return '#A6966C';
    case 'ice':
      return '#00BEA6';
    case 'normal':
      return '#727B83';
    case 'poison':
      return '#9355A7';
    case 'water':
      return '#2C78B5';
    case 'bug':
      return '#5E8A04';
    case 'steel':
      return '#446B7A';
    case 'fighting':
      return '#AC2753';
    case 'ghost':
      return '#395088';
    case 'flying':
      return '#6B86B4';
    case 'dark':
      return '#494452';
    case 'fairy':
      return '#CD72C0';
    case 'psychic':
      return '#D35763';
    case 'ground':
      return '#B2592B';
    default:
      return 'grey';
    }
  }
}
`;

export const TypeText = styled.Text`
  font-size: 10px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;
