/* eslint-disable camelcase */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import Provider from './context/provider';

import {
  useFonts,
  ChakraPetch_700Bold,
  ChakraPetch_600SemiBold,
  ChakraPetch_500Medium,
  ChakraPetch_400Regular,
  ChakraPetch_300Light
} from '@expo-google-fonts/chakra-petch';
import MainNavigation from './navigation/MainNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    ChakraPetch_700Bold,
    ChakraPetch_600SemiBold,
    ChakraPetch_500Medium,
    ChakraPetch_400Regular,
    ChakraPetch_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider>
      <MainNavigation />
      <StatusBar style="auto" />
    </Provider>
  );
}
