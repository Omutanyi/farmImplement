import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Logo = () => {
  const logo = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm1pbmclMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

  return (
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginBottom: 15,
    marginLeft: "35%",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Logo;