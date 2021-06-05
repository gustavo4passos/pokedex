import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation'

export default function App() {
  return (
    <>
      <MainNavigation />
      <StatusBar style="auto" />
    </>
  );
}
