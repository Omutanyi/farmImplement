
import {
    StyleSheet, Dimensions
} from 'react-native';


const { width: WIDTH } = Dimensions.get('window');

const planStyles = StyleSheet.create({
    primaryView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },

    headerView: {
        width: WIDTH - 20,
        justifyContent: 'center',
        // backgroundColor: 'white',
        // rgba(17,24,39,0.7)
        // height: 150,
        marginTop: 5,
        position: 'relative',
        borderRadius: 10,
        // flex: 1,
        // borderBottomLeftRadius: 30,
        // borderTopRightRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
    },
    book: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fcebf6',
        color: 'white',
        borderRadius: 1,
        borderColor: '#bf00ff',
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        padding: 10,
    },
    number: {
      borderRadius: 50,
    },
    paySec: {
      marginTop: 20,
    },
    cardT: {
      fontWeight: '800',
      fontSize: 20,
      fontFamily: 'notoserif',
      color: '#bf00ff',
    },
    payBtn: {
      backgroundColor: '#00A86B',
      width: WIDTH - 100,
      height: 45,
      borderRadius: 50,
      marginTop: 25,
      marginHorizontal: 25,
      alignItems: 'center',
      alignSelf: 'center',
      backfaceVisibility: 'hidden',
    },
    cancelBtn: {
      backgroundColor: 'white',
      width: WIDTH - 100,
      height: 45,
      borderRadius: 50,
      marginTop: 25,
      marginHorizontal: 25,
      alignItems: 'center',
      alignSelf: 'center',
    },
    cancelText: {
      fontWeight: '600',
      fontSize: 18,
      top: 10,
      left: 0,
      right: 10,
      fontFamily: 'notoserif',
      color: '#bf00ff',
    },
    btnText: {
      fontWeight: '900',
      fontSize: 18,
      top: 10,
      left: 0,
      right: 10,
      fontFamily: 'notoserif',
      color: '#FFFFFF',
    },
    cardB: {
      fontWeight: '500',
      fontSize: 18,
      top: 10,
      left: 20,
    //   right: 10,
    //   fontFamily: 'notoserif',
      color: 'green',
    },
    loginView: {
      // flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      // position: 'absolute',
      padding: 0,
      borderRadius: 7,
      // alignItems: 'center',
      alignSelf: 'center',
      paddingVertical: 15,
      width: WIDTH - 70,
    },
})

export default planStyles;