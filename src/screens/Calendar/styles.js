import { StyleSheet } from 'react-native';
import { post } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    fontFamily: 'Rubik'
  },
  title: {
    fontSize:20,
    color: '#ffffff',
    fontWeight: 'bold',
    margin:5,
    textAlign:'center',
  },
  titleContainer: {
    marginTop:0,
    padding:10,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomWidth:1,
    borderBottomColor:'#ffffff',
    backgroundColor:'#7265E3',
    borderBottomLeftRadius:35,
    borderBottomRightRadius:35,
    shadowColor: "#00b5ec",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 0.35,
    elevation: 5,
  },
  titleContainer2: {
    marginTop:1,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor:'#ffffff',
    shadowColor: "#00b5ec",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 0.35,
    elevation: 5,
  },
 backIcon: {
    width: 25,
    height: 25,
    margin: 10,
    alignSelf: 'center'
  },
 checkboxContainer: {
    width: '100%',
    margin:0,
    flexDirection: "row",
    justifyContent: 'center',
    alignSelf: 'center',
  },
  check1: {
    width: '60%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  check2: {
    width: '30%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
button1:{
    width: '30%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft:20,
},
  label: {
    marginTop:10,
    padding:10,
    fontSize: 17,
    color: '#2d3142',
    fontWeight: '800'
  },
  secText: {
    margin: 5,
    fontSize: 15,
    color: '#9c9eb9'
  },
  checkbox: {
    width: '65%',
    justifyContent: 'center',
    alignSelf: 'center',
   shadowColor: "#00b5ec",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 0.35,
    elevation: 5,
  },
 address:{
   marginLeft:10,
   fontSize: 15,
   color: '#2d3142',
},
date:{
   padding:3,
   fontWeight: 'bold',
   fontSize: 16,
   color: '#7265E3',
},
Container: {
    width: '100%',
    margin:15,
    flexDirection: "row",
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft:20,
},
icon:{
    height: 50,
    width: 50,
    padding:20,
}
});

export default styles;
