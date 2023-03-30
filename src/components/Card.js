import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PhotoCard = ({ imageSource, nome, legenda }) => {
  const [likes, setLikes] = useState(0);

  const handleLikePress = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.likesContainer}>
        <TouchableOpacity onPress={handleLikePress}>
          <Text style={styles.likes}>❤️ {likes} curtidas                     </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{nome}</Text>
      </View>
      <View style={styles.legendContainer}>
        <Text style={styles.legend}>{legenda}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 350,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  likes: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  nameContainer: {
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 17,
    color: '#000',
  },
  legendContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  legend: {
    fontSize: 14,
    color: '#555',
  },
});

export default PhotoCard;

