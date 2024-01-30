import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#F4F6FA',
    fontFamily: 'Rubik',
  },
  title: {
    backgroundColor: '#7265E3',
    borderColor: '#ffffff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width:'100%',
    padding: 20,
    marginBottom:30,
    borderBottomWidth:1,
    textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  backIcon:{
    width: 25,
    height: 25,
    margin: 10,
    alignSelf: 'center'
  },
  settingContainer: {
    alignSelf: 'center',
    padding: 18,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: 'silver',
    width: '100%'
  },
  settingText: {
    fontSize: 16,
    color: '#2d3142'
  },
  rowContainer: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: 'silver',
    padding: 18,
    paddingLeft: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backArrow: {
    width: 25,
    height: 25
  }
});

export default styles;
