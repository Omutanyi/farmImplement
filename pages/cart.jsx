import React, { Component } from 'react';
import { Text,ScrollView, StyleSheet, Alert, TouchableWithoutFeedback, TouchableOpacity, Image, View, RefreshControl } from 'react-native';
import { Title, Caption, Subheading, TextInput, Paragraph } from 'react-native-paper';
import axios from 'axios';
import styles from '../assets/styles';
import planStyles from '../assets/planStyles';
// import Icon from 'react-native-vector-icons/AntDesign';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      loading: false,
      refreshing: false,
      items: [],
      isPaying: false,
      isLoading: false,
      paid: false,
      mobile: '',
      resbody: {},
      reqbody: {},
      token: {},

    };
  }

//   componentDidMount() {
//     this.getData();
//   }

//   async getData() {
//     var request = new XMLHttpRequest();
//     request.open('GET', `${BaseUrl}/workers/api/client_cart`);
//     request.setRequestHeader('Access-Control-Allow-Headers', '*');
//     request.setRequestHeader('Authorization', 'Bearer ' + this.props.token.access);
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
//     request.onreadystatechange = (e) => {
//       if (request.readyState !== 4) {
//         return;
//       }

//       if (request.status === 200) {
//         console.log('success', request.responseText);
//         const response = request.responseText;
//         const res = JSON.parse(response)
//         const items = res.results;
//         this.setState({ items: items });
//       } else {
//         console.warn('error', request);
//         console.error();
//       }
//     };

//     request.send();

