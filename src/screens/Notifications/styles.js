import { StyleSheet } from 'react-native';
import { registration } from '../../AppStyles';

const styles = StyleSheet.create({
  container: registration.container,
  header: {
    backgroundColor: '#7265E3',
    borderColor: '#ffffff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width:'100%',
    alignSelf: 'center',
    padding: 20,
    borderBottomWidth:1,
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold'
  },
  secText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#9c9eb9'
  },
  backIcon:{
    width: 25,
    height: 25,
    margin: 10,
    alignSelf: 'center'
  },
  notificationsContainer: {
    alignSelf: 'center',
    width: '100%',
    padding: 20,
    marginTop: 0,
    backgroundColor: '#ffff'
  },
  notificationContainer: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#e1ddf5',
    width: '94%',
    marginTop: 10,
    marginBottom: 10
  },
  rowContainer: {
    width: '80%',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  authorImg: {
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 15
  },
  authorName: {
    color: '#2d3142',
    fontWeight: 'bold',
    fontSize: 16
  },
  notificationText: {
    fontWeight: '500'
  },
  notificationTime: {
    fontSize: 13,
    color: '#9c9eb9',
    marginBottom: 30,
    marginLeft: 55 // 40 from img width and 15 from margin
  },
  unreadMark: {
    backgroundColor: '#e1ddf5',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    top: '50%',
    right: -10
  },
  backArrow: {
    width: 25,
    height: 25,
    marginBottom: 30
  }
});

export default styles;
