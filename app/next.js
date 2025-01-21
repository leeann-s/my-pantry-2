import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NextScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>next screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f3ef',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NextScreen;
