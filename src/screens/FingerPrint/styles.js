import { StyleSheet } from 'react-native';
import { registration } from '../../AppStyles';

const styles = StyleSheet.create({
  container: registration.container,
  notNowText: {
    color: '#7265e3',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 0,
    fontWeight: 'bold'
  },
  iconContainer: {
    marginTop: 60,
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  icon: {
    height: 90,
    width: 90,
    margin: 20
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3142',
    textAlign: 'center',
    margin: 5
  },
  normalText: {
    fontSize: 16,
    color: '#9c9eb9',
    textAlign: 'center',
    margin: 5
  }
});

export default styles;
