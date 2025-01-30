import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const recipes = [
  { id: '1', title: 'Tomato Soup', image: require('../assets/images/soup.png'), spice: '2/5', 
    reviews: "Creamiest Tomato Soup Ever! This recipe is so easy and delicious!" },
  { id: '2', title: 'Veggie Stir Fry', image: require('../assets/images/stirfry.png'), spice: '4/5',
    reviews: 'What a comfort dish and healthy choice! Fridays are Stir Fry days.'
   },
  { id: '3', title: 'Chicken Salad', image: require('../assets/images/chickensalad.png'), spice: '1/5', 
    reviews: 'Five Star Review, no hesistation. A good recipe for a stay in night.'
  },
];

const HomeScreen = () => {
  const router = useRouter();

  const renderRecipe = ({ item }) => (
    <View style={styles.recipeCard}>
      <Image source={item.image} style={styles.recipeImage} />
      <View style={styles.recipeDetails}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <Text style={styles.recipeSpice}>🌶️ Spice: {item.spice}</Text>
        <Text style = {styles.recipeReviews}>⭐ Reviews ⭐: {item.reviews} </Text>
      </View>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>MyPantry</Text>
        <Text style={styles.subtitle}>Discover New Recipes...</Text>

         
         <FlatList
          data={recipes}
          renderItem={renderRecipe}
          keyExtractor={item => item.id}
          style={styles.recipeList}
        />

      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.placeholderButton]}
          onPress={() => router.push('/pantry')}  
        >
         <Image
            source={require('../assets/images/fridge.png')} 
            style={styles.homeIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.homeButton]}
          onPress={() => router.push('/next')} 
        >
          <Image
            source={require('../assets/images/home.png')} 
            style={styles.homeIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.placeholderButton]}
          onPress={() => router.push('/search')} 
        >
 <Image
            source={require('../assets/images/search.png')} 
            style={styles.homeIcon}
          />        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5eae5',
    justifyContent: 'space-between',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },

  recipeList: {
    flex: 1,
    width: '75%',
  },
  recipeCard: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 50, 
    borderRadius: 50, 
    marginBottom: 10,
    alignItems: 'center',
  },
  recipeImage: { 
    width: 300, 
    height: 300, 
    borderRadius: 230, 
    marginRight: 230 
  },
  recipeDetails: {
    flex: 1,
  },
  recipeTitle: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  
  recipeReviews: {
    fontSize: 16,
    color: '#555'

  },

  recipeSpice: { 
    fontSize: 14, 
    color: '#555' 
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
  placeholderButton: {
    backgroundColor: '#ddd',
  },
  homeButton: {
    backgroundColor: '#f9c74f',
  },
  homeIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
