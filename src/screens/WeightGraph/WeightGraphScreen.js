import React from 'react';
import { Text, View, CheckBox,TouchableOpacity,TextInput, Picker, TouchableHighlight, Image, ScrollView, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';
import { connect } from 'react-redux';

class WeightGraphScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      headerStyle: {
        backgroundColor: '#F4F6FA',
        elevation: 0,
        height: 60,
        shadowColor: 'transparent',
        borderBottomWidth: 0
      },
      headerLeft: (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
       paragraph:'',
       checked2:false,
       checked3:false,
       unchecked:false,
    };
}

  uploadFile() {
    // first set the isButtonDisabled to true
    this.setState({
      isButtonDisabled: true
    });
    // then do your thing
  }

  render() {

   return (
    <View style={styles.container}>
      <ScrollView>
       
        <View style={styles.bmilistview}>
           <View style={styles.bmilistview}>

           <View style={styles.list}>
              <View style={styles.check2}>
                  <Text style={styles.address}>My Weight: </Text>
               </View>
              <View style={styles.check1}>
                  <TextInput style={styles.inputs}
                  placeholder="75"
                  underlineColorAndroid='transparent'
                  keyboardType='Number'
                  value={this.state.weight}
                  onChangeText={(weight) => this.setState({weight})}/>
              </View>
            </View>

            <View style={styles.list}>
                <View style={styles.check2}>
                   <Text style={styles.address}>My Height: </Text>
                </View>
                <View style={styles.check1}>
                  <TextInput style={styles.inputs}
                  placeholder=""
                  underlineColorAndroid='transparent'
                  keyboardType='Number'
                  value={this.state.title}
                  onChangeText={(title) => this.setState({title})}/>
                </View>
           </View>

            <View style={styles.list}>
                <View style={styles.check2}>
                   <Text style={styles.address}>My BMI: </Text>
                 </View>
                 <View style={styles.check1}>
                 <TextInput style={styles.inputs}
                  placeholder=""
                  underlineColorAndroid='transparent'
                  keyboardType='Number'
                  value={this.state.title}
                  onChangeText={(title) => this.setState({title})}/>
                  </View>
            </View>

           <View style={styles.list}>
                <View style={styles.check2}>
                   <Text style={styles.address}>My Goal BMI: </Text>
                 </View>
                 <View style={styles.check1}>
                 <TextInput style={styles.inputs}
                  placeholder=""
                  underlineColorAndroid='transparent'
                  keyboardType='Number'
                  value={this.state.title}
                  onChangeText={(title) => this.setState({title})}/>
                  </View>
            </View>
         
           <View style={styles.list}>
                <View style={styles.check2}>
                   <Text style={styles.address}>My Goal Weight: </Text>
                 </View>
                 <View style={styles.check1}>
                 <TextInput style={styles.inputs}
                  placeholder=""
                  underlineColorAndroid='transparent'
                  keyboardType='Number'
                  value={this.state.title}
                  onChangeText={(title) => this.setState({title})}/>
                  </View>
            </View>
         </View>

           <View style={styles.bmilistview}>
             <TouchableOpacity style={styles.graph}>
                  <Image
                    style={styles.icon}
                    source={require('../../../assets/icons/graph.jpg')}
                  />  
             </TouchableOpacity>
          </View>
          <Text style={styles.text}> To-do-list:</Text>
           
           <View style={styles.bmilistview}>
             <TouchableOpacity style={styles.graph}>
                 <TextInput style={styles.inputpara}
                  placeholder="paragraph"
                  underlineColorAndroid='transparent'
                  keyboardType='paragraph'
                  value={this.state.paragraph}
                  onChangeText={(paragraph) => this.setState({paragraph})}/>
             </TouchableOpacity>
          </View>

      <View style={styles.bmilistview}>
         
           <View style={styles.list}>
              <View style={styles.check2}>
                  <Text style={styles.address}>Add Checklist: </Text>
               </View>
              <View style={styles.picker}>
                  <Picker
                    style={{ height: 50, width: 150, }}
                   >
                    <Picker.Item label=" " value="if Others: is selected:" />
                    <Picker.Item label="Open up in pop up: " value="Open up in pop up:" />
                    <Picker.Item label="Allow admin to create a new checklist: " value="Allow admin to create a new checklist:" />
                    <Picker.Item label="[] (type in words): " value="[] (type in words):" />
                    <Picker.Item label="[+] Add new point: " value="[+] Add new point:" />
                    <Picker.Item label="[Save]: " value="[Save]:" />
                   </Picker>
               </View>
            </View>
          
           <View style={styles.list}>
              <View style={styles.check2}>
                  <Text style={styles.address}>Date to be completed: </Text>
               </View>
              <View style={styles.picker}>
                 <Picker
                    style={{ height: 50, width: 150, }}
                  >
                    <Picker.Item label=" " value="if Others: is selected:" />
                    <Picker.Item label="Open up in pop up: " value="Open up in pop up:" />
                    <Picker.Item label="Allow admin to create a new checklist: " value="Allow admin to create a new checklist:" />
                  </Picker>
              </View>
            </View>
          
           <View style={styles.list}>
              <View style={styles.check2}>
                  <Text style={styles.address}> Time to be completed: </Text>
               </View>
               <View style={styles.timepick}>
                    <Picker style={{ height: 50, width: 70, }} >
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="01 " value="01" />
                    </Picker>
                </View>
                <View style={styles.timepick}>
                   <Picker style={{ height: 50, width: 70, }} >
                    <Picker.Item label="PM" value="PM" />
                    <Picker.Item label="AM " value="AM" />
                  </Picker>
                 </View>
            </View>

              <View style={styles.check2}>
                  <Text style={styles.label}>Add More Checklist </Text>
               </View>
      </View>
          <Text style={styles.text}> Patient's Schedule:</Text>
      <View style={styles.patienttview}>
         <View style={styles.colmlist}>
              <View style={styles.colm}>
                  <Text style={styles.address}> S/N </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}> Date & Time </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}> Venue </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}> Doctor </Text>
               </View>
              <View style={styles.colm2}>
                  <Text style={styles.address}> Action</Text>
               </View>
         </View>
         <View style={styles.list}>
              <View style={styles.colm}>
                  <Text style={styles.address}>1. </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}>22/09,02 PM </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}>Indore </Text>
               </View>
              <View style={styles.colm}>
                  <Text style={styles.address}>Siya </Text>
               </View>
              <View style={styles.colm2}>
                  <Text style={styles.button}> Remind </Text>
                  <Text style={styles.button}> Edit </Text>
                  <Text style={styles.button}> Delete </Text>
              </View>
         </View>
         <View style={styles.list}>
              <View style={styles.colm}>
                  <Text style={styles.address}>2. </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}>23/07 </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}>Dewas </Text>
               </View>
              <View style={styles.colm}>
                  <Text style={styles.address}>Raj </Text>
               </View>
              <View style={styles.colm2}>
                  <Text style={styles.button}> Remind </Text>
                  <Text style={styles.button}> Edit </Text>
                  <Text style={styles.button}> Delete </Text>
              </View>
         </View>
         <View style={styles.list}>
              <View style={styles.colm}>
                  <Text style={styles.address}>3. </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}>24/08 </Text>
               </View>
              <View style={styles.colm1}>
                  <Text style={styles.address}>Dhar </Text>
               </View>
              <View style={styles.colm}>
                  <Text style={styles.address}>Rohan </Text>
               </View>
              <View style={styles.colm2}>
                  <Text style={styles.button}> Remind </Text>
                  <Text style={styles.button}> Edit </Text>
                  <Text style={styles.button}> Delete </Text>
              </View>
         </View>
     </View>

     

     </View>
       
   
    </ScrollView>

   </View>

  );
 }
}

export default connect(
  )(WeightGraphScreen);
