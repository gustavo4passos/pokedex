import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, NavigationState, Route, SceneRendererProps } from 'react-native-tab-view';

import PokeballBackground from '../../assets/images/pokeball-background.png';

// import api from '../../services/api';

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
  BottomContainer,
  TabBar,
  TabItem
} from './styles';

interface IDetailScreenProps {
  navigation: any
}

const AboutRoute = () => (
  <View style={{ flex: 1 }}>
    <Text>Sobre</Text>
  </View>
);

const StatusRoute = () => (
  <View style={{ flex: 1 }}>
    <Text>Status</Text>
  </View>
);

const EvolutionsRoute = () => (
  <View style={{ flex: 1 }}>
    <Text>Evolucoes</Text>
  </View>
);

const renderScene = SceneMap({
  about: AboutRoute,
  status: StatusRoute,
  evolutions: EvolutionsRoute
});

const DetailScreen = (props: IDetailScreenProps) => {
  const layout = useWindowDimensions();

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'about', title: 'Sobre' },
    { key: 'status', title: 'Status' },
    { key: 'evolutions', title: 'Evolucoes' }
  ]);

  const renderTabBar = (props: SceneRendererProps & { navigationState: NavigationState<Route> }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <TabBar>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            )
          });

          return (
            <TabItem
              key={i}
              active={index === i}
              onPress={() => setIndex(i)}>
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TabItem>
          );
        })}
      </TabBar>
    );
  };

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
    <SafeAreaView>
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

        <BottomContainer>
          <PokemonImage style={{ resizeMode: 'contain' }} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' }} ></PokemonImage>

          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </BottomContainer>
      </Container>
    </SafeAreaView>
  );
};

export default DetailScreen;
