import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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
          <Text style={styles.likes}> <Icon name="heart" size={20} color="#B30002" style={styles.icon} /> {likes} curtidas                                                                      </Text>
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
    fontSize: 20,
    color: '#333',
    marginLeft: 5,
  },
});

export default PhotoCard;
