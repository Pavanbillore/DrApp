import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal:20,
    margin:22,
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '27%',
    borderBottomWidth:1,
    borderBottomColor:'#c1c1c1'
  },
  img:{
    width: 95,
    height: 95,
    borderRadius:80,
    borderWidth:1,
    borderColor:'#c1c1c1',
    position:'relative'
  },
  iconimg:{
    width:20,
    height:20,
    position:'absolute',
    marginTop:-80,
    left:33,
  },
  txt:{
    alignItems: 'center',
    marginTop:10,
    textAlign:'center',
    justifyContent: 'center',
    fontSize:15,
    fontWeight: 'bold',
    color:'#7265E3'
  },
  txts:{
    alignItems: 'center',
    marginTop:0,
    textAlign:'center',
    justifyContent: 'center',
    fontSize:15,
    fontWeight: 'bold',
    color:'#7265E3'
  },
  txt2:{
    alignItems: 'center',
    marginTop:2,
    textAlign:'center',
    justifyContent: 'center',
    fontSize:15,
    fontWeight: 'bold',
    borderBottomColor:'#7265E3',
    borderBottomWidth:2,
    color:'#7265E3'
  },
  
});

export default styles;
