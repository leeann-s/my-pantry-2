import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>MyPantry</Text>
        <Text style={styles.subtitle}>insert recipes some fancy UI things idk how to do !</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.placeholderButton]}
          onPress={() => router.push('/placehodler')}  //placeholder
        >
         <Image
            source={require('../assets/images/fridge.png')} 
            style={styles.homeIcon}
          />
        </TouchableOpacity>

        {/* Home Button */}
        <TouchableOpacity
          style={[styles.button, styles.homeButton]}
          onPress={() => router.push('/next')} //placeholder
        >
          <Image
            source={require('../assets/images/home.png')} 
            style={styles.homeIcon}
          />
        </TouchableOpacity>

        {/* Placeholder Button */}
        <TouchableOpacity
          style={[styles.button, styles.placeholderButton]}
          onPress={() => router.push('/placeholder1')} //placeholder
        >
          <Text style={styles.buttonText}>Placeholder</Text>
        </TouchableOpacity>
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
