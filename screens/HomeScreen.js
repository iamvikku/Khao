/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import TastyDiscount from '../components/TastyDiscount';
import OffersNearYou from '../components/OffersNearYou';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={styles.location}
          />
        </View>
        <View style={styles.address}>
          <Text>Deliver Now!</Text>
          <Text style={styles.h1}>Current Location</Text>
        </View>
        <View style={styles.end}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            }}
            style={styles.avatar}
          />
        </View>
      </View>
      {/* Search */}
      <View style={styles.search}>
        <TextInput
          placeholder="Restaurant name or a dish..."
          keyboardType="default"
        />
      </View>
      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />
        {/* Featured Row */}
        <FeaturedRow
          title="Featured →"
          description="Paid placements from our partners"
        />
        {/* Tasty Discounts */}
        <TastyDiscount
          title="Tasty Discounts →"
          description="Paid placements from our partners"
        />
        {/* Offers Near You */}
        <OffersNearYou
          title="Offers near you! →"
          description="Paid placements from our partners"
        />
        {/* Featured Row */}
        <FeaturedRow
          title="Featured →"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 4,
    padding: 4,
    position: 'relative',
  },
  location: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  address: {
    marginLeft: 4,
    marginTop: 2,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  end: {
    position: 'absolute',
    right: 4,
    top: 4,
  },
  search: {
    backgroundColor: '#EDEDED',
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 8,
  },
});

export default HomeScreen;
