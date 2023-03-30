import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KittyGram</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    paddingTop: 30,
    shadowColor: '#8C031C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 8,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8C031C'
  },
});
