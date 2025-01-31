import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const TomatoSoupScreen = () => {

  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style = {styles.backButton} onPress = {() => router.push('/next')}>
        <Text style = {styles.backButtonText}>Recipes</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Tomato Soup</Text>
        <Image
          source={require('../assets/images/soup.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.subtitle}>Ingredients</Text>
        <Text style={styles.text}>
          - 4 large tomatoes
          {'\n'}- 1 onion, chopped
          {'\n'}- 3 cloves garlic, minced
          {'\n'}- 1 tbsp olive oil
          {'\n'}- 2 cups vegetable broth
          {'\n'}- Salt and pepper
          {'\n'}- Fresh basil (optional)
        </Text>

        <Text style={styles.subtitle}>Instructions</Text>
        <Text style={styles.text}>
          1. Heat the olive oil in a large pot over medium heat. Add the chopped onion and garlic and sauté until softened.
          {'\n'}2. Add the tomatoes and vegetable broth. Bring to a simmer and cook for about 30 minutes until the tomatoes are soft.
          {'\n'}3. Use blender to blend the soup until smooth.
          {'\n'}4. Season with salt and pepper to taste. You can choose to add fresh basil for garnish.
          {'\n'}5. Serve hot and enjoy your creamy tomato soup!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5eae5',
    padding: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  image: {
    width: '25%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  details: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default TomatoSoupScreen;