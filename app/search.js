import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const pantryIngredients = ['Tomatoes', 'Onions', 'Rice', 'Bell Peppers'];

const recipes = [
  { id: '1', name: 'Tomato Soup', ingredients: ['Tomatoes', 'Onions'], image: require('../assets/images/soup.png') },
  { id: '2', name: 'Veggie Stir Fry', ingredients: ['Bell Peppers', 'Rice', 'Onions'], image: require('../assets/images/stirfry.png') },
  { id: '3', name: 'Chicken Salad', ingredients: ['Chicken', 'Lettuce', 'Tomatoes'], image: require('../assets/images/chickensalad.png') },
  { id: '4', name: 'Rice Pilaf', ingredients: ['Rice', 'Onions'], image: require('../assets/images/ricepilaf.png') },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const router = useRouter();

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      // Filter recipes by checking if all ingredients in the recipe are in the pantry
      const filtered = recipes.filter((recipe) => {
        // Ensure all ingredients in the recipe are in the pantry
        const hasAllIngredients = recipe.ingredients.every((ingredient) =>
          pantryIngredients.includes(ingredient)
        );
        // Only show recipes where the search query matches all ingredients
        const matchesSearchQuery = recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query.toLowerCase())
        );

        // Show the recipe only if it has all ingredients and matches search query
        return hasAllIngredients && matchesSearchQuery;
      });
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

export default SearchScreen;
