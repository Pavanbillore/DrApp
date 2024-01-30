import { StyleSheet, Dimensions } from 'react-native';
import { homeStyle, performance } from '../../AppStyles';

// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: homeStyle.container,
  titleContainer: homeStyle.titleContainer,
  title: homeStyle.title,
  stepsText: homeStyle.purpleText,
  mainText: homeStyle.mainText,
  secText: homeStyle.secText,
  detailsContainer: performance.detailsContainer,
  performanceContainer: performance.performanceContainer,
  performanceContainerBorderless: performance.performanceContainerBorderless,
  performanceRowContainer: performance.performanceRowContainer,
  performanceIcon: performance.performanceIcon,
  performanceTextContainer: performance.performanceTextContainer,
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    marginLeft: 40,
    marginRight: 40
  },
  columnContainer: {
    flexDirection: 'column',
    alignSelf: 'center'
  },
  line: {
    width: 2,
    height: 50,
    backgroundColor: 'silver',
    marginLeft: 40,
    marginRight: 40
  },
line1: {
    width: 2,
    height: 40,
    backgroundColor: 'silver',
    marginLeft: 0,
    marginRight: 0
  },
  line2: {
    width: 2,
    height: 40,
    backgroundColor: 'silver',
    marginLeft: 0,
    marginRight: 0
  },

  circleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
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
  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1
  },
  inputs:{
    width:100,
    height:40,
    textAlign:'center',
    marginBottom:0,
    borderColor: '#300391',
    borderWidth: 2,
    borderRadius:5,
    flex:1,
  },
  check2:{
    width: '65%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin:5,
  },
  check1:{
    width: '25%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',

  },
  statisticContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 5
  },
  statisticTxt: { ...homeStyle.mainText, margin: 10 },
  goalAchievedIcon: {
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'center'
  },
  date: {
    fontSize: 15,
    textAlign:'center',
    color: '#2d3142'
  },
  add: {
    fontSize: 13,
    textAlign:'center',
    color: '#9c9eb9',
  },
  colm11:{
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    margin:0,
 },
  colm:{
    width: '12%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft:0,
  },
  colm1:{
    width: '20%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin:1,
  },
  patienttview2:{
    margin:5,
    padding:5,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor:'#ffffff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#300391',
    shadowColor: "#00b5ec",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 0.35,
    elevation: 5,
  },
  filter1:{
    width: '15%',
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin:0,
  },
  filter2:{
    width: '10%',
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin:0,
  },
  steps:{
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    marginBottom:5,
 },
 setGoal1:{
   margin:2,
   marginRight:0,
   textAlign:'center',
   fontSize: 14,
   color: '#8f9494',
   width:55,
},
setGoal2:{
   margin:2,
   textAlign:'center',
   fontSize: 14,
   color: '#8f9494',
   width:25,
},
picker: {
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    borderColor: '#300391',
    borderWidth: 1,
    borderRadius:5,
    margin:5,
  },
colm2:{
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign:'center'
  },
colmlist:{
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    marginBottom:0,
    borderBottomWidth:2,
    borderBottomColor:'#c1c1c1',
},
steps:{
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
},

});

export default styles;
