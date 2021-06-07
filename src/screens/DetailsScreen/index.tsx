import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ScrollView, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import PokeballBackground from '../../assets/images/pokeball-background.png';
import TabBar from '../../components/TabBar';

import AboutTab from './AboutTab';
import EvolutionsTab from './EvolutionsTab';
import StatusTab from './StatusTab';

import {
  Container,
  TopContainer,
  Header,
  Title,
  BackContainer,
  BackIcon,
  Subheader,
  TypeTag,
  TypeText,
  PokemonImageContainer,
  PokemonImage,
  BottomContainer
} from './styles';

const renderScene = SceneMap({
  about: AboutTab,
  status: StatusTab,
  evolutions: EvolutionsTab
});

const DetailsScreen = () => {
  const layout = useWindowDimensions();

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'about', title: 'Sobre' },
    { key: 'status', title: 'Status' },
    { key: 'evolutions', title: 'Evolucoes' }
  ]);

  useEffect(() => {
    Animated.loop(Animated.timing(
      rotateAnim,
      {
        toValue: 360,
        easing: Easing.linear,
        duration: 10000,
        useNativeDriver: true
      }
    )).start();
  }, []);

  return (
    <ScrollView>
      <Container style={{ backgroundColor: '#FFDD36' }}>
        <TopContainer>
          <Header>
            <BackContainer>
              <BackIcon></BackIcon>
            </BackContainer>
            <Title>Pikachu</Title>
          </Header>

          <Subheader>
            <TypeTag pokemonType="eletric">
              <TypeText>Eletric</TypeText>
            </TypeTag>
            <TypeTag pokemonType="eletric">
              <TypeText>Eletric2</TypeText>
            </TypeTag>
          </Subheader>

          <PokemonImageContainer>
            <Animated.Image source={PokeballBackground} style={{
              transform: [{
                rotate: rotateAnim.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg']
                })
              }]
            }}></Animated.Image>
          </PokemonImageContainer>
        </TopContainer>

        <BottomContainer style={{ minHeight: layout.height / 2 }}>
          <PokemonImage style={{ resizeMode: 'contain' }} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' }} ></PokemonImage>

          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={(props) => <TabBar {...props} currentIndex={index} setCurrentIndex={setIndex}/>}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </BottomContainer>
      </Container>
    </ScrollView>
  );
};

export default DetailsScreen;
