/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const CategoryCard = ({imageUrl, title}) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.categoriesImage}
      />
      <Text style={styles.categoriesText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoriesImage: {
    height: 80,
    width: 80,
    borderRadius: 6,
    margin: 10,
    marginRight: 0,
    position: 'relative',
  },
  categoriesText: {
    position: 'absolute',
    bottom: 14,
    left: 18,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryCard;
