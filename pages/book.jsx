import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Title, Paragraph, Button } from 'react-native-paper';

const BookingScreen = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1533241242276-46a506b40d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxvdWdofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';

  const handleBookButtonPress = () => {
    // Implement your booking logic here
    console.log('Book Button Pressed');
  };

  return (
    <View style={styles.container}>
    <Title>BOOK IMPLEMENT</Title>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Button mode="contained" onPress={handleBookButtonPress}>
        Book
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
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
});

export default BookingScreen;