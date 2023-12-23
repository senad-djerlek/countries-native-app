import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AuthService from './AuthService';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await AuthService.login(username, password);
      Alert.alert('Uspešna prijava', 'Uspešno ste se ulogovali.');
      // Dodajte dodatnu logiku prema potrebi (navigacija, čuvanje tokena itd.)
    } catch (error) {
      Alert.alert('Greška pri prijavi', 'Pogrešno korisničko ime ili lozinka.');
    }
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={(text) => setUsername(text)} />

      <Text>Password:</Text>
      <TextInput secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />

      <Button title="Login" onPress={handleLogin} />

      <Text onPress={() => navigation.navigate('Signup')}>Nemate nalog? Registrujte se ovde.</Text>
    </View>
  );
};

export default Login;