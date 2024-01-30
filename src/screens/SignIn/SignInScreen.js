import React from 'react';
import {Dimensions,AsyncStorage,ActivityIndicator,Text,View,TextInput,TouchableWithoutFeedback,Keyboard,ScrollView,Image,KeyboardAvoidingView} from 'react-native';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import Toast from '../Toast/Toast';
import styles from './styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loader:false,
    };
  }

  onPressButton = (d) => {
   if(d==1){
     this.props.navigation.navigate('Home',{id:d});
   }else{
     this.props.navigation.navigate('Home',{id:d});
   } 
  };

  onPressAccount = () => {};

 _storeToken = async (data) => {
    await AsyncStorage.setItem('loginData', JSON.stringify(data));
  }

  login = () => {
   if(this.state.email && this.state.password){
     this.setState({loader: true})
     var data = new FormData();     
      data.append("email", this.state.email);
      data.append("password", this.state.password);

     try {
      fetch(global.api_url+'user/login', {
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
            this._storeToken(responseJson.user_data[0]);
            global.userData = responseJson.user_data[0];
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Succesffuly logged in.');
            this.props.navigation.navigate('Home');
          }else{
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Invalid Email Address..');
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


  render() {
    return (
      <TouchableWithoutFeedback>
        <ScrollView style={styles.container}>
          <LogoHeader
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Toast ref = "hamaoToast"/>
          <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
              <Image style={styles.icon} source={require('../../../assets/icons/email.png')} />
              <TextInput
                style={styles.input}
                Keyboard="default"
                placeholder="Email Address"
                onChangeText={text => this.setState({ email: text })}
                //value={this.state.email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Image style={styles.icon} source={require('../../../assets/icons/password.png')} />
              <TextInput
                KeyboardType="default"
                secureTextEntry
                style={styles.input}
                placeholder="Password"
                onChangeText={text => this.setState({ password: text })}
                //value={this.state.password}
              />
            </View>
          </View>

{/*          <View style={styles.signContainer}>
            <Text style={styles.txt}>Sign in with</Text>
            <View style={styles.rowContainer}>
              <TouchableHighlight
                style={styles.iconContainer}
                onPress={() => this.onPressAccount()}
                underlayColor="rgba(73,182,77,1,0.9)"
              >
                <Image
                  style={styles.accountIcon}
                  source={require('../../../assets/icons/twitter.png')}
                />
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.iconContainer}
                onPress={() => this.onPressAccount()}
                underlayColor="rgba(73,182,77,1,0.9)"
              >
                <Image
                  style={styles.accountIcon}
                  source={require('../../../assets/icons/facebook.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.iconContainer}
                onPress={() => this.onPressAccount()}
                underlayColor="rgba(73,182,77,1,0.9)"
              >
                <Image
                  style={styles.accountIcon}
                  source={require('../../../assets/icons/google.png')}
                />
              </TouchableHighlight>
            </View>
          </View>*/}

         {this.state.loader ?
           <View style={{paddingTop:5,backgroundColor:'#7265E3',alignSelf:'center',alignItems:'center',width:SCREEN_WIDTH - 100,height:50,borderRadius:60}}>
             <ActivityIndicator size="large" color="white" /> 
           </View>
           :
           <ContinueButton onPress={() => this.login()} />
          }
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}
