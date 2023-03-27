import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PhotoCard = ({ imageSource }) => {
  const [likes, setLikes] = useState(0);

  const handleLikePress = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.likesContainer}>
        <TouchableOpacity onPress={handleLikePress}>
          <Text style={styles.likes}>❤️ {likes} curtidas</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 15,
  },
  likes: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});

export default PhotoCard;
