import React from 'react';
import {Platform, AsyncStorage,ActivityIndicator,Text, View, CheckBox,TouchableOpacity,Dimensions,TextInput, TouchableHighlight, Image, ScrollView, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';
import { connect } from 'react-redux';
import GoalAchievedScreen from '../GoalAchieved/GoalAchievedScreen';
import LineChart from 'react-native-responsive-linechart';
import { lineChartConfig, lineChartData } from '../../data/dataArrays';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
import Toast from '../Toast/Toast';

class BmiGraphScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerStyle: {
        backgroundColor: '#7265E3',
        elevation: 0,
        height: 30,
        shadowColor: 'transparent',
        borderBottomWidth: 0
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.backIcon} source={require('../../../assets/icons/left_arrow.png')} />
        </TouchableOpacity>
      )
    };
  };


  constructor(props) {
    super(props);
    this.state = {
       isButtonDisabled : false,
       checked:true,
       checked2:false,
       checked3:false,
       unchecked:false,
       weight:'',
       height:'',
       bmi:'',
       goal_bmi:'',
       goal_weight:'',
       loader:false,
       data:[],
       dates: ['21 jan', '22 jan', '23 jan', '24 jan','25 jan',],
       datas: [100,12,0,0,0,0,0],
    };
    this._loginCheck();
}
  componentDidMount() {
    this.getd();
  }
  getd=async ()=>{
     var res = await api.getdata('user/get_health/'+global.userdata.uid);
     if(res){
        //this.setState({dates: res.dates, datas: res.datas});
        console.warn(res);
     }
  }

  uploadFile() {
    // first set the isButtonDisabled to true
    this.setState({
      isButtonDisabled: true
    });
    // then do your thing
  }

_loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data){
         //console.warn(data.uid);
         this.setState({data:data});
         //console.warn(this.state.data.uid);
      }
  };

  submit=()=>{
   if(this.state.weight && this.state.height && this.state.bmi && this.state.goal_bmi && this.state.goal_weight){
     this.setState({loader:true});
     var data = new FormData();     
      data.append("uid", this.state.data.uid);
      data.append("weight", this.state.weight);
      data.append("height", this.state.height);
      data.append("bmi", this.state.bmi);
      data.append("goal_bmi", this.state.goal_bmi);
      data.append("goal_weight", this.state.goal_weight);

     try {
      fetch(global.api_url+'user/add_health_data', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({loader:false,visibleModal:false})
          if(responseJson.status == 1){//console.error(responseJson.user_data[0]);
            this.setState({weight:'',height:'',bmi:'',goal_bmi:'',goal_weight:''})
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Data Added Succesffuly !');
          }else{
            //this.setState({comment:''})
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong !');
         }
       })}
      catch (e) {
        this.setState({loader:false})
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        //this.setState({loader:false})
      }
    }else{
      this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Please Write Something.');
    }
  }

  render() {
   return (
      <ScrollView style={styles.container}>
          <Text style={styles.title1}>My Weight Goal & Bmi</Text>
       
          <Toast ref = "hamaoToast"/>
        <View style={styles.titleContainer}>
            <View style={styles.checkboxContainer}>
               <View style={styles.check2}>
                  <Text style={styles.mainText}>My Weight: </Text>
               </View>
              <View style={styles.check1}>
                  <TextInput style={styles.inputs}
                  placeholder=" "
                  underlineColorAndroid='transparent'
                  keyboardType={Platform.os=='android' ? 'Number' : 'numeric' }
                  value={this.state.weight}
                  onChangeText={(weight) => this.setState({weight})}/>
              </View>
            </View>

            <View style={styles.checkboxContainer}>
                <View style={styles.check2}>
                   <Text style={styles.mainText}>My Height: </Text>
                </View>
                <View style={styles.check1}>
                  <TextInput style={styles.inputs}
                  placeholder=""
                  underlineColorAndroid='transparent'
                  keyboardType={Platform.os=='android' ? 'Number' : 'numeric' }
                  value={this.state.height}
                  onChangeText={(height) => this.setState({height})}/>
                </View>
           </View>

            <View style={styles.checkboxContainer}>
                <View style={styles.check2}>
                   <Text style={styles.mainText}>My BMI: </Text>
                 </View>
                 <View style={styles.check1}>
                 <TextInput style={styles.inputs}
                  placeholder=""
                  underlineColorAndroid='transparent'
                  keyboardType={Platform.os=='android' ? 'Number' : 'numeric' }
                  value={this.state.bmi}
                  onChangeText={(bmi) => this.setState({bmi})}/>
                  </View>
            </View>

           <View style={styles.checkboxContainer}>
                <View style={styles.check2}>
                   <Text style={styles.mainText}>My Goal BMI: </Text>
                 </View>
                 <View style={styles.check1}>
                 <TextInput style={styles.inputs}
                  placeholder=""
                  underlineColorAndroid='transparent'
                  keyboardType={Platform.os=='android' ? 'Number' : 'numeric' }
                  value={this.state.goal_bmi}
                  onChangeText={(goal_bmi) => this.setState({goal_bmi})}/>
                  </View>
            </View>
          <View style={styles.checkboxContainer}>
                <View style={styles.check2}>
                   <Text style={styles.mainText}>My Goal Weight: </Text>
                 </View>
                 <View style={styles.check1}>
                 <TextInput style={styles.inputs}
                  placeholder=""
                  underlineColorAndroid='transparent'
                  keyboardType={Platform.os=='android' ? 'Number' : 'numeric' }
                  value={this.state.goal_weight}
                  onChangeText={(goal_weight) => this.setState({goal_weight})}/>
                  </View>
            </View>

              <TouchableOpacity onPress={this.submit} activeOpacity={0.5} style={{marginTop:15,borderRadius:100,width:'90%',backgroundColor:'#7265E3',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                {this.state.loader===true ?
                 <ActivityIndicator size="large" color="white" /> 
                 :
                 <Text style={{textAlign:'center',color:'white',padding:10}}>Save</Text> 
                }
              </TouchableOpacity>

        </View>          

          <Text style={styles.title2}> BMI </Text>
       
      <View style={styles.titleContainer}>
         <View style={styles.checkboxContainer}>
            <View style={styles.check2}>
               <Text style={styles.mainText}> 30 or more </Text>
            </View>
           <TouchableOpacity  style={styles.checkview1}>
            <Text style={styles.date2}> Obese</Text>
           </TouchableOpacity>

       
      </View>
       
       <View style={styles.checkboxContainer}>
          <View style={styles.check2}>
             <Text style={styles.mainText}> 25-30 </Text>
          </View>
           <TouchableOpacity onPress={() =>this.setState({stateExample:'Overweight'})} style={styles.checkview}>
            <Text style={styles.date}>
             Overweight  </Text>
         </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
         <View style={styles.check2}>
            <Text style={styles.mainText}> 18.5-25 </Text>
         </View>
        <TouchableOpacity style={styles.checkview1}>
       <Text  type='submit'
        onClick={() => this.uploadFile()}
        disabled={this.state.isButtonDisabled} style={styles.date2}>  Healthy  </Text>
         </TouchableOpacity>
      </View>

       <View style={styles.checkboxContainer}>
          <View style={styles.check2}>
             <Text style={styles.mainText}> less than 18.5 </Text>
          </View>
           <TouchableOpacity style={styles.checkview1}>
           <Text  type='submit'
        onClick={() => this.uploadFile()}
        disabled={this.state.isButtonDisabled} style={styles.date2}>  Underweight  </Text>
           </TouchableOpacity>
       </View>
   </View>

       <View style={styles.statisticContainer}>
          <Text style={styles.statisticTxt}>Statistic</Text>
          <LineChart
            style={{
              width: SCREEN_WIDTH - 10,
              height: 220,
              alignSelf: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              marginRight: 20
            }}
            config={lineChartConfig}
            data={this.state.datas}
          />
        </View>


      </ScrollView>
    );
  }
}

export default connect(
  )(BmiGraphScreen);
