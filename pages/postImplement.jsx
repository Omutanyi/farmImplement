import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Title, Button } from 'react-native-paper';
import Logo from '../utils/logo';

const PostImplement = ({navigation}) => {
  const logo = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm1pbmclMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      <Title style={styles.text}>POST IMPLEMENT</Title>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('View Implements')}>
        Tiling
      </Button>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Available Implements')}>
        Spraying
      </Button>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Available Implements')}>
        Planting
      </Button>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Available Implements')}>
        Harvesting
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    width: '100%',
    marginVertical: 8,
  },
  text: {
    color: 'black',
    marginBottom: 50
  },
  logoContainer: {
    marginBottom: 15,
  },
  logo: {
    width: 280,
    height: 180
  },
});

export default PostImplement;