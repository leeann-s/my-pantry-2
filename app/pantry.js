import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';

const pantryItems = [
    {id: 1, name: 'Tomatoes', image: require('./assets/tomatoes.png')}, 
    {id: 2, name: 'Onions', image: require('./assets/onions.png')}, 
    {id: 3, name: 'Carrots', image: require('./assets/carrots.png')}, 
    {id: 4, name: 'Potatoes', image: require('./assets/potatoes.png')}, 
    {id: 5, name: 'Bell Peppers', image: require('./assets/bellpeppers.png')}, 
    {id: 6, name: 'Chicken', image: require('./assets/chicken.png')}, 
    {id: 7, name: 'Eggs', image: require('./assets/eggs.png')}, 
    {id: 8, name: 'Tofu', image: require('./assets/tofu.png')}, 
    {id: 9, name: 'Bread', image: require('./assets/bread.png')},
    {id: 10, name: 'Rice', image: require('./assets/rice.png')}, 
    {id: 11, name: 'Pasta', image: require('./assets/pasta.png')},  
    {id: 12, name: 'Tortillas', image: require('./assets/tortillas.png')}, 
];

export default function PantryScreen = () => {
    return (

    )
};