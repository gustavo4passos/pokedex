import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import Provider from './src/context/provider';

export default function App () {
  return (
    <Provider>
      <MainNavigation />
      <StatusBar style="auto" />
    </Provider>
  );
}
