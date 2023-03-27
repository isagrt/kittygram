import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Icon name="home" size={30} color="#333" style={styles.icon} />
      <Icon name="search" size={30} color="#333" style={styles.icon} />
      <Icon name="heart-o" size={30} color="#333" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    paddingHorizontal: 20,
    
  },
  icon: {
    alignSelf: 'center',
  },
});
