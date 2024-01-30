import React from 'react';
import {ActivityIndicator,AsyncStorage, Text, View, TouchableHighlight,TouchableOpacity,TextInput, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';
import Toast from '../Toast/Toast';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader:false,
      data:[],
      username:'',
      email:'',
      phone:'',
      address:'',
      uid:'',
    };
   this._loginCheck()  
 }

  _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data != null){
        this.get_profile(data);
      }else{
        this.props.navigation.navigate('Landing');
    }
  };

  get_profile(data){ //console.warn(data); 
     var user_id=data.uid;
     fetch(global.api_url+'user/get_profile?id='+user_id,{
        method:"GET"
      })
        .then((response) => response.json())
        .then((responseJson) => {//console.warn(responseJson.data[0].profile);
           this.setState({
              uid: responseJson.data[0].uid,
              username: responseJson.data[0].username,
              email: responseJson.data[0].email,
              phone: responseJson.data[0].phone,
              address: responseJson.data[0].address,
           })
        })
       .catch((error) => {
          console.error(error);
       });
  }

  update = () => {
     this.setState({loader: true})
     var data = new FormData();     
      data.append("uid", this.state.uid);
      data.append("username", this.state.username);
      data.append("email", this.state.email);
      data.append("phone", this.state.phone);
      data.append("address", this.state.address);
      
      try {
      fetch(global.api_url+'user/edit_profile', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {//console.warn(responseJson.data[0].address);
          this.setState({loader: false})
          if(responseJson.status == 1){
            this.setState({
              username:responseJson.data[0].username,
              email:responseJson.data[0].email,
              phone:responseJson.data[0].phone,
              address:responseJson.data[0].address,
            })
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Profile Updated Succesffuly..');
          }else{
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Change Something..');
         }
       })}
      catch (e) {
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        this.setState({loader:false})
      }      
  }  

  render() {
    return (
      <ScrollView style={styles.container}>
        <Toast ref = "hamaoToast"/>
        <View style={styles.textContainer}>
            <Image
              style={styles.proimg}
              source={{uri:global.user ? global.media_url+global.user : global.default_user}}
            />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.mainText}> {this.state.username} </Text>
          <Text style={styles.secText}>{this.state.email}</Text>
        </View>
        
          <View style={styles.TextView}>
            <Text style={styles.helpText}>Name:</Text>
             <TextInput
               value={this.state.username}  
               onChangeText={ TextInputValue => this.setState({ username : TextInputValue }) }
               underlineColorAndroid = "transparent"
               placeholder = ""
               placeholderTextColor = "#081349"
               autoCapitalize = "none"/>
          </View>

          <View style={styles.TextView}>
            <Text style={styles.helpText}>Email:</Text>
                <TextInput
               value={this.state.email}  
               onChangeText={ TextInputValue => this.setState({ email : TextInputValue }) }
               underlineColorAndroid = "transparent"
               placeholder = ""
               placeholderTextColor = "#081349"
               autoCapitalize = "none"/>
          </View>
       
          <View style={styles.TextView}>
            <Text style={styles.helpText}>Phone:</Text>
              <TextInput
               value={this.state.phone}  
               onChangeText={ TextInputValue => this.setState({ phone : TextInputValue }) }
               underlineColorAndroid = "transparent"
               placeholder = ""
               placeholderTextColor = "#081349"
               autoCapitalize = "none"/>
          </View>
         
          <View style={styles.TextView}>
            <Text style={styles.helpText}>Address:</Text>
               <TextInput
               value={this.state.address}  
               onChangeText={ TextInputValue => this.setState({ address : TextInputValue }) }
               underlineColorAndroid = "transparent"
               placeholder = ""
               placeholderTextColor = "#081349"
               autoCapitalize = "none"/>
          </View>
          <TouchableOpacity onPress={this.update} style={styles.btnContainer}>
            {this.state.loader ?
              <ActivityIndicator color="white" size="small" />
               :
              <Text style={styles.btnText}>Update</Text>
            }              
          </TouchableOpacity>
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
)(ProfileScreen);
