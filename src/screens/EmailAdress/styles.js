import { StyleSheet, Dimensions } from 'react-native';
import { registration } from '../../AppStyles';
// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: registration.container,
  title: {
    marginTop: 70,
    marginBottom: 20,
    margin: 30,
    fontSize: 24,
    color: '#2d3142',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  inputContainer: {
    margin: 20,
    marginBottom: 70,
    padding: 5,
    width: SCREEN_WIDTH - 100,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  input: {
    color: 'black',
    fontSize: 17,
    marginLeft: 10,
    textAlign: 'center',
  }
});

export default styles;
