/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const RestaurantCard = ({title, imageUrl, rating, genre, address}) => {
  return (
      <TouchableOpacity>
        <View style={styles.cardBody}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.restaurants}
          />
          <View style={styles.restaurantCardContent}>
            <Text style={styles.restaurantTitle}>{title}</Text>
            <Text>
              ★ {rating} · {genre}
            </Text>
            <Text>Nearby · {address}</Text>
          </View>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    margin: 10,
    marginRight: 0,
    height: 165,
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  restaurants: {
    height: 95,
    width: 160,
  },
  restaurantTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  restaurantCardContent: {
    margin: 6,
    marginLeft: 8,
  },
});
export default RestaurantCard;
