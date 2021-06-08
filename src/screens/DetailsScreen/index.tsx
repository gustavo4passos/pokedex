import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  useWindowDimensions
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import PokeballBackground from '../../assets/images/pokeball-background.png';
import TabBar from '../../components/TabBar';
import { PokedexContext } from '../../context/provider';

import AboutTab from './AboutTab';
import EvolutionsTab from './EvolutionsTab';
import StatusTab from './StatusTab';

import api from '../../services/api';
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

const DetailsScreen = ({ navigation, route }) => {
  const { pokemonsByName, pokemonsSpeciesByName, getPokemonSpeciesData, getPokemonBasicData } = React.useContext(PokedexContext);

  const renderScene = SceneMap({
    about: () => <AboutTab pokemon={currentPokemon} pokemonSpecies={currentPokemonSpecies}/>,
    status: () => <StatusTab pokemon={currentPokemon} />
    // evolutions: () => <EvolutionsTab pokemon={evolution} />
  });

  const layout = useWindowDimensions();

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const [currentPokemon, setCurrentPokemon] = useState<any>();
  const [currentPokemonSpecies, setCurrentPokemonSpecies] = useState<any>();
  const [evolution, setEvolution] = useState<any>();

  const getEvolution = async () => {
    const response = await api.get('/pokemon-species/150/'); // id estático
    const evolution = await api.get(response.data.evolution_chain.url);
    setEvolution(evolution.data);
  };

  useEffect(() => {
    const { pokemonName } = route.params;
    if (pokemonsByName[pokemonName] === undefined) {
      getPokemonBasicData(pokemonName);
    } else {
      setCurrentPokemon(pokemonsByName[pokemonName]);
    }
    if (pokemonsSpeciesByName[pokemonName] === undefined) {
      getPokemonSpeciesData(pokemonName);
    } else {
      setCurrentPokemonSpecies(pokemonsSpeciesByName[pokemonName]);
    }
    getEvolution();
  }, []);

  useEffect(() => {
    const { pokemonName } = route.params;
    if (pokemonsByName[pokemonName]) {
      setCurrentPokemon(pokemonsByName[pokemonName]);
    }
  }, [pokemonsByName]);

  useEffect(() => {
    const { pokemonName } = route.params;
    if (pokemonsSpeciesByName[pokemonName]) {
      setCurrentPokemonSpecies(pokemonsSpeciesByName[pokemonName]);
    }
  }, [pokemonsSpeciesByName]);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'about', title: 'Sobre' },
    { key: 'status', title: 'Status' }
    // { key: 'evolutions', title: 'Evolucoes' }
  ]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 360,
        easing: Easing.linear,
        duration: 10000,
        useNativeDriver: true
      })
    ).start();
  }, []);

  return (
    <ScrollView>
      <Container pokemonType={currentPokemon?.types[0].type.name}>
        <TopContainer>
          <Header>
            <BackContainer onPress={navigation.goBack}>
              <BackIcon></BackIcon>
            </BackContainer>
            <Title>{currentPokemon?.name}</Title>
          </Header>

          <Subheader>
            {currentPokemon?.types.map((item: any) => (
              // eslint-disable-next-line react/jsx-key
              <TypeTag key={item.type.name} pokemonType={item.type.name}>
                <TypeText>{item.type.name}</TypeText>
              </TypeTag>
            ))}
          </Subheader>

          <PokemonImageContainer>
            <Animated.Image
              source={PokeballBackground}
              style={{
                transform: [
                  {
                    rotate: rotateAnim.interpolate({
                      inputRange: [0, 360],
                      outputRange: ['0deg', '360deg']
                    })
                  }
                ]
              }}
            ></Animated.Image>
          </PokemonImageContainer>
        </TopContainer>

        <BottomContainer style={{ minHeight: layout.height / 2 }}>
          <PokemonImage
            style={{ resizeMode: 'contain' }}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon?.id}.png`
            }}
          ></PokemonImage>

          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                currentIndex={index}
                setCurrentIndex={setIndex}
              />
            )}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </BottomContainer>
      </Container>
    </ScrollView>
  );
};

export default DetailsScreen;
