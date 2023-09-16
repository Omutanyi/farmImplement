import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import axios from 'axios';
import { rootUrl } from '../config';
import logo from "../assets/images/logo.svg";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logo = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm1pbmclMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${rootUrl}/login`, {
        email: email,
        password: password,
      });

    if (response) {
      console.log('Login user.', response);
      const loggedUser = response.data.user;
      if (loggedUser?.admin == 1) {
        navigation.navigate('Post Implements');
      } else {
        navigation.navigate('Work on Farm');
      }
      } else {
        console.log('Login failed. Invalid credentials.');
      }
    } catch (error) {
      console.log("log..", error)
      console.error('Error during login--:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
        <Title style={styles.title}>Farm Implement</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  logoContainer: {
    marginBottom: 15,
    marginLeft: "35%",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: "30%",
    color: 'black',
    marginBottom: 20,
  },
});

export default LoginScreen;