import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Pokemon } from './HomeScreen';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const ListContainer = styled(FlatList as new () => FlatList<Pokemon>).attrs({})`
  width: 100%;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
