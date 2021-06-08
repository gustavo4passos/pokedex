import styled from 'styled-components/native';

import ArrowLeftIcon from '../../assets/images/arrow-left.svg';

interface TypeTagProps {
  readonly pokemonType: String
}

export const Container = styled.View`
  height: 100%;
`;

export const TopContainer = styled.View`
  padding: 32px 16px;
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: "ChakraPetch_700Bold";
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: white;
`;

export const BackContainer = styled.View`
  position: absolute;
  left: 0;
`;

export const BackIcon = styled(ArrowLeftIcon)`
  font-size: 24px;
`;

export const Subheader = styled.View`
  margin: 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TypeTag = styled.View<TypeTagProps>`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 20px;
  padding: 8px;
  border-radius: 16px;
  color: white;
  margin: 4px;

  background-color: ${props => {
    switch (props.pokemonType) {
    case 'eletric':
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
      return 'yellow';
    }
  }};
`;

export const TypeText = styled.Text`
  font-size: 10px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const PokemonImageContainer = styled.View`
  position: relative;
  align-self: center;
  justify-content: center;
  z-index: 0;
`;

export const PokemonImage = styled.Image`
  position: absolute;
  top: -160px;
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const BottomContainer = styled.View`
  position: relative;
  height: 100%;
  top: -70px;
  border-radius: 32px;
  background-color: white;
  z-index: 1;

  padding: 32px 24px;
`;
