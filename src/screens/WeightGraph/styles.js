import { StyleSheet } from 'react-native';
import { post } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    fontFamily: 'Rubik'
  },
  savebutn: {
    fontSize:20,
    color: '#2d3142',
    fontWeight: 'bold',
    padding:2,
  },
  bmilistview: {
    margin:2,
    padding:5,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor:'#ffffff',
    borderRadius:0,
    shadowColor: "#00b5ec",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 0.35,
    elevation: 5,
  },
  list:{
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    marginBottom:5,
 },
 inputs:{
    width:70,
    height:40,
    textAlign:'center',
    marginBottom:0,
    borderColor: '#300391',
    borderWidth: 2,
    flex:1,
  },
inputpara:{
    width: '100%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    height:100,
    textAlign:'justify',
    marginBottom:1,
    borderColor: '#300391',
    borderWidth: 2,
  },
dropdown:{
    width: '100%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    textAlign:'justify',
    marginBottom:1,
    borderColor: '#300391',
    borderWidth: 2,
  },
  check1: {
    width: '50%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  picker: {
    width: '40%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection:'row',
    borderColor: '#300391',
    borderWidth: 1,
    borderRadius:5,
  },
  check2: {
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
    margin:5,
  },
  colm:{
    width: '10%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft:5,
  },
  colm1:{
    width: '18%',
    justifyContent: 'center',
    alignSelf: 'center',
    margin:1,
  },
  colm2:{
    width: '40%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    textAlign:'center'
  },
colmlist:{
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    marginBottom:5,
    borderBottomWidth:2,
    borderBottomColor:'#c1c1c1',
},
  timepick:{
    width: '20%',
    margin:5,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    borderColor: '#300391',
    borderWidth: 1,
    borderRadius:5,
  },
  label: {
    margin:5,
    padding:5,
    fontSize: 13,
    color: '#fff',
    borderColor: '#ffffff',
    fontWeight: 'bold',
    borderWidth:1,
    backgroundColor:'#300391',
    borderRadius:5,
    textAlign:'center',
  },
button:{
    margin:1,
    padding:2,
    fontSize: 11,
    color: '#fff',
    borderColor: '#ffffff',
    borderWidth:1,
    backgroundColor:'#300391',
    borderRadius:5,
    textAlign:'center',
},
 address:{
   fontWeight: 'bold',
   margin:1,
   padding:0,
   marginLeft:5,
   fontSize: 12,
   color: '#2d3142',
},
text:{
   fontWeight: 'bold',
   margin:4,
   padding:0,
   marginLeft:10,
   fontSize: 15,
   color: '#2d3142',
},
graph:{
    marginTop:10,
    marginBottom:10,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
},
icon:{
    height: 210,
    width: 320,
    justifyContent: 'center',
    alignSelf: 'center',
},
album:{
    height: 120,
    width:150,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius:4,
    borderWidth:1,
    borderColor:'#300391',
 },
patienttview:{
    margin:2,
    padding:5,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor:'#ffffff',
    borderRadius:4,
    borderWidth:1,
    borderColor:'#300391',
    shadowColor: "#00b5ec",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 0.35,
    elevation: 5,
  },


});

export default styles;
