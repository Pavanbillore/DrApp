import { StyleSheet, Dimensions } from 'react-native';
import { homeStyle } from '../../AppStyles';
// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    fontFamily: 'Rubik'
  },
  firstHalf: {
    flex: 1,
    backgroundColor: '#7265E3'
  },
  secondHalf: {
    flex: 1,
    backgroundColor: '#F4F6FA'
  },
  headerContainer: {
    justifyContent: 'flex-start',
    marginTop: 40,
    height: 60
  },
  headerText: {
    color: '#ffff',
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold'
  },
  footerContainer: {
    justifyContent: 'flex-end',
    height: 40,
    flex: 1
  },
  btnContainer: {
    marginBottom: 10,
    marginTop: 10,
    width: SCREEN_WIDTH - 100,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    padding: 12,
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
  notNowText: {
    color: '#7265e3',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 0,
    fontWeight: 'bold'
  },
  shareContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    borderColor: '#ffff',
    padding: 10,
    position: 'absolute',
    top: 140,
    bottom: 140,
    left: 30,
    right: 30,
    zIndex: 1
  },
  shareHeaderContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#F4F6FA',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10
  },
  userName: {
    color: '#2d3142',
    fontSize: 16,
    lineHeight: 40
  },
  logo: {
    width: 40,
    height: 40
  },
  circleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    width: SCREEN_WIDTH - 100
  },
  circleText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 30,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  circleImg: {
    width: 30,
    height: 30,
    alignSelf: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    flex: 1,
    width: '100%'
  },
  line: {
    width: 1,
    height: 40,
    backgroundColor: 'silver',
    marginLeft: 20,
    marginRight: 20
  },
  secText: { ...homeStyle.secText, width: width / 2 - 80, textAlign: 'center' },
  mainText: {
    ...homeStyle.mainText,
    width: width / 2 - 80,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  deleteIcon: { position: 'absolute', right: 10, top: -15, zIndex: 10 }
});

export default styles;
