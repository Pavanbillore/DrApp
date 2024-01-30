import { StyleSheet, Dimensions } from 'react-native';
import { registration } from '../../AppStyles';
// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: registration.container,
  mainContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 20
  },
  signContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    width: SCREEN_WIDTH - 50,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
    width: 20,
    height: 20
  },
  input: {
    color: 'black',
    fontSize: 17,
    marginLeft: 10,
    textAlign: 'left',
    height: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 100
  },
  accountIcon: {
    alignSelf: 'center',
    width: 20,
    height: 20
  },
  txt: {
    marginBottom: 10,
    fontSize: 17,
    color: '#2d3142',
    textAlign: 'center'
  }
});

export default styles;
