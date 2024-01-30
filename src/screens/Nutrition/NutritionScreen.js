import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView, FlatList, Alert } from 'react-native';
import styles from './styles';
import ModalMealScreen from '../ModalMeal/ModalMealScreen';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import {LineChart} from "react-native-chart-kit";
import { lineChartConfig, lineChartData } from '../../data/dataArrays';
import api from '../../../Api';


class NutritionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerStyle: {
        backgroundColor: '#F4F6FA',
        elevation: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0
      },
      headerRight: (
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.9)"
          onPress={() => params.onPressModal()}
        >
          <Image style={styles.addIcon} source={require('../../../assets/icons/addIcon.png')} />
        </TouchableHighlight>
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = { nutrition : [], visibleModalId: null, deleteModal: false, deleteMealId: -1,
      macroNutrients: {
        proteinDone: 100,
        carbDone: 60,
        fatDone: 20,
      },
      week_data: ['4','7','7', '8', '8'  ],
      week_days: ['21 jan', '22 jan', '23 jan', '24 jan','25 jan',],
     };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onPressModal: this.onPressModal
    });
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.getd();
      this.get_week_data();
    });
  }
  getd=async ()=>{
     var res = await api.getdata('user/get_neutrition/'+global.userdata.uid);
     if(res){
        if(res.length > 0){
          this.setState({nutrition: res});
          this.setdata(res);
        }
     }
  } 
  get_week_data=async ()=>{
     var res = await api.getdata('user/get_nutri/'+global.userdata.uid);
     if(res){
        if(res.data.length > 0){
          this.setweekdata(res.data);
        }
     }
  } 
  setweekdata=(res)=>{
    var cal_data = [];
    var days = [];
    res.forEach((re)=>{
      var calories = 0;
      re.data.forEach((r)=>{
        r.foods.forEach((f)=>{
          calories+=parseInt(f.calories);
        })
      })
      cal_data.push(calories);
      days.push(re.day);
    })
    this.setState({week_days: days, week_data: cal_data});
  }
  setdata=(res)=>{
    var protein = 0;
    var carbs = 0;
    var fat = 0;
    var calories = 0;
    res.forEach((r)=>{
      r.foods.forEach((f)=>{
        protein+=parseInt(f.protein);
        carbs+=parseInt(f.carbs);
        fat+=parseInt(f.fat);
        calories+=parseInt(f.calories);
      })
    })
    this.setState({macroNutrients: {'proteinDone': protein, 'carbDone': carbs, 'fatDone': fat}});
  }
  dleted=async (id)=>{
     var res = await api.getdata('user/delete_neutrition/'+global.userdata.uid+'/'+id);
     if(res){
        if(res.length > 0){
          this.setState({nutrition: res});
        }
     }
  } 

  toggleModal = () => {
    this.getd();
    this.setState({
      visibleModal: null
    });
  };
  closemodel = () => {
    alert();
  }
  onPressModal = () => {
    this.setState({
      visibleModal: 'swipeable'
    });
  };

  onPressDeleteIcon = mealId => {
    this.setState(prevState => ({ deleteModal: !prevState.deleteModal, deleteMealId: mealId }));
  };

  onPressDeleteMeal = () => {
    this.props.removeMeal(this.state.deleteMealId);
    this.setState(prevState => ({ deleteMealId: -1 }));

    //for initial delete screen
    //this.setState(prevState => ({ deleteModal: !prevState.deleteModal,deleteMealId: -1 }));
  };

  onPressCancel = () => {
    this.setState(prevState => ({
      deleteMealId: -1
    }));

    //for initial delete screen
    //this.setState(prevState => ({ deleteModal: !prevState.deleteModal,deleteMealId: -1 }));
  };

  showDeleteScreen = id => {
    
    Alert.alert(
      'Are you sure you want to delete this meal?',
      '',
      [
        { text: 'Yes', onPress: () => this.dleted(id) },
        {
          text: 'Cancel',
          onPress: () => this.onPressCancel(),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    );
  };
  renderFood = ({ item, index }) => (
    <View style={index == 0 ? styles.foodContainerBoarderless : styles.foodContainer}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.foodQuantity}>{item.quantity}</Text>
        </View>
        <Text style={styles.foodCalories}>{item.calories}</Text>
      </View>
    </View>
  );

  renderMeal = ({ item, index }) => (
    <View style={styles.mealContainer}>
      <Text style={styles.mealName}>{item.meal}</Text>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={item.foods}
        renderItem={this.renderFood}
        extraData={this.state}
        //keyExtractor={item => `${item.id}`}
        listKey={index => `${index}`}
      />
      <TouchableHighlight
        style={styles.deleteIconContainer}
        underlayColor="rgba(73,182,77,1,0.9)"
        //onPress={() => this.onPressDeleteIcon(item.id)}
        onPress={() => this.showDeleteScreen(item.nu_id)}
      >
        <Image style={styles.deleteIcon} source={require('../../../assets/icons/deleteIcon.png')} />
      </TouchableHighlight>
    </View>
  );

  getCaloriesDone() {
    var calories = 0;
    this.state.nutrition.map(data => {
      data.foods.map(food => {
        calories += food.calories;
      });
    });
    return calories;
  }

  render() {
    const macroNutrients = this.props.navigation.getParam('macroNutrients');
    const caloriesDone = this.getCaloriesDone();
    const data = {
      labels: ['Protien', 'Carb', 'Fat'], // optional
      data: [
        macroNutrients.proteinDone / macroNutrients.proteinGoal,
        macroNutrients.carbDone / macroNutrients.carbGoal,
        macroNutrients.fatDone / macroNutrients.fatGoal
      ],
      strokeWidth: 2
    };
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            You burned <Text style={styles.caloriesText}>{caloriesDone}</Text> calories
            today
          </Text>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <ProgressChart
            data={data}
            width={SCREEN_WIDTH}
            height={200}
            chartConfig={{
              backgroundGradientFrom: '#F4F6FA',
              backgroundGradientTo: '#F4F6FA',
              color: (opacity = 1) => `rgba(114, 101, 290, ${opacity})`
            }}
          />
        </View>
        <View>
          <View style={styles.macroRowContainer}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.orangeBox} />
              <Text style={styles.macroNutrientName}>Protein</Text>
            </View>
            <Text style={styles.macroNutrientGrams}>{this.state.macroNutrients.proteinDone}g</Text>
            <Text style={styles.macroNutrientProcent}>
              {((this.state.macroNutrients.proteinDone / macroNutrients.proteinGoal) * 100).toPrecision(2)}%
            </Text>
          </View>
          <View style={styles.macroRowContainer}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.purpleBox} />
              <Text style={styles.macroNutrientName}>Carb</Text>
            </View>
            <Text style={styles.macroNutrientGrams}>{this.state.macroNutrients.carbDone}g</Text>
            <Text style={styles.macroNutrientProcent}>
              {((this.state.macroNutrients.carbDone / macroNutrients.carbGoal) * 100).toPrecision(2)}%
            </Text>
          </View>
          <View style={styles.macroRowContainerBorderless}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.greenBox} />
              <Text style={styles.macroNutrientName}>Fat</Text>
            </View>
            <Text style={styles.macroNutrientGrams}>{this.state.macroNutrients.fatDone}g</Text>
            <Text style={styles.macroNutrientProcent}>
              {((this.state.macroNutrients.fatDone / macroNutrients.fatGoal) * 100).toPrecision(2)}%
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={this.state.nutrition}
            renderItem={this.renderMeal}
            extraData={this.state}
            //keyExtractor={item => `${item.id}`}
            listKey={-1}
          />
        </View>

       <Modal
          isVisible={this.state.visibleModal === 'swipeable'}
          onSwipeComplete={() => {this.setState({ visibleModal: null }); this.closemodel()}}
          swipeDirection={['down']}
        >
          <ModalMealScreen toggleModal={this.toggleModal} />
        

        </Modal>

        <View style={styles.statisticContainer}>
          <Text style={styles.statisticTxt}>Statistic</Text>
                  <LineChart
              data={{
                labels: this.state.week_days,
                datasets: [
                  {
                    data: this.state.week_data,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 16} // from react-native
              height={240}
              yAxisLabel={' '}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#f5bf1d',
                backgroundGradientTo: '#ed800c',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 18,
                borderRadius: 16,
              }}
             />
        </View>

      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    nutritionDone: state.nutrition.nutritionDone,
    nutritionGoal: state.nutrition.nutritionGoal,
    nutrition: state.nutrition.nutrition
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMeal: mealId => dispatch({ type: 'REMOVE_MEAL', mealId })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NutritionScreen);

//initial alert screen for delete meal - line 221
/*
 <Modal isVisible={this.state.deleteModal}>
          <View style={styles.deleteContainer}>
            <Text style={styles.deleteTxt}>Are you sure you want to delete this meal?</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableHighlight
                underlayColor="rgba(73,182,77,1,0.9)"
                onPress={() => this.onPressDeleteMeal()}
              >
                <Text style={styles.deleteSecTxt}>Yes</Text>
              </TouchableHighlight>
              <Text> / </Text>
              <TouchableHighlight
                underlayColor="rgba(73,182,77,1,0.9)"
                onPress={() => this.onPressCancel()}
              >
                <Text style={styles.deleteSecTxt}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        */
