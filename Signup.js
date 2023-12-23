import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AuthService from './AuthService';

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Greška pri registraciji', 'Lozinke se ne podudaraju.');
      return;
    }

    const userData = { firstName, lastName, username, password };

    try {
      const result = await AuthService.signup(userData);
      Alert.alert('Uspešna registracija', 'Uspešno ste se registrovali.');
      // Dodajte dodatnu logiku prema potrebi (navigacija, čuvanje tokena itd.)
    } catch (error) {
      Alert.alert('Greška pri registraciji', 'Korisničko ime već postoji.');
    }
  };

  return (
    <View>
      <Text>Ime:</Text>
      <TextInput value={firstName} onChangeText={(text) => setFirstName(text)} />

      <Text>Prezime:</Text>
      <TextInput value={lastName} onChangeText={(text) => setLastName(text)} />

      <Text>Username:</Text>
      <TextInput value={username} onChangeText={(text) => setUsername(text)} />

      <Text>Password:</Text>
      <TextInput secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />

      <Text>Potvrdite password:</Text>
      <TextInput secureTextEntry value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} />

      <Button title="Signup" onPress={handleSignup} />

      <Text onPress={() => navigation.navigate('Login')}>Već imate nalog? Prijavite se ovde.</Text>
    </View>
  );
};

export default Signup;