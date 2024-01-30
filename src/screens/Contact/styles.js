import { StyleSheet, Dimensions } from 'react-native';
import { registration } from '../../AppStyles';

// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: registration.container,
  textContainer: {
    marginTop:1,
    marginBottom:1,
    width: SCREEN_WIDTH - 100,
    alignSelf: 'center'
  },
  mainText: {
    fontSize: 24,
    margin:0,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2d3142',
    fontStyle:'italic'
  },
  secText: {
    margin: 5,
    fontSize: 17,
    textAlign: 'center',
    color: '#9c9eb9'
  },
  TextView:{
    alignSelf: 'center',
    width:'90%',
    padding:0,
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'silver',
    backgroundColor: '#ffffff',
    marginBottom:5,
    margin:5
  },
  TextView1:{
    alignSelf: 'center',
    width:'90%',
    padding:20,
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'silver',
    backgroundColor: '#ffffff',
    marginBottom:5,
    margin:5
  },
  helpContainer: {
    alignSelf: 'center',
    width: SCREEN_WIDTH - 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },
  helpText: {
    fontSize: 16,
    color: '#2d3142',
    marginLeft:10,
  },
  helpText1: {
    fontSize: 16,
    color: '#2d3142',
    marginLeft:10,
  },
  iconimg:{
    width: 30,
    height: 30,
    margin: 10
  },
  proimg:{
    alignSelf: 'center',
    borderRadius: 0,
    width: 60,
    height: 60,
    marginTop: 10
  },
  proimglogo:{
    alignSelf: 'center',
    borderRadius: 100,
    width: 150,
    height: 150,
    marginTop: 10
  },
  icon1: {
    height: 50,
    width: 50,
    padding:28,
  },
  icon2: {
    height: 50,
    width: 50,
    padding:31,
  },
  btnContainer: {
    width:'75%' ,
    borderWidth: 1,
    alignItems: 'center',
    padding: 15,
    margin:18,
    backgroundColor: '#7265E3',
    borderColor: '#7265E3',
    borderRadius: 60,
    alignSelf: 'center'
  },
  contactview:{
    width:'100%' ,
    flexDirection:'row',
    borderTopWidth: 1,
    padding: 30,
    backgroundColor: '#ECECEC',
    borderTopColor: 'silver',
    margin:1,
    marginLeft:0,
    alignSelf: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  input:{
    fontSize: 16,
    color: '#2d3142',
    textAlign: 'center',
    marginLeft:10,
    marginBottom:5,
  },
  button1:{
    width: '25%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft:65,
},

});

export default styles;
