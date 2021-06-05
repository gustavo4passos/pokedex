import React from 'react'
import styled from "styled-components/native";

interface IHomeScreenProps {
  navigation: any
}

const HomeScreen = (props: IHomeScreenProps) => {
  return (
    <Container>
      <Title>Pokedex</Title>
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  height: 100%;
  background-color: #189AB4;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Title = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`

export default HomeScreen;