//   }

  removeItem = (itemId) => {

    console.log("item...", itemId);

    const config = {
      headers: { Authorization: 'Bearer ' + this.props.token.access }
    };

    const bodyParameters = {
      worker: itemId
    };


    axios.delete(`${BaseUrl}/workers/api/cart/delete/${itemId}`, config)
      .then((response) => {
        console.log('successfully removed', response);
        Alert.alert('Success, Removed from cart !');
        this.getData();
        return
      })
      .catch(function (error) {
        console.error();
        console.log("There was an error", error.response);
        Alert.alert('Failed, Check your network and log back in to retry!');
        return
      });

  }



  _onRefresh() {
    this.setState({refreshing: true});
    // this.getData().then(() => {
    //   this.setState({refreshing: false});
    // });
  }


  showItems = ({title, description, image, price, date, time}) => {
      return (
        <View style={mystyles.cardContainer}>
        <Title> Items in cart</Title>
          

            <TouchableWithoutFeedback
              // onPress={() =>
              //   this.props.navigation.navigate('Worker', { worker: data })
              // }
            >
              <View style={mystyles.mainCardView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={mystyles.subCardView}>
                    {/* <Image
                      source={{ uri: data.worker.profile_image}}
                      resizeMode="contain"
                      style={{
                        borderRadius: 5,
                        height: 50,
                        width: 50,
                      }}
                    /> */}
                  </View>
                  <View style={{ marginLeft: 12 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'black',
                        fontWeight: '700',
                        fontFamily: 'Tisa',
                      }}>
                      {title}
                    </Text>
                    <View
                      style={{
                        marginTop: 4,
                        borderWidth: 0,
                        width: '85%',
                      }}>
                      <Caption>{description}</Caption>
                      <Text
                        style={{
                          // color: ,
                          fontSize: 16,
                        }}>
                        Kshs. {price}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>

  


          <Subheading>Total to be paid is Kshs. {price}</Subheading>


<TouchableOpacity
              style={planStyles.payBtn}
              onPress={() => this.setState({ isPaying: !this.state.isPaying })}
              >
              <Text style={planStyles.btnText}>Pay Now Via Mpesa</Text>
            </TouchableOpacity>
        </View>
      )

  }

  showDone = () => {
    if (this.state.paid) {
        return (
            <>

                <Caption>After providing your pin, please tap proceed to confirm payment</Caption>
                {/* <Button icon="" style={styles.viewmore} mode="contained" onPress={() => this.checkPay()}>

                    <Text style={styles.viewmoretext}>Proceed</Text>
                </Button> */}
                <TouchableOpacity
              style={planStyles.payBtn}
              onPress={() => this.checkPay()}
              >
              <Text style={planStyles.btnText}>Proceed</Text>
            </TouchableOpacity>
            </>
        );
    } else {
        return (
          <>

            <TouchableOpacity
            style={planStyles.payBtn}
            onPress={() => this.initiatePay()}
            >
            <Text style={planStyles.btnText}>Initiate Payment</Text>
            </TouchableOpacity>

<TouchableOpacity
style={planStyles.cancelBtn}
onPress={() => this.setState({ isPaying: !this.state.isPaying })}
>
<Text style={planStyles.cancelText}>Cancel</Text>
</TouchableOpacity>
</>
        );

    }
}

initiatePay = () => {

  var amount_to_pay = this.state.items.length * 3500
  if (this.state.mobile) {

      axios.post(`${BaseUrl}/payments/api/mpesa/token`, {
          phone: this.state.mobile,
          amount: amount_to_pay
      })
          .then((response) => {
              console.log(response.data);
              this.setState({ paid: true })
              this.setState({ reqbody: response.data.reqbody })
              this.setState({ resbody: response.data.resbody })
              Alert.alert('Transaction Status !', response.data.message);

          })
          .catch(function (error) {
              console.log(error);
          });

  } else {
      Alert.alert('Enter mpesa phone number !');
  }
}

checkPay = () => {
  axios.post(`${BaseUrl}/payments/api/online_status/check`, {
      BusinessShortCode: this.state.reqbody.BusinessShortCode,
      Password: this.state.reqbody.Password,
      Timestamp: this.state.reqbody.Timestamp,
      CheckoutRequestID: this.state.resbody.CheckoutRequestID,
  })
  .then((response) => {
      if (response.data.resbody.ResultCode == 0) {
          this.addToWorkers();
      } else{
      this.setState({
          isLoading: false,
        });
        console.log(" mpesa response.data.resbody",  response.data.resbody)
          Alert.alert('Transaction failed !', response.data.resbody.errorMessage);
      }

  })
      .catch(function (error) {
          console.log(error);
      });
}

addToWorkers = () => {

  const config = {
      headers: { Authorization: 'Bearer ' + this.props.token.access}
  };
  
  const bodyParameters = {
     workers: this.state.items
  };

  
  axios.post(`${BaseUrl}/workers/api/client/workers`, bodyParameters, config)
      .then((response) => {
                  console.log('success subscribed', response);
                  this.props.navigation.navigate('Placements');
      })
      .catch(function (error) {
          console.log(error);
          Alert.alert('Something went wrong... Failed to add to your workers !');
      });

}


  
  render() {
    const { route, navigation } = this.props;
    const {title, description, image, price, date, time}= route.params
    if(this.state.isPaying) {
      return (

        <View style={styles.primaryView}>
        <Title>Paying Via Mpesa</Title>
                <Paragraph>Amount to pay is Kshs. {this.state.items.length * 3500}</Paragraph>
        <Caption>Please enter your mpesa number to proceed</Caption>
        <TextInput
                    mode="outlined"
                    label="Phone number"
                    placeholder="0712345678"
                    onChangeText={(text) => this.setState({ mobile: text.replace(/[^0-9]/g, '') })}
                // right={<TextInput.Affix text="/100" />}
                />

          {this.showDone()}
          </View>
      )
    }
    return (
      <ScrollView style={styles.primaryView}  refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
        />}>
        <Title>Cart Items</Title>
        {this.showItems({title, description, image, price, date, time})}
      </ScrollView>
    );
  }
}


const mystyles = StyleSheet.create({


  cardContainer: {
    padding: 8,
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  
  mainCardView: {
    height: 90,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    // shadowColor: Colors.shadow,
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 1,
    // shadowRadius: 8,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 5,
    marginRight: 5,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 5,
    // backgroundColor: Colors.history_back,
    // borderColor: Colors.color_eeeeee,
    // borderWidth: 1,
    // borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },

})


// const mapStateToProps = (state) => ({
//   token: state.token.token,
// });

export default Cart;