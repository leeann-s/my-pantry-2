import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const pantryIngredients = ['Tomatoes', 'Onions', 'Rice', 'Bell Peppers'];

const recipes = [
  { id: '1', name: 'Tomato Soup', ingredients: ['Tomatoes', 'Onions', 'Carrots'], image: require('../assets/images/soup.png') },
  { id: '2', name: 'Veggie Stir Fry', ingredients: ['Bell Peppers', 'Rice', 'Onions', 'Carrots'], image: require('../assets/images/stirfry.png') },
  { id: '3', name: 'Chicken Salad', ingredients: ['Chicken', 'Lettuce', 'Tomatoes'], image: require('../assets/images/chickensalad.png') },
  { id: '4', name: 'Rice Pilaf', ingredients: ['Rice', 'Onions', 'Carrots'], image: require('../assets/images/ricepilaf.png') },
  { id: '5', name: 'Spanish Omelette', ingredients: ['Eggs', 'Potatoes', 'Onions'], image: require('../assets/images/spanishomlette.jpeg') },
  { id: '6', name: 'Tofu Stir Fry', ingredients: ['Tofu', 'Bell Peppers', 'Carrots', 'Rice'], image: require('../assets/images/tofustirfry.jpeg') },
  { id: '7', name: 'Chicken Fajitas', ingredients: ['Chicken', 'Bell Peppers', 'Onions', 'Tortillas'], image: require('../assets/images/fajitas.jpg') },
  { id: '8', name: 'Pasta Primavera', ingredients: ['Pasta', 'Tomatoes', 'Carrots', 'Bell Peppers'], image: require('../assets/images/pastaprimavera.jpg') },
  { id: '9', name: 'Egg Fried Rice', ingredients: ['Eggs', 'Rice', 'Onions', 'Carrots'], image: require('../assets/images/friedrice.jpg') },
  { id: '10', name: 'Grilled Cheese Sandwich', ingredients: ['Bread', 'Cheese'], image: require('../assets/images/grilledcheese.jpg') },
  { id: '11', name: 'Chicken & Rice Soup', ingredients: ['Chicken', 'Rice', 'Carrots', 'Onions'], image: require('../assets/images/chickenricesoup.jpeg') },
  { id: '12', name: 'Tofu Tacos', ingredients: ['Tofu', 'Tortillas', 'Bell Peppers', 'Onions'], image: require('../assets/images/tofutacos.jpg') },
  { id: '13', name: 'Roasted Potatoes & Carrots', ingredients: ['Potatoes', 'Carrots', 'Onions'], image: require('../assets/images/roastedpotatoesandcarrots.jpg') },
  { id: '14', name: 'Tomato & Egg Scramble', ingredients: ['Tomatoes', 'Eggs', 'Onions'], image: require('../assets/images/tomatoeggscramble.jpg') },
  { id: '15', name: 'Chicken Pasta', ingredients: ['Chicken', 'Pasta', 'Tomatoes', 'Onions'], image: require('../assets/images/chickenpasta.jpg') },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const router = useRouter();

  const handleSearch = (query) => {
    setSearchQuery(query);
  
    if (query.trim() === '') {
      setFilteredRecipes(recipes);
      return;
    }
  
    const lowerCaseQuery = query.toLowerCase();
  
    const filtered = recipes.filter((recipe) => {
      // Check if recipe name matches search
      const matchesRecipeName = recipe.name.toLowerCase().includes(lowerCaseQuery);
  
      // Check if any ingredient matches search
      const matchesIngredient = recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerCaseQuery)
      );
  
      // Check if the recipe has at least one ingredient in the users pantry
      const hasSomeIngredients = recipe.ingredients.some((ingredient) =>
        pantryIngredients.includes(ingredient)
      );
  
      // Show the recipe if it matches the name or ingredients, and has at least one pantry item
      return (matchesRecipeName || matchesIngredient) && hasSomeIngredients;
    });
  
    setFilteredRecipes(filtered);
  };

  // Handle navigation to the recipe detail screen
  const handleRecipeSelect = (recipeId) => {
    router.push(`/recipe/${recipeId}`); // Adjust to your routing scheme
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search for recipes..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Search Results */}
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recipeCard} onPress={() => handleRecipeSelect(item.id)}>
            <Image source={item.image} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
       <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.pantryButton]}
          onPress = {() => router.push('/pantry')} 
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
          style={[styles.button, styles.searchButton]}
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
    padding: 0,
    backgroundColor: '#f5eae5',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  recipeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recipeImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
  searchButton: {
    backgroundColor: '#f9c74f',
  },
  pantryButton: {
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
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  }
});

export default SearchScreen;
