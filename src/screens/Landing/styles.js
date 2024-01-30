import { StyleSheet, Dimensions } from 'react-native';
import { logoContainer } from '../../AppStyles';

const { width, height } = Dimensions.get('window');
const viewportWidth = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    fontFamily: 'Rubik'
  },
  carouselContainer: {
    // minHeight: 250, // comentat => containerul este centrat pe mijloc
    flex: 1
  },
  carousel: {
    alignSelf: 'center'
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    width: viewportWidth,
    height: 250
  },
  imageContainer: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  title: {
    margin: 10,
    fontSize: 24,
    color: '#2d3142',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    color: '#9c9eb9',
    textAlign: 'center'
  },
  infoContainer: {
    alignItems: 'center',
    margin: 20
  },
  logContainer: {
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'center'
  },
  btnContainer: {
    marginTop: 30,
    borderRadius: 60,
    width: viewportWidth - 100,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#7265E3',
    borderColor: '#7265E3'
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  signText: {
    margin: 10,
    marginLeft: 0,
    color: '#7265E3',
    fontWeight: 'bold',
    fontSize: 17
  },
  text: {
    margin: 10,
    fontSize: 17,
    color: '#9c9eb9'
  },
  bottomRowContainer: {
    margin: 5,
    flexDirection: 'row',
    width: viewportWidth - 100,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  headerContainer: logoContainer.headerContainer,
  logo: logoContainer.logo
});

export default styles;
