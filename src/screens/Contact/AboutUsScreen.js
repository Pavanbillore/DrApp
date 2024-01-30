import React from 'react';
import {Linking, AsyncStorage,ActivityIndicator,Text, View, TouchableHighlight,TouchableOpacity,TextInput, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';
import Toast from '../Toast/Toast';

export default  class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       data:[],
       loader:false
    };
    this.aboutus();
  }

  aboutus = () => {
     try {
      fetch(global.api_url+'user/aboutus', {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {console.warn(responseJson.data[0]);
          this.setState({data: responseJson.data[0]})
       })}
      catch (e) {
         console.log(e);
        //this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        //this.setState({loader:false})
      }
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <Image
              style={styles.proimglogo}
              source={require('../../../assets/icons/Drr.png')
              }
            />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.mainText}> Dr Bariatric </Text>
        </View>

        <View style={{marginTop:10,width:'100%',height:2,borderWidth:1,borderColor:'gray'}}></View>
        
        <ScrollView>
          <Text style={{color:'gray',fontSize:20,fontWeight:'bold',width:'100%',marginTop:10,fontStyle:'italic',textAlign:'center'}}>About Us</Text>
          <View style={{alignSelf:'center',alignItems:'center',justifyContent:'center',width:'95%',marginTop:10}}> 
            <Text style={{color:'gray',fontSize:16,textAlign:'justify'}}>{this.state.data.text}</Text>
          </View>
        </ScrollView>
    
     </View>
    );
  }
}



