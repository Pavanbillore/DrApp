import React from 'react';
import {Linking, AsyncStorage,ActivityIndicator,Text, View, TouchableHighlight,TouchableOpacity,TextInput, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';
import Toast from '../Toast/Toast';

class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      message:'',
      loader:false
    };
  }

  send = () => {
   if(this.state.email && this.state.name && this.state.phone && this.state.message){
     this.setState({loader: true})
     var data = new FormData();     
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("phone", this.state.phone);
      data.append("message", this.state.message);

     try {
      fetch(global.api_url+'user/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({loader: false})
          if(responseJson.status == 1){//console.error(responseJson.user_data[0]);
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Succesffuly Sent...');
          }else{
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
         }
       })}
      catch (e) {
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        this.setState({loader:false})
      }
    }else{
      this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Please fill all required fields.');
    }  
  }  
  clearText(){
    this.setState({
        name:'',
        email:'',
        phone:'',
        message:'',
    })
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textContainer}>
            <Image
              style={styles.proimg}
              source={require('../../../assets/icons/logo.png')
              }
            />
        </View>
        <Toast ref = "hamaoToast"/>

        <View style={styles.textContainer}>
          <Text style={styles.mainText}> Contact Us </Text>
        </View>
        
          <Text style={styles.helpText}>Name:</Text>
          <View style={styles.TextView}>
             <TextInput
               style={styles.input}
               value={this.state.name}  
               onChangeText={ TextInputValue => this.setState({ name : TextInputValue }) }
               keyboardType="default"
               placeholder = ""
               placeholderTextColor = "#081349"
               autoCapitalize = "none"/>
          </View>

           <Text style={styles.helpText}>Email:</Text>
           <View style={styles.TextView}>
              <TextInput
               style={styles.input}
               value={this.state.email}  
               onChangeText={ TextInputValue => this.setState({ email : TextInputValue }) }
               keyboardType="email-address"
               placeholder = ""
               placeholderTextColor = "#081349"
               autoCapitalize = "none"/>
          </View>
       
           <Text style={styles.helpText}>Phone:</Text>
           <View style={styles.TextView}>
              <TextInput
              style={styles.input}
               value={this.state.phone}  
               onChangeText={ TextInputValue => this.setState({ phone : TextInputValue }) }
               keyboardType="phone-pad"
               placeholder = ""
               placeholderTextColor = "#081349"
               autoCapitalize = "none"/>
          </View>
         
          <Text style={styles.helpText1}>Message:</Text>
          <View style={styles.TextView1}>
             <TextInput
               style={styles.input}
               value={this.state.message}  
               onChangeText={ TextInputValue => this.setState({ message : TextInputValue }) }
               keyboardType="message"
               placeholder = ""
               placeholderTextColor = "#081349"
               autoCapitalize = "none"/>
          </View>
          <TouchableOpacity style={styles.btnContainer} onPress={this.send}>
            {this.state.loader ?
              <ActivityIndicator color="white" size="small" />
               :
              <Text style={styles.btnText}>Send</Text>
            }
          </TouchableOpacity>

       <View style={styles.contactview}>
          <TouchableOpacity style={styles.button1}>
            <Image
              style={styles.icon1}
              source={require('../../../assets/icons/callnow.jpg')}
            />  
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Image
              style={styles.icon2}
              source={require('../../../assets/icons/whatsapp.png')}
            />
          </TouchableOpacity>
      </View>

      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserHelp: help => dispatch({ type: 'ADD_USERHELP', help })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ContactScreen);
