import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface IHomeScreenProps {
    navigation: any
}

const HomeScreen = (props: IHomeScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokedex</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#189AB4',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
  });

export default HomeScreen;