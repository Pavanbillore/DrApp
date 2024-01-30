import React from 'react';
import { Text, View, TouchableHighlight,Dimensions, Image, TextInput, Picker, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import {LineChart} from 'react-native-chart-kit';
import api from '../../../Api';

const { width, height } = Dimensions.get('window');

class WaterScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#F4F6FA',
        elevation: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0
      }
    };
  };

  constructor(props) {
    super(props);
        this.state = {
       waterGoal:'',
       water: 1,
       dates: [],
       datas: [100,12,0,0,0,0,0],
       tareekh: [],
    };

  }
  componentDidMount() {
    this.getd();
  }
  getd=async ()=>{
     var res = await api.getdata('user/get_water/'+global.userdata.uid);
     if(res){
       var data = []; 
       res.datas.forEach((d)=> {data.push(parseInt(d))});
        this.setState({water: res.today, dates: res.dates, datas: data, tareekh: res.tareekh});
        this.props.updateWater(parseInt(res.today), parseInt(res.total));
     }
  }
  increament=async ()=>{
     var res = await api.submitData([], 'user/add_water/'+global.userdata.uid);
     if(res){
       this.props.incrementWater();
     }
  } 
  decreament=async ()=>{
     var res = await api.submitData([], 'user/delete_water/'+global.userdata.uid);
     if(res){
       this.props.decrementWater();
     }
  } 

  renderGlass = ({ item }) => {
    return (
      <View style={styles.waterContainer}>
        {item < this.props.waterDone ? (
          <TouchableHighlight
            underlayColor="rgba(73,182,77,1,0.9)"
            onPress={() => this.decreament()}
          >
            <Image style={styles.glass} source={require('../../../assets/icons/fullGlass.png')} />
          </TouchableHighlight>
        ) : (
          <TouchableHighlight
            underlayColor="rgba(73,182,77,1,0.9)"
            onPress={() => this.increament()}
          >
            <View>
              <Image
                style={styles.glass}
                source={require('../../../assets/icons/emptyGlass.png')}
              />
              <Image style={styles.plus} source={require('../../../assets/icons/plus.png')} />
            </View>
          </TouchableHighlight>
        )}
      </View>
    );
  };

  render() {
    const waterArray = new Array(this.props.waterGoal).fill(null).map((u, i) => i);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            You drank <Text style={styles.waterText}>{this.props.waterDone} glasses</Text>{' '}
            today
          </Text>
        </View>
        <View style={styles.photoContainer}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={4}
            data={waterArray}
            renderItem={this.renderGlass}
            extraData={this.state}
            keyExtractor={item => `${item}`}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.mainText}>{this.props.waterDone*50} ml</Text>
            <Text style={styles.secText}>Water Drank</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.columnContainer}>
            <Text style={styles.mainText}>{this.props.waterGoal} glasses</Text>
            <Text style={styles.secText}>Daily goal</Text>
          </View>
        </View>
        <View
          style={
            this.props.waterDone <= this.props.waterGoal / 2
              ? styles.redContainer
              : styles.greenContainer
          }
        >
          <Text
            style={
              this.props.waterDone <= this.props.waterGoal / 2 ? styles.redText : styles.greenText
            }
          >
            {this.props.waterDone <= this.props.waterGoal / 2
              ? 'You didn\'t drink enough water for today.'
              : 'You drank enough water for now.'}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
{/*          <View style={styles.performanceContainer}>
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

          <View style={styles.performanceContainer}>
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
*/}
          <View style={styles.performanceContainer}>
            <View style={styles.performanceRowContainer}>
               <View style={styles.check2}>
                   <Text style={styles.mainText}>Set Daily Water Goal:</Text>
               </View>
               <View style={styles.check1}>
                    <TextInput style={styles.inputs}
                    placeholder=" "
                    underlineColorAndroid='transparent'
                    keyboardType='text'
                    value={this.state.waterGoal}
                    onChangeText={(waterGoal) => this.setState({waterGoal})}/>
                </View>
             </View>
          </View>
       
        <View style={styles.performanceContainer}>
            <View style={styles.steps}>
               <View style={styles.filter1}>
                  <Text style={styles.setGoal1}>Filter By Date</Text>
                </View>
                <View style={styles.picker}>
                  <Picker
                    style={{ height:40, width: 110, }}
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
                    style={{ height: 40, width: 110, }}
                   >    
                    <Picker.Item label="Latest Date " value=" " />
                    <Picker.Item label="21 june " value="21 june" />
                   </Picker>
                </View>
           </View>
        </View>

      <View style={styles.performanceContainer}>
       <View style={styles.waterin}>
         <View style={styles.colmlist}>
              <View style={styles.colmview}>
                  <Text style={styles.greenText22}> Date </Text>
               </View>
              <View style={styles.line} />
              <View style={styles.colmview}>
                  <Text style={styles.greenText22}> Water Intake </Text>
               </View>
         </View>
         {this.state.dates.map((d, index)=>{
           return(
             <View style={styles.steps}>
                  <View style={styles.colmview}>
                      <Text style={styles.address}> {d} </Text>
                   </View>
                  <View style={styles.line1} />
                  <View style={styles.colmview}>
                      <Text style={styles.address}> {this.state.datas[index]} Cups</Text>
                   </View>
             </View>
           )
         })}
  

      </View>
    </View>

        <View style={styles.statisticContainer}>
           <Text style={styles.statisticTxt}>Statistic</Text>
            <LineChart
              data={{
                labels: this.state.tareekh,
                datasets: [
                  {
                    data: this.state.datas,
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
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
    </View>

      
       </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    waterDone: state.water.waterDone,
    waterGoal: state.water.waterGoal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementWater: () => dispatch({ type: 'INCREMENT_WATER' }),
    decrementWater: () => dispatch({ type: 'DECREMENT_WATER' }),
    updateWater: (waterDone, waterGoal) => dispatch({ type: 'update', waterDone:waterDone, waterGoal: waterGoal }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterScreen);
