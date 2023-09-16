import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import Logo from '../utils/logo';

const InitialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Logo />
      <Text style={styles.title}>Welcome to Farm Implement</Text>
      <Button
      style={styles.customBtn}
        title="Login"
        mode='contained'
        onPress={() => navigation.navigate('Login')}
      >Login</Button>
      <Button
      style={styles.customBtn}
        title="Signup"
        mode='contained'
        onPress={() => navigation.navigate('Register')}
      >Register</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    color: 'black',
    // marginLeft: "15%"
  },
  customBtn: {
    marginTop: 40
  },
});

export default InitialScreen;