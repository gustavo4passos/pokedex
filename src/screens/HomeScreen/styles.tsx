import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { Pokemon } from '.';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: ${8 + Constants.statusBarHeight}px 4px 0;
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
