import React from 'react';
import { Text, View, TouchableHighlight, TextInput, Picker, Image, ScrollView } from 'react-native';
import styles from './styles';
//mport { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
import ProgressCircle from 'react-native-progress-circle';
import Modal from 'react-native-modal';
import GoalAchievedScreen from '../GoalAchieved/GoalAchievedScreen';
import LineChart from 'react-native-responsive-linechart';
import { lineChartConfig, lineChartData } from '../../data/dataArrays';

export default class StepsScreen extends React.Component {
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
          onPress={() => params.toggleModal()}
        >
          <Image
            style={styles.goalAchievedIcon}
            source={require('../../../assets/icons/goalAchieved.png')}
          />
        </TouchableHighlight>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      toggleModal: this.toggleModal
    });
  }
  
  constructor(props) {
    super(props);
    this.state = { 
           steps:'',
           modal: 'false',
     };

  }

  toggleModal = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  };

  render() {
    const { navigation } = this.props;
    var stepsDone = navigation.getParam('stepsDone');
    var stepsGoal = navigation.getParam('stepsGoal');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            You walked <Text style={styles.stepsText}>{stepsDone}</Text> steps today
          </Text>
          <View style={styles.circleContainer}>
            <ProgressCircle
              percent={(stepsDone / stepsGoal) * 100}
              radius={80}
              borderWidth={8}
              color="#7265e3"
              shadowColor="#ffff"
              bgColor="#F4F6FA"
            >
              <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                <Image
                  style={styles.circleImg}
                  source={require('../../../assets/icons/walk.png')}
                />
                <Text style={styles.circleText}>{(stepsDone / stepsGoal) * 100} % </Text>
                <Text style={{ fontWeight: '500', textAlign: 'center' }}>of daily goal</Text>
              </View>
            </ProgressCircle>
          </View>
        </View>
        
        <View style={styles.performanceContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.mainText}>1300</Text>
            <Text style={styles.secText}>Cal Burned</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.columnContainer}>
            <Text style={styles.mainText}>10000</Text>
            <Text style={styles.secText}>Daily goal</Text>
          </View>
        </View>
        </View>

          <View style={styles.statisticContainer}>
            <View style={styles.performanceRowContainer}>
              <View style ={styles.check2}>
                      <Text style={styles.mainText}>Set Daily Steps Goal: </Text>
              </View>
               <View style={styles.check1}>
                      <TextInput style={styles.inputs}
                      placeholder=" "
                      underlineColorAndroid='transparent'
                      value={this.state.steps}
                      onChangeText={(steps) => this.setState({steps})}/>
                </View>
            </View>
          </View>

          <View style={styles.statisticContainer}>
            <View style={styles.performanceRowContainer}>
               <View style={styles.filter1}>
                  <Text style={styles.setGoal1}>Filter By Date </Text>
                </View>
                <View style={styles.picker}>
                  <Picker
                    style={{ height:40, width: 120, }}
                   >
                    <Picker.Item label="Earliest Date " value=" " />
                    <Picker.Item label="23 june " value="23 june" />
                   </Picker>
                </View>
            
                <View style={styles.filter2}>
                  <Text style={styles.setGoal2}> To </Text>
                </View>
                <View style={styles.picker}>
                  <Picker
                    style={{ height: 40, width: 120, }}
                   >    
                    <Picker.Item label="Latest Date " value=" " />
                    <Picker.Item label="21 june " value="21 june" />
                   </Picker>
                </View>
           </View>
        </View>

      <View style={styles.performanceContainer}>
       <View style={styles.patienttview2}>
         <View style={styles.colmlist}>
              <View style={styles.colm11}>
                  <Text style={styles.date}> Date </Text>
               </View>
              <View style={styles.line1} />
              <View style={styles.colm11}>
                  <Text style={styles.date}> Steps </Text>
               </View>
               <View style={styles.line1} />
              <View style={styles.colm11}>
                  <Text style={styles.date}> Calories Burned</Text>
               </View>
         </View>
         <View style={styles.steps}>
              <View style={styles.colm11}>
                  <Text style={styles.add}> 21 june </Text>
               </View>         
               <View style={styles.line2} />
               <View style={styles.colm11}>
                  <Text style={styles.add}> 20 </Text>
               </View>
               <View style={styles.line2} />
              <View style={styles.colm11}>
                  <Text style={styles.add}> 200 grams </Text>
               </View>
         </View>
  
         <View style={styles.steps}>
              <View style={styles.colm11}>
                  <Text style={styles.add}> 22 june </Text>
               </View>
               <View style={styles.line2} />
              <View style={styles.colm11}>
                  <Text style={styles.add}> 37 </Text>
               </View>
              <View style={styles.line2} />
              <View style={styles.colm11}>
                  <Text style={styles.add}>500 grams </Text>
               </View>
        </View>

         <View style={styles.steps}>
              <View style={styles.colm11}>
                  <Text style={styles.add}> 23 june</Text>
               </View>
               <View style={styles.line2} />
              <View style={styles.colm11}>
                  <Text style={styles.add}> 40 </Text>
               </View> 
               <View style={styles.line2} />
              <View style={styles.colm11}>
                  <Text style={styles.add}> 50 grams</Text>
               </View>
         </View>
  
         <View style={styles.steps}>
              <View style={styles.colm11}>
                  <Text style={styles.add}> 24 june</Text>
               </View>
               <View style={styles.line2} />
              <View style={styles.colm11}>
                  <Text style={styles.add}> 40 </Text>
               </View>
               <View style={styles.line2} />
              <View style={styles.colm11}>
                  <Text style={styles.add}> 50 grams</Text>
               </View>
         </View>

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
            data={lineChartData}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.performanceContainer}>
            <View style={styles.performanceRowContainer}>
              <Image
                style={styles.performanceIcon}
                source={require('../../../assets/icons/goodFace.png')}
              />
              <View style={styles.perfromanceText}>
                <Text style={styles.mainText}>Best Performance</Text>
                <Text style={styles.secText}>Monday</Text>
              </View>
            </View>
            <Text style={styles.mainText}>10</Text>
          </View>
          <View style={styles.performanceContainerBorderless}>
            <View style={styles.performanceRowContainer}>
              <Image
                style={styles.performanceIcon}
                source={require('../../../assets/icons/badFace.png')}
              />
              <View style={styles.perfromanceTextContainer}>
                <Text style={styles.mainText}>Worst Performance</Text>
                <Text style={styles.secText}>Sunday</Text>
              </View>
            </View>
            <Text style={styles.mainText}>6</Text>
          </View>
        </View>
        <Modal isVisible={this.state.modal}>
          <GoalAchievedScreen toggleModal={this.toggleModal} />
        </Modal>
      </ScrollView>
    );
  }
}

//initial chart
/*
  <LineChart
            data={{
              labels: ['6AM', '9AM', '12AM', '3PM', '6PM'],
              datasets: [
                {
                  data: [0, 0, 0, 1000, 2000, 400, 3000, 0, 0, 0],
                  color: (opacity = 1) => `rgba(254, 156, 94, ${opacity})` // optional
                }
              ]
            }}
            width={SCREEN_WIDTH - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#ffff',
              backgroundGradientFrom: '#ffff',
              backgroundGradientTo: '#ffff',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(254, 156, 94, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
          />
          */
