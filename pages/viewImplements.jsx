import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { rootUrl } from '../config';

const logo = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm1pbmclMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

const Item = ({ title, description, image }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: logo }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    );
  };
  
  const ViewImplements = ({navigation}) => {
    const [loading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const fetchData = async () => {
        try {
          const response = await fetch(`${rootUrl}/tilings`);
          const jsonData = await response.json();
          console.error('jsonData:', jsonData.results);
            setData(jsonData.results);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }
      };

      React.useEffect(() => {
        fetchData();
      }, []);

    const renderItem = ({ item }) => <Item title={item.title} description={item.description} image={item.image} />;
  
    return (
      <View style={styles.container}>
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
      backgroundColor: '#fff',
    },
    listContainer: {
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    itemContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    itemImage: {
      width: 300,
      height: 150,
      borderRadius: 10,
    },
    itemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    itemDescription: {
      fontSize: 14,
      color: 'gray',
      marginTop: 5,
      textAlign: 'center',
    },
  });
  
  export default ViewImplements;