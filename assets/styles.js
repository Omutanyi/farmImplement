
import {
    StyleSheet, Dimensions
} from 'react-native';


const { width: WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
    primaryView: {
        flex: 1,
        padding: 10,
    },
    primaryView2: {
        marginTop: 50,
        padding: 10,
    },


    headerView: {
        width: WIDTH - 20,
        justifyContent: 'center',
        backgroundColor: '#bf00ff',
        // rgba(17,24,39,0.7)
        height: 150,
        marginTop: 5,
        position: 'relative',
        borderRadius: 10,
        // flex: 1,
        // borderBottomLeftRadius: 30,
        // borderTopRightRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
    },

    basicInfo: {
        width: WIDTH - 20,
        // justifyContent: 'center',
        backgroundColor: 'white',
        // height: 150,
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
    },

    wheaderView: {
        width: WIDTH,
        justifyContent: 'center',
        backgroundColor: '#bf00ff',
        // rgba(17,24,39,0.7)
        height: 220,
        marginTop: 0,
        position: 'relative',
        borderRadius: 0,
        // flex: 1,
        // borderBottomLeftRadius: 30,
        // borderTopRightRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
    },
    infoCard: {
      height: 100,
      width: WIDTH - 90,
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      paddingLeft: 30,
      borderRadius: 10,
      top: 100,
    //   left: 45,
      marginBottom: 5,
      elevation: 7,
      backgroundColor: 'white',
    },
    headerMainText: {
        fontWeight: '600',
        fontSize: 25,
        fontFamily: 'Tisa',
        marginTop: 0,
        color: 'white',
    },
    headerText: {
        fontWeight: '300',
        fontSize: 15,
        fontFamily: 'Tisa',
        marginTop: 0,
        color: '#f4f7c5',
    },

    preloader: {
        borderRadius: 50,
        top: '40%',
        padding: 20,
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    searchText: {
        fontWeight: '300',
        fontSize: 12,
        fontFamily: 'Tisa',
        marginTop: 20,
        color: '#FEE2E2',
    },

    catHeader: {
        marginTop: 5,
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Tisa',
        color: 'black',
        backgroundColor: '#e9e9e9',
        padding: 7,
    },
    cardHeaderMain: {
        marginTop: 5,
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Tisa',
        color: 'black',
        // backgroundColor: '#e9e9e9',
        // padding: 7,
    },
    statusPendingText: {
        fontWeight: '300',
        fontSize: 13,
        fontFamily: 'Tisa',
        color: 'black',
        backgroundColor: '#e9e9e9',
        padding: 7,
    },
    statusApprovedText: {
        fontWeight: '300',
        fontSize: 13,
        fontFamily: 'Tisa',
        color: 'green',
        backgroundColor: '#e9e9e9',
        padding: 7,
    },
    statusCancelledText: {
        fontWeight: '300',
        fontSize: 13,
        fontFamily: 'Tisa',
        color: 'red',
        backgroundColor: '#e9e9e9',
        padding: 7,
    },
    statusDoneText: {
        fontWeight: '300',
        fontSize: 13,
        fontFamily: 'Tisa',
        color: '#bf00ff',
        backgroundColor: '#e9e9e9',
        padding: 7,
    },
    cardContainer: {
        padding: 8,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflow: 'scroll',
    },

    servicesContainer: {
        padding: 8,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

  loginBtn: {
    backgroundColor: '#bf00ff',
    width: WIDTH - 200,
    height: 45,
    borderRadius: 0,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
  },

    categoryCard: {
        width: WIDTH - 30,
        marginLeft: 10,
        marginTop: 5,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 7,
        flexDirection: 'row',
    },
    appointmentDesc: {
        marginLeft: 20,
        marginRight: 20,
    },
    clubCard: {
        width: WIDTH / 2 - 30,
        backgroundColor: 'white',
        marginLeft: 10,
        marginTop: 5,
        padding: 10,
        borderRadius: 7,
    },
    cardImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },

    serviceImage: {
        width: '100%',
        height: 70,
    },
    cardHeadText: {
        marginTop: 5,
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Tisa',
    },
    cardText: {
        marginLeft: 10,
        fontWeight: '300',
        fontSize: 12,
        fontFamily: 'Tisa',
    },
    clubLogo: {
        marginBottom: 10,
        backgroundColor: 'white',
        elevation: 3,
        // padding: 1,
    },
    optBtn: {
        // backgroundColor: '#C8E6C9',
        width: WIDTH,
        height: 45,
        borderRadius: 0,
        marginTop: 25,
        color: 'white',
        marginHorizontal: 25,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
      },
      btnText: {
        fontWeight: '300',
        fontSize: 15,
        left: 0,
        right: 10,
        fontFamily: 'notoserif',
        color: '#212121',
      },
      detailBtnText: {
        fontWeight: '500',
        fontSize: 15,
        top: 10,
        left: 0,
        right: 10,
        fontFamily: 'notoserif',
        color: '#FFFFFF',
      },

      book: {
          margin: 20,
          backgroundColor: '#bf00ff'
      },
      viewmore: {
        margin: 10,
        backgroundColor: '#e9e9e9',
        color: '#bf00ff',
    },
    call: {
        margin: 10,
        backgroundColor: '#bf00ff',
        color: '#bf00ff',
        height: 25,
        width: 25,
        marginRight: 50,
        borderWidth: 0,
        alignSelf:'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    viewmoretext: {
      color: '#bf00ff',
  },
});

export default styles