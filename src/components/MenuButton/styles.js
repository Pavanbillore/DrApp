import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  btnIcon: {
    height: 25,
    width: 25
  },
  btnText: {
    fontSize: 17,
    marginLeft: 12,
    marginTop: 0,
    fontWeight:'800',
    color:'#7265E3'
  }
});

export default styles;
