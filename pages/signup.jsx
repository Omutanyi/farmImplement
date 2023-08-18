import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import Logo from '../utils/logo';
import axios from 'axios';
import { rootUrl } from '../config';

const SignUpScreen = ({ navigation }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${rootUrl}/signup`, {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      });
      if (response) {
        console.log('response..', response)
        navigation.navigate('Work on Farm')
      } else {
        console.log('Login failed. Invalid credentials.');
      }
    } catch (error) {
      console.error('Error during signup--:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <Title style={styles.title}>Farm Implement</Title>
        <Title style={styles.subTitle}>Register to farm Implement</Title>
      </View>
      <TextInput
        label="First Name"
        value={fname}
        onChangeText={text => setFname(text)}
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={lname}
        onChangeText={text => setLname(text)}
        style={styles.input}
      />
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
      <Button mode="contained" onPress={handleSignUp}>
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginLeft: "30%"
  },
  subTitle: {
    color: 'grey',
    marginBottom: 70,
    fontSize: 15,
    marginLeft: "30%"
  }
});

export default SignUpScreen;

