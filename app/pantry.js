import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Array of objects representing pantry items
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

export default function PantryScreen () {
    return (
        <View style={styles.container}>
            {/* Main containter for entire app. */}

            <Text stle={styles.header}>My Pantry</Text>
            {/* Displays title "My Pantry". */}

            <View style={styles.searchBar}>
                {/* Creates container for the search bar. */}
                <TextInput
                placeholder="Search your pantry items"
                style={styles.searchInput}
                />
                {/* A text input field for searching pantry items. */}
            </View>

            <TouchableOpacity style={styles.filterButton}>
                {/* A button for filtering items. */}
                <Text>Type of Food</Text>
                {/* The text diplayed on the button. */}
            </TouchableOpacity>

            <FlatList
                data={pantryItems}
                // Supplies pantryItems array to the Flatlist for rendering.
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.gridItem}>
                        {/* Container for each grid item. */}
                        <Image source={item.image} style={styles.image} />
                        {/* Displays name of item below image. */}
                    </View>
                )}
            />
            {/* Creates scrollable grid view of pantry items. */}

            <View style={styles.bottomNav}>
                {/* Container for bottom navigation bar. */}
                <TouchableOpacity style={styles.navButton}>
                    <Image 
                        source={require('../assets/images/search.png')} 
                        style={styles.homeIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Image 
                        source={require('../assets/images/fridge.png')} 
                        style={styles.homeIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Image 
                        source={require('../assets/images/home.png')} 
                        style={styles.homeIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bacgroundColor: '#F7EDEB',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBotton: 10,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5,
        marginBotton: 10,
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
        marginBotton: 10,
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        backgroundColor: '#F7EDEB',
    },
    homeIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
      },
    navButton: {
        alignItems: 'center',
    },
});