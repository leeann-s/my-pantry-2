import React, {useState } from 'react';
import { TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState(null);
  const router = useRouter();
  
  const handleSubmit = async () => {

    const response = await fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });

    if (response.ok) {
      const data = await response.json();
      setAuthToken(data.token);
      router.push('/dashboard');
    } else{
      Alert.alert('Error: Invalid Credentials')
    }
  };
      

  return(
    <View style = {styles.container}>
    <Text style = {styles.header}>Login</Text>


      <TextInput
        style = {styles.input}
        placeholder="username@email.com"
        value={email}
        onChangeText={setEmail}   
      />

      <TextInput
        style = {styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
          />

      <Button title="Login" onPress={handleSubmit} />
    </View>  
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 14,
    paddingHorizontal: 10,
    borderRadius: 5, 
  }
});

export default Login;

  