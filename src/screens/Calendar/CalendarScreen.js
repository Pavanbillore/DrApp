import React from 'react';
import { Text, View,CheckBox, TouchableOpacity, TouchableHighlight, Image, ScrollView, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import MenuImage from '../../components/MenuImage/MenuImage';
import DatePicker  from 'react-native-datepicker';
import styles from './styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { connect } from 'react-redux';
import LogoHeader from '../../components/LogoHeader/LogoHeader';

class CalendarScreen extends React.Component {
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
      selectedStartDate: null,
       checked:true,
       checked1:false,
       checked2:false,
       unchecked:false,
    };
    this.state = {date:"15-05-2018"}

  }
 
  
  render() {
      
   return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Calendar</Text>
               <Calendar
              // Specify style for calendar container element. Default = {}
              style={{
              }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              theme={{
                backgroundColor: '#7265E3',
                calendarBackground: '#7265E3',
                textSectionTitleColor: '#b3b5b5',
                textSectionTitleDisabledColor: '#dcdede',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#44f7fc',
                dayTextColor: '#f5eeed',
                textDisabledColor: '#c1c1c1',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                disabledArrowColor: '#dcdede',
                monthTextColor: 'blue',
                indicatorColor: 'blue',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
            />
        </View>
       
        <Text style={styles.label}>To do list: </Text>
        <View style={styles.titleContainer2}>
            
            <View style={styles.checkboxContainer}>
              <View style={styles.check1}>
                <Text style={styles.secText}>Complete Pre-ops </Text>
              </View>
              <View style={styles.check2}>
                  <CheckBox
                      value={this.state.checked}
                      onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
              </View>
            </View>

            <View style={styles.checkboxContainer}>
                <View style={styles.check1}>
                   <Text style={styles.secText}>Do not drink water </Text>
                </View>
                <View style={styles.check2}>
                  <CheckBox
                      value={this.state.checked1}
                      onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
                    />
                </View>
           </View>

            <View style={styles.checkboxContainer}>
                <View style={styles.check1}>
                  <Text style={styles.secText}>Do not eat </Text>
                 </View>
                 <View style={styles.check2}>
                   <CheckBox
                    value={this.state.checked2}
                    onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
                  />
                  </View>
            </View>

            <View style={styles.checkboxContainer}>
               <View style={styles.check1}>
                  <Text style={styles.secText}>Sleep early </Text>
               </View>
               <View style={styles.check2}>
                 <CheckBox
                      value={this.state.unchecked}
                      onValueChange={() => this.setState({ unchecked: !this.state.unchecked })}
                    />
              </View>
             </View>
        </View>
                
      <Text style={styles.label}>Next Appointment: </Text>

       <View style={styles.checkboxContainer}>
          <Text style={styles.secText}> 13/12/2020 at  </Text>
          <Text style={styles.date}> Digestive Center  </Text>
       </View>
      
       <Text style={styles.label}> Address: </Text>
         <View style={styles.titleContainer2}>
          <View style={styles.checkbox}>
           <Text numberOfLines={4} style={styles.address}>32 ,Mount Elizabeth #12-14 Mount Elizabeth Medical center Singapore 228510 Tel: 643634636  Fax: 643634636  </Text>
          </View>
        </View>

     <View style={styles.titleContainer2}>
       <View style={styles.Container}>
          <TouchableOpacity style={styles.button1}>
            <Image
              style={styles.icon}
              source={require('../../../assets/icons/phone.png')}
            />  
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Image
              style={styles.icon}
              source={require('../../../assets/icons/whatsapp.png')}
            />
          </TouchableOpacity>
      </View>
   </View>

      </ScrollView>
    );
  }
}



export default connect(
  )(CalendarScreen);
