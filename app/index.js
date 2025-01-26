import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const HomeScreen = () => {
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const scaleAnim = useRef(new Animated.Value(0.4)).current;
  const fadeAnimBottom = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimBottom, {
        toValue: 1,
        delay: 2000, 
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleTap = () => {
    router.push('/pantry');
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.title,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          My Pantry
        </Animated.Text>

        <Animated.Image
          source={require('../assets/images/pantry.png')}
          style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
        />

        <Text style={styles.description}>
          Helping college kids eat less ramen.
        </Text>

        <Animated.Text
          style={[
            styles.clickToContinue,
            { opacity: fadeAnimBottom }, 
          ]}
        >
          Click to continue
        </Animated.Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5eae5', 
    padding: 20,
  },
  title: {
    fontSize: 48,
    color: '#333',
    marginBottom: 20,
    fontFamily: 'Poppins_700Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#555',
    fontFamily: 'Poppins_600SemiBold',
    paddingHorizontal: 20,
    marginBottom: 10, 
  },
  clickToContinue: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Poppins_600SemiBold',
    position: 'absolute', 
    bottom: 50, 
  },
});

export default HomeScreen;
