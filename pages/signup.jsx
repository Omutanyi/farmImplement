import React, { useState } from 'react';
import { View, StyleSheet, Switch, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, Title, Text, Button } from 'react-native-paper';
import Logo from '../utils/logo';
import axios from 'axios';
import { rootUrl } from '../config';

const SignUpScreen = ({ navigation }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${rootUrl}/signup`, {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        admin: checked
      });
      if (response) {
        console.log('response..', response)
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
      console.error('Error during signup--:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
        <View style={styles.sellContain}>
        <Text style={styles.seller}>Become seller</Text>
      <Switch
        trackColor={{false: 'white', true: 'white'}}
        thumbColor={checked ? 'blue' : 'grey'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=> setChecked(prev=>!prev)}
        value={checked}
        style={styles.switch}
      />
      </View>
      <Button mode="contained" color="blue" onPress={handleSignUp}>
        Sign Up
      </Button>
      </View>
      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  sellContain: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10
  },
  seller: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
    color: 'black',
    marginLeft: "30px",
    marginTop: '20px',
    width: "50%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    // marginLeft: "30%"
  },
  subTitle: {
    color: 'grey',
    marginBottom: 70,
    fontSize: 15,
    // marginLeft: "30%"
  },
  switch: {
    marginTop: "10px",
    width: "50%",
    float: 'right',
    marginTop: '20px'
  }
});

export default SignUpScreen;

