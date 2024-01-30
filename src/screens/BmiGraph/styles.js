import { StyleSheet, Dimensions } from 'react-native';
import { homeStyle, performance } from '../../AppStyles';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: homeStyle.container,
  titleContainer: homeStyle.titleContainer,
  weightText: homeStyle.purpleText,
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F4F6FA',
    fontFamily: 'Rubik'
  },
  title1: {
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#7265E3',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 22,
    padding:35,
    textAlign: 'center',
    borderColor: '#7265E3',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth:1,
    width:'100%',
  },
  backIcon: {
    width: 25,
    height: 25,
    margin: 10,
    alignSelf: 'center'
  },
  
  title2: {
    fontWeight: 'bold',
    color: '#2d3142',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 22,
    textAlign: 'center',
    borderBottomColor:'silver',
    borderBottomWidth:2,
    width:90,
  },

  purpleText: {
    color: '#7265E3',
    fontSize:16,
  },
 checkboxContainer:{
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    marginBottom:5,
    marginTop:0,
 },
 inputs:{
    width:90,
    height:35,
    color: '#7265E3',
    textAlign:'center',
    marginBottom:1,
    borderBottomColor: '#7265E3',
    borderBottomWidth: 2,
    flex:1,
  },
  check1: {
    width: '50%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  check2: {
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  checkview: {
    width: '45%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor:'#fcd3bd',
    borderRadius:20,
    borderWidth:1,
    backgroundColor:'#fcd3bd'
  },
  checkview1: {
    width: '45%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius:20,
    borderWidth:1,
    borderColor:'#ece4f0',
    backgroundColor:'#ece4f0'
  },
  date2:{
   margin:2,
   textAlign:'center',
   padding:5,
   fontWeight: 'bold',
   fontSize: 14,
   color: '#7265E3',
},
  label: {
    marginTop:5,
    textAlign:'center',
    padding:5,
    fontSize: 17,
    color: '#2d3142',
  },
    mainText: {
    fontSize: 19,
    fontWeight: '800',
    color: '#2d3142'
  },
  secText: {
    fontSize: 14,
    color: '#9c9eb9'
  },

  address:{
   margin:10,
   paddingLeft:5,
   marginLeft:10,
   fontSize: 16,
   color: '#2d3142',
},
date:{
   margin:2,
   textAlign:'center',
   padding:3,
   fontWeight: 'bold',
   fontSize: 15,
   color: '#f79577',
},
graph:{
    marginTop:10,
    marginBottom:10,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
},
icon:{
    height: 250,
    width: 380,
    justifyContent: 'center',
    alignSelf: 'center',},

statisticContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 5
  },



  statisticTxt: { ...homeStyle.mainText, margin: 10 },
  performanceContainer: performance.performanceContainer,
  performanceContainerBorderless: performance.performanceContainerBorderless,
  performanceRowContainer: performance.performanceRowContainer,
  performanceIcon: performance.performanceIcon,
  performanceTextContainer: performance.performanceTextContainer
});

export default styles;
