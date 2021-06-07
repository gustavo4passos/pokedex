import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Item = styled.TouchableOpacity<{active: boolean}>`
  flex: 1;
  align-items: center;
  padding: 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ active }) => active ? '#000' : '#E5E5E5'};
`;

export const ItemText = styled(Animated.Text)`
  font-size: 14px;
`;
