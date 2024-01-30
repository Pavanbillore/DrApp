import { StyleSheet, Dimensions } from 'react-native';
import { registration } from '../../AppStyles';

// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles_form = StyleSheet.create({
  container: registration.container,
  textContainer: {
    marginTop:0,
    marginBottom:10,
    width: SCREEN_WIDTH - 100,
    alignSelf: 'center'
  },
  mainText: {
    fontSize: 24,
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2d3142'
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
    padding:10,
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'silver',
    backgroundColor: '#ffffff',
    marginBottom:10

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
    margin:5,
  },
  proimg:{
    alignSelf: 'center',
    borderRadius: 80,
    width: 150,
    height: 150,
    marginTop: 10
  },
  icon: {
    alignSelf: 'center',
    borderRadius: 20,
    width: 25,
    height: 25,
    marginRight: 15
  },
  btnContainer: {
    width:'70%' ,
    borderWidth: 1,
    alignItems: 'center',
    padding: 15,
    margin:25,
    backgroundColor: '#7265E3',
    borderColor: '#7265E3',
    borderRadius: 60,
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
    marginLeft:50,

  }
});

export default styles_form;
