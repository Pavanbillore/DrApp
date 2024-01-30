import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,AsyncStorage,ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import Toast from '../Toast/Toast';
import api from '../../../Api';

class ModalMealScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: 'true',
    headerStyle: {
      height: 60
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      loader:false,
      mealData:'',
      foodData:[],
      meal: [
        { id: 0, name: 'Snack', check: false },
        { id: 1, name: 'Lunch', check: false },
        { id: 2, name: 'Dinner', check: false },
        { id: 3, name: 'Breakfast', check: false }
      ],
      foods: [
        {
          id: 0,
          name: 'Chicken',
          calories: 150,
          protein: 100,
          carbs: 50,
          fat: 50,
          quantity: 200,
          check: false
        },
        {
          id: 1,
          name: 'Pasta',
          calories: 150,
          protein: 100,
          carbs: 50,
          fat: 50,
          quantity: 200,
          check: false
        },
        {
          id: 2,
          name: 'Cereal',
          calories: 300,
          protein: 100,
          carbs: 50,
          fat: 50,
          quantity: 200,
          check: false
        },
        {
          id: 3,
          name: 'Milk',
          calories: 100,
          protein: 100,
          carbs: 50,
          fat: 50,
          quantity: 200,
          check: false
        },
        {
          id: 4,
          name: 'Eggs',
          calories: 300,
          protein: 100,
          carbs: 50,
          fat: 50,
          quantity: 200,
          check: false
        },
        {
          id: 5,
          name: 'Bannana',
          calories: 150,
          protein: 100,
          carbs: 50,
          fat: 50,
          quantity: 200,
          check: false
        },
        {
          id: 6,
          name: 'Apple',
          calories: 100,
          protein: 100,
          carbs: 50,
          fat: 50,
          quantity: 200,
          check: false
        }
      ]
    };
    this._loginCheck();
  }

 _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data){
         this.setState({data:data});
         //console.warn(this.state.data.uid);
      }
  };

  checkValidation = () => {
    let mealArr = this.state.meal;
    let foodArr = this.state.foods;
    var mealValid,
      foodValid = 0;
    mealArr.map(data => {
      if (data.check) {
        mealValid = 1;
      }
    });
    foodArr.map(data => {
      if (data.check) {
        foodValid = 1;
      }
    });
    if (mealValid && foodValid) {
      return 1;
    } else {
      return 0;
    }
  };

  onPressAdd = () => {
    let mealType = '';
    this.state.meal.map(data => {
      if (data.check) {
        mealType = data.name;
      }
    });
     // this.setState({mealData:mealType})
    
    let foodsArr = [];
    this.state.foods.map(data => {
      if(data.check) {
        foodsArr.push(data);
      }
      //this.setState({foodData:foodsArr})
    //  console.warn(foodsArr);
    });

    var id = 0;
    if (this.props.nutrition.length > 0) {
      id = this.props.nutrition[this.props.nutrition.length - 1].id + 1;
    }
    let meal = {
      id: id,
      meal: mealType,
      foods: foodsArr
    };

    this.props.toggleModal();
    //this.props.addMeal(meal);
    this.submitData();
  };
  submitData=async ()=>{
   this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
     this.setState({loader:true});
     var res = await api.submitData(this.state.foodData,'user/add_nutrition_data');
     this.setState({loader:false,visibleModal:false});
     console.warn(res);
     if(res){
        if(res.status == 1){
          //console.warn(res);
          //this.setState({weight:'',height:'',bmi:'',goal_bmi:'',goal_weight:''})
          this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Data Added Succesffuly !');
        }else{
          this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong !');
        }
     }else{
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
     }
  } 

  onPressMeal = id => {
    let arr = this.state.meal;
    arr.map(data => {
      if (!data.check && data.id == id) {
        data.check = true;
        global.foods = {name: 'meal', value: data.name};
      } else {
        data.check = false;
      }
    });
    this.setState({
      meal: arr
    });
  };

  onPressFood = id => {
    let arr = this.state.foods;
    var f=[];
    arr.map(data => {
      if (!data.check && data.id == id) {
        data.check = true;
      } else if (data.check && data.id == id) {
        data.check = false;
      }
      if(data.check){
        f.push(data);
      }
    });
    var meal = this.state.foodData.meal;
    var foods = [global.foods, {name: 'foods', value: JSON.stringify(f)}];
    this.setState({
      food: arr,
      foodData: foods
    });
  };

  renderMeal = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.onPressMeal(item.id)}
    >
      <View style={styles.mealContainer}>
        <Image
          style={styles.circle}
          source={
            item.check
              ? require('../../../assets/icons/fullCircle.png')
              : require('../../../assets/icons/emptyCircle.png')
          }
        />
        <Text style={styles.mealTitle}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  renderFood = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.onPressFood(item.id)}
    >
      <View style={styles.foodRowContainer}>
        <Text style={styles.foodTitle}>{item.name}</Text>
        <Image
          style={styles.circle}
          source={
            item.check
              ? require('../../../assets/icons/fullCircle.png')
              : require('../../../assets/icons/emptyCircle.png')
          }
        />
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        <Toast ref = "hamaoToast"/>
        <View style={styles.bar}></View>
        <View style={styles.titleContainer}>
          <Image style={styles.mealIcon} source={require('../../../assets/icons/mealIcon.png')} />
          <Text style={styles.mainTxt}>Choose food</Text>
          <Text style={styles.secTxt}>Select your meal and your foods that you consume today</Text>
        </View>

        <TouchableWithoutFeedback>
          <View>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={4}
              data={this.state.meal}
              renderItem={this.renderMeal}
              extraData={this.state}
              keyExtractor={item => `${item.id}`}
              listKey={0}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={this.state.foods}
              renderItem={this.renderFood}
              extraData={this.state}
              keyExtractor={item => `${item.id}`}
              listKey={1}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.9)"
          style={styles.btnContainer}
          onPress={() => this.onPressAdd()}
        >
          <Text style={styles.btnTxt}>Add</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    nutrition: state.nutrition.nutrition
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMeal: meal => dispatch({ type: 'ADD_MEAL', meal })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalMealScreen);
