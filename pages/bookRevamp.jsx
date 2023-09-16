import { Calendar } from 'react-native-calendars';
import { View, Text, Alert, ActivityIndicator, ScrollView } from 'react-native';
import React from 'react';
import { Title, Avatar, Divider, Provider, Card, Button, Subheading, Menu, Caption, IconButton } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker as SelectPicker } from '@react-native-picker/picker';
// import { BaseUrl } from '../assets/baseurl';
import axios from 'axios';

//redux imports
// import {connect} from 'react-redux';
import styles from '../assets/styles';

class BookRevamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      profile: {},
      isLoading: false,
      starts: '',
      date: '',
      profile: {},
    };
  };

bookAppointment = ({title, description, image, price}) => {
    if (!title, !description, !image, !price) return;
    this.props.navigation.navigate('Cart', {title, description, image, price, date: this.state.date, time: this.state.time});
}


  render() {
    const { route, navigation } = this.props;
    console.log('route', route);
    const {title, description, image, price} = route.params;
    var hours = new Date().getHours();
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#bf00ff" />
        </View>
      );
    }
    return (
        <ScrollView style={styles.primaryView}>
          <Title>Book Appointment</Title>
          <Caption></Caption>

          <View>
<Title>{title}</Title>
<Text >{description}</Text>
<Text >{price}</Text>
</View>
        
          <Subheading style={styles.catHeader}>Choose a date for the appointment</Subheading>
          <View style={{ paddingTop: 10, elevation: 4, }}>
            <Calendar
              // color={'red'}
              //   current={'2012-03-01'}
              minDate={new Date()}
              //   maxDate={'2012-05-30'}
              onDayPress={day => {
                this.setState({ date: day.dateString })
              }}
              monthFormat={'MM, yyyy'}
              //   onMonthChange={month => {
              //     console.log('month changed', month);
              //   }}
              hideArrows={false}
              hideExtraDays={false}
              disableMonthChange={true}
              firstDay={1}
            />
            <Subheading>Selected date - {this.state.date}</Subheading>
          </View>
          <Subheading style={styles.catHeader}>Choose desired starting time</Subheading>
          <View
            style={{
              justifyContent: 'center',
              backgroundColor: 'white',
              marginBottom: 40,
            }}>
            <SelectPicker
              selectedValue={this.state.starts}
              style={{ height: 50, width: '100%' }}
              onValueChange={(itemValue) =>
                this.setState({ starts: itemValue })
              }>
              <SelectPicker.Item label="09:00" value="09:00:00" />
              <SelectPicker.Item label="10:00" value="10:00:00" />
              <SelectPicker.Item label="11:00" value="11:00:00" />
              <SelectPicker.Item label="12:00" value="12:00:00" />
              <SelectPicker.Item label="14:00" value="14:00:00" />
              <SelectPicker.Item label="15:00" value="15:00:00" />
              <SelectPicker.Item label="16:00" value="16:00:00" />
            </SelectPicker>
          </View>

          <Button mode="contained" onPress={() => this.bookAppointment({title, description, image, price})}>
            BOOK APPOINTMENT
          </Button>
        </ScrollView>
    );
  }
}


// const mapStateToProps = (state) => ({
//   token: state.token.token,
// });

export default BookRevamp