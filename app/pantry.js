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

// Pantry items list
const pantryItems = [
    {id: 1, name: 'Tomatoes', image: require('../assets/images/tomatoes.png')}, 
    {id: 2, name: 'Onions', image: require('../assets/images/onions.png')}, 
    {id: 3, name: 'Carrots', image: require('../assets/images/carrots.png')}, 
    {id: 4, name: 'Potatoes', image: require('../assets/images/potatoes.png')}, 
    {id: 5, name: 'Bell Peppers', image: require('../assets/images/bellpeppers.png')}, 
    {id: 6, name: 'Chicken', image: require('../assets/images/chicken.png')}, 
    {id: 7, name: 'Eggs', image: require('../assets/images/eggs.png')}, 
    {id: 8, name: 'Tofu', image: require('../assets/images/tofu.png')}, 
    {id: 9, name: 'Bread', image: require('../assets/images/bread.png')},
    {id: 10, name: 'Rice', image: require('../assets/images/rice.png')}, 
    {id: 11, name: 'Pasta', image: require('../assets/images/pasta.png')},  
    {id: 12, name: 'Tortillas', image: require('../assets/images/tortillas.png')}, 
];

// Recipe list
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
];

export default function PantryScreen() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [suggestedRecipes, setSuggestedRecipes] = useState([]);

    // Toggle pantry item selection
    const handleSelectItem = (itemName) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(itemName)
                ? prevSelected.filter((item) => item !== itemName) // Remove if already selected
                : [...prevSelected, itemName] // Add if not selected
        );
    };

    // Find best matching recipes
    const findRecipes = () => {
        const rankedRecipes = recipes
            .map(recipe => ({
                ...recipe,
                matchCount: recipe.ingredients.filter(ingredient => selectedItems.includes(ingredient)).length
            }))
            .filter(recipe => recipe.matchCount > 0) // Only show recipes that use at least 1 selected item
            .sort((a, b) => b.matchCount - a.matchCount); // Sort by most matching ingredients

        setSuggestedRecipes(rankedRecipes);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Pantry</Text>

            {/* Search Bar */}
            <TextInput placeholder="Search your pantry items" style={styles.searchInput} />

            {/* Pantry Item Grid */}
            <FlatList
                data={pantryItems}
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.gridItem, selectedItems.includes(item.name) && styles.selected]}
                        onPress={() => handleSelectItem(item.name)}
                    >
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.itemText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Find Recipes Button */}
            <TouchableOpacity style={styles.findRecipesButton} onPress={findRecipes}>
                <Text style={styles.buttonText}>Find Recipes</Text>
            </TouchableOpacity>

            {/* Suggested Recipes */}
            <FlatList
                data={suggestedRecipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.recipeCard}>
                        <Image source={item.image} style={styles.recipeImage} />
                        <Text style={styles.recipeText}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7EDEB',
        padding: 10,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    row: {
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    selected: {
        backgroundColor: '#FFD700', // Highlight selected items
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
    findRecipesButton: {
        backgroundColor: '#FF5733',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    recipeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    recipeImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    recipeText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});