import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const VeggieStirFryScreen = () => {

  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style = {styles.backButton} onPress = {() => router.push('/next')}>
        <Text style = {styles.backButtonText}>Recipes</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Veggie Stir Fry</Text>
        <Image
          source={require('../assets/images/stirfry.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.subtitle}>Ingredients</Text>
        <Text style={styles.text}>
          - 1 cup of carrots sliced
          {'\n'}- 1 tbsp olive oil
          {'\n'}- 3 cloves garlic, minced
          {'\n'}- 3 tbsp brown sugar
          {'\n'}- 1 cup of baby corn
          {'\n'}- 1 tsp sesame oil
          {'\n'}- 2 cups of broccoli
        </Text>

        <Text style={styles.subtitle}>Instructions</Text>
        <Text style={styles.text}>
          1. Heat the olive oil in medium-high heat in wok or large skillet. You can then procceed to add your vegetables.
          {'\n'}2. Saute vegetables for 4-5 minutes.
          {'\n'}3. In a bowl, blend and whisk the olive oil, sesami oil, garlic and brown sugar.
          {'\n'}4. Pour mixture over veggies and cook until sauce is thick. 
          {'\n'}5. SAfter 5 minutes your stir fry is done and ready to be eaten!
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
    width: '35%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  details: {
    marginBottom: 30,
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

export default VeggieStirFryScreen;