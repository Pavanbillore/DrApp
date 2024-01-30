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
  },
  conditionContainer: {
    margin: 20
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 10,
    marginLeft: 20
  },
  emptyBox: {
    margin: 5,
    marginTop: 3,
    backgroundColor: '#d6d9e0',
    width: 16,
    height: 16,
    borderRadius: 4
  },
  fullBox: {
    margin: 5,
    marginTop: 3,
    backgroundColor: '#7265e3',
    width: 16,
    height: 16,
    borderRadius: 4
  },
  conditionText: {
    color: '#9c9eb9',
    fontSize: 14,
    margin: 5,
    marginTop: 2
  }
});

export default styles;
