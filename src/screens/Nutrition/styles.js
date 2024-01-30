import { StyleSheet } from 'react-native';
import { homeStyle } from '../../AppStyles';

const styles = StyleSheet.create({
  container: homeStyle.container,
  titleContainer: homeStyle.titleContainer,
  title: homeStyle.title,
  caloriesText: homeStyle.purpleText,
  foodName: { ...homeStyle.mainText, marginBottom: 5 },
  foodQuantity: homeStyle.secText,
  foodCalories: homeStyle.mainText,
  mealContainer: {
    backgroundColor: '#ffff',
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    marginTop: 20,
    borderRadius: 10
  },
  mealName: {
    fontSize: 25,
    color: '#2d3142',
    fontWeight: 'bold'
  },
  foodContainer: {
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: 'silver'
  },
  foodContainerBoarderless: {
    width: '100%'
  },
  rowContainer: {
    width: '95%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  orangeBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#ffa56c'
  },
  purpleBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#7265e3'
  },
  greenBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#3fc7bc'
  },
  macroNutrientName: {
    fontSize: 16,
    lineHeight: 18,
    color: '#2d3142',
    marginLeft: 10,
    width: 60
  },
  macroNutrientGrams: {
    textAlign: 'right',
    fontSize: 16,
    lineHeight: 18,
    color: '#2d3142'
  },
  macroNutrientProcent: {
    fontSize: 16,
    lineHeight: 18,
    color: '#2d3142',
    fontWeight: 'bold'
  },
  macroRowContainer: {
    alignSelf: 'center',
    width: '95%',
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  macroRowContainerBorderless: {
    alignSelf: 'center',
    width: '95%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addIcon: {
    width: 35,
    height: 35,
    margin: 20,
    alignSelf: 'center'
  },
  deleteIcon: {
    width: 25,
    height: 25
  },
  deleteIconContainer: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  deleteContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 30,
    borderRadius: 10
  },
  deleteTxt: {
    textAlign: 'center',
    fontFamily: 'Rubik',
    color: '#2d3142',
    fontSize: 18,
    margin: 10
  },
  deleteSecTxt: {
    fontFamily: 'Rubik',
    color: '#2d3142',
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5
  },
  statisticContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  statisticTxt: { ...homeStyle.mainText, margin: 10 },
});

export default styles;
