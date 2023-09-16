import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Title, Text } from 'react-native-paper';
import { rootUrl } from '../config';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Item = ({ title, description, image, price, navigation, upload_date }) => {
  const imageUrl = "https://images.unsplash.com/photo-1593699419599-38c91e8a8589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxvdWdofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('Book Appointment', {title, description, image, price, upload_date})}
    >
    <View style={styles.section}>
<Image
source={{ uri: imageUrl }}
style={styles.image}
/>
<Title style={styles.text}>{title}</Title>
<Text style={styles.text}>{description}</Text>
<Text style={styles.text}>{price}</Text>
<Text style={styles.text}>{upload_date}</Text>
</View>
</TouchableOpacity>
  );
};

const AvailableImplements = ({route, navigation}) => {
  const {table} = route.params;
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${rootUrl}/${table}`);
      const jsonData = await response.json();
      console.log('jsonData:', jsonData.results);
        setData(jsonData.results);
      // setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  
    const imageUrl2 = "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBsb3VnaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  
    const renderItem = ({ item }) => <Item title={item.title} description={item.description} navigation={navigation} image={imageUrl2} price={item.price} upload_date={item.upload_date}
     />;
    return (
    <View style={styles.container}>
    <Title style={styles.container}>{table}</Title>
    <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  text: {
    text: {
      color: 'black',
      marginBottom: 50
    },
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    marginBottom: 8,
    border: '1px solid grey',
    borderRadius: 3
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});

export default AvailableImplements;