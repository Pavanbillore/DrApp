import { StyleSheet, Dimensions } from 'react-native';
import { registration } from '../../AppStyles';

// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: registration.container,
  carouselContainer: {
    marginTop: 40,
    marginBottom: 20
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 60
  },
  cardContainer: {
    width: 80,
    height: 80,
    borderRadius: 60,
    borderColor: '#ffff',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'center'
  },
  selectedCardContainer: {
    width: 80,
    height: 80,
    borderRadius: 60,
    borderColor: '#7265E3',
    backgroundColor: '#7265E3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'center'
  },
  textContainer: {
    margin: 10,
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
  customText: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7265e3'
  }
});

export default styles;
