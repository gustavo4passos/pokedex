import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const ListContainer = styled.View`
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
