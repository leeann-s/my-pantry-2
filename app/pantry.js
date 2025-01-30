import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

const pantryItems = [
  { id: 1, name: 'Tomatoes', image: require('../assets/images/tomatoes.png') },
  { id: 2, name: 'Onions', image: require('../assets/images/onions.png') },
  { id: 3, name: 'Carrots', image: require('../assets/images/carrots.png') },
  { id: 4, name: 'Potatoes', image: require('../assets/images/potatoes.png') },
  { id: 5, name: 'Bell Peppers', image: require('../assets/images/bellpeppers.png') },
  { id: 6, name: 'Chicken', image: require('../assets/images/chicken.png') },
  { id: 7, name: 'Eggs', image: require('../assets/images/eggs.png') },
  { id: 8, name: 'Tofu', image: require('../assets/images/tofu.png') },
  { id: 9, name: 'Bread', image: require('../assets/images/bread.png') },
  { id: 10, name: 'Rice', image: require('../assets/images/rice.png') },
  { id: 11, name: 'Pasta', image: require('../assets/images/pasta.png') },
  { id: 12, name: 'Tortillas', image: require('../assets/images/tortillas.png') },
];

export default function PantryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Pantry</Text>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search your pantry items" style={styles.searchInput} />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Text>Type of Food</Text>
      </TouchableOpacity>
      <FlatList
        data={pantryItems}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
      
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.pantryButton]}
          onPress={() => router.push('/pantry')}>
          <Image source={require('../assets/images/fridge.png')} style={styles.homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.homeButton]}
          onPress={() => router.push('/next')}>
          <Image source={require('../assets/images/home.png')} style={styles.homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.searchButton]}
          onPress={() => router.push('/search')}>
          <Image source={require('../assets/images/search.png')} style={styles.homeIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EDEB',
    padding: 0,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  filterButton: {
    alignSelf: 'center',
    backgroundColor: '#DCDCDC',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#ececec',
  },
  pantryButton: {
    backgroundColor: '#f9c74f',
  },
  searchButton: {
    backgroundColor: '#ddd',
  },
  homeButton: {
    backgroundColor: '#ddd',
  },
  homeIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
