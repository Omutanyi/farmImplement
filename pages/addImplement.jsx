import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Button } from 'react-native-paper';

const AddImplement = ({navigation}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [description, setDescription] = useState('');
  
    // Function to handle image selection from the gallery
    const handleImageUpload = () => {
      launchImageLibrary(
        {
          mediaType: 'photo',
        },
        (response) => {
          if (!response.didCancel && !response.error) {
            setSelectedImage(response.uri);
          }
        }
      );
    };
  
    // Function to handle post button press
    const handlePost = () => {
      // Here you can implement the logic to post the image and description to your backend or perform any other action
      // For this example, we'll just display a message.
      alert(`Description: ${description}\nImage URI: ${selectedImage}`);
      setSelectedImage(null);
      setDescription('');
    };
  
    return (
      <View style={styles.container}>
        {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
  
        <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
          <Text style={styles.uploadButtonText}>Upload Picture</Text>
        </TouchableOpacity>
  
        <TextInput
          style={styles.descriptionInput}
          placeholder="Enter Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
  
        <Button mode="contained" onPress={handlePost} disabled={!selectedImage}>
          Post
        </Button>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },
    uploadButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    uploadButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    descriptionInput: {
      width: '100%',
      height: 100,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
  });
  
  export default AddImplement;