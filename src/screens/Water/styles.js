import { StyleSheet, Dimensions } from 'react-native';
import { homeStyle, performance } from '../../AppStyles';
// screen sizing
const { width, height } = Dimensions.get('window');

const SCREEN_WIDTH = width < height ? width : height;

const glassNumColums = 4;
// item size

const GLASS_ITEM_OFFSET = 25;
const GLASS_ITEM_MARGIN = GLASS_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
  container: homeStyle.container,
  titleContainer: homeStyle.titleContainer,
  title: homeStyle.title,
  waterText: homeStyle.purpleText,
  mainText: homeStyle.mainText,
  secText: homeStyle.secText,
  waterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: GLASS_ITEM_OFFSET,
    marginTop: 10,
    width: (SCREEN_WIDTH - GLASS_ITEM_OFFSET) / glassNumColums - GLASS_ITEM_MARGIN,
    height: (SCREEN_WIDTH - GLASS_ITEM_OFFSET) / glassNumColums - GLASS_ITEM_MARGIN + 10
  },
  glass: {
    width: (SCREEN_WIDTH - GLASS_ITEM_OFFSET) / glassNumColums - GLASS_ITEM_MARGIN,
    height: (SCREEN_WIDTH - GLASS_ITEM_OFFSET) / glassNumColums - GLASS_ITEM_MARGIN
  },
  photoContainer: {
    margin: 20
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    marginLeft: GLASS_ITEM_OFFSET,
    marginRight: GLASS_ITEM_OFFSET
  },
  columnContainer: {
    flexDirection: 'column',
    alignSelf: 'center'
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: 'silver',
    marginLeft: 10,
    marginRight: 10
  },
  plus: {
    alignSelf: 'center',
    position: 'absolute',
    top: ((SCREEN_WIDTH - GLASS_ITEM_MARGIN) / glassNumColums - GLASS_ITEM_OFFSET) / 2 - 20,
    width: ((SCREEN_WIDTH - GLASS_ITEM_MARGIN) / glassNumColums - GLASS_ITEM_OFFSET) / 2,
    height: ((SCREEN_WIDTH - GLASS_ITEM_MARGIN) / glassNumColums - GLASS_ITEM_OFFSET) / 2
  },
  greenContainer: {
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#80dc92'
  },
  redContainer: {
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#f4dcdc'
  },
  redText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f77777'
  },
  greenText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#29963e'
  },
  greenText22: {
    fontSize: 17,
    fontWeight: '800',
    color: '#2d3142',
    textAlign:'center',
  },
  check2: {
    width: '75%',
    textAlign:'justify',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin:0
  },
  colmview:{
    width: '50%',
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  check1: {
    width: '25%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  inputs:{
    width:100,
    height:40,
    textAlign:'center',
    borderRadius:5,
    borderColor: '#300391',
    borderWidth: 2,
    flex:1,
  },
  line1: {
    width: 2,
    height: 40,
    backgroundColor: 'silver',
    marginLeft: 0,
    marginRight: 0
  },
setGoal1:{
   margin:2,
   marginRight:5,
   textAlign:'center',
   fontSize: 14,
   color: '#9c9eb9',
   width:55,
},
setGoal2:{
   margin:2,
   textAlign:'center',
   fontSize: 14,
   color: '#9c9eb9',
   width:25,
},
dailystepview: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor:'#ffffff',
    borderRadius:0,
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
    width: '20%',
    textAlign:'justify',
    justifyContent: 'center',
    alignSelf: 'center',
    margin:5,
  },
  filter2:{
    width: '10%',
    textAlign:'justify',
    justifyContent: 'center',
    alignSelf: 'center',
    margin:5,
  },
  steps:{
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    marginBottom:0,
 },
 picker: {
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#300391',
    borderRadius:5,
    borderWidth:1,
    margin:5,
  },
picker2: {
    width: '25%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    borderColor: '#300391',
    borderRadius:5,
    borderWidth:1,
    margin:1,
  },
 
 address:{
   margin:0,
   textAlign:'center',
   marginLeft:0,
   fontSize: 13,
   color: '#9c9eb9',
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
waterin:{
    margin:2,
    padding:1,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor:'#ffffff',
    borderRadius:4,
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
  statisticTxt: { ...homeStyle.mainText, margin: 10, },

  detailsContainer: performance.detailsContainer,
  performanceContainer: performance.performanceContainer,
  performanceContainerBorderless: performance.performanceContainerBorderless,
  performanceRowContainer: performance.performanceRowContainer,
  performanceIcon: performance.performanceIcon,
  performanceTextContainer: performance.performanceTextContainer
});

export default styles;
