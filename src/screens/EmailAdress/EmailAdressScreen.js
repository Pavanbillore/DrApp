import React from 'react';
import {Dimensions,ActivityIndicator,Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import styles from './styles';
import Toast from '../Toast/Toast';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

class EmailAdressScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loader:false,
    };
  }

  onPressButton = () => {
    this.props.addUserEmail(this.state.email);
    this.props.navigation.navigate('Password');
  };

  signup=() => {
   // this.props.navigation.navigate('Password');  
    if(this.state.email){ 
      this.setState({loader:true})
      const data = new FormData();
      data.append('email',this.state.email);
       global.signupData={email:this.state.email}
  
       try {
        fetch(global.api_url+'User/email_verify', {
          method: 'POST',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data',
          },
          body: data,
        }).then((response) => response.json())
        .then((res => {
          this.setState({loader:false})
          if(res.status==1){
            global.signupData={email:this.state.email}
            this.props.navigation.navigate('Password');  
          }else{
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('This User Already Registered !');
          }
        }));
      }
      catch (e) {
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        console.log(e)
        this.setState({loader:false})
      }
      }else{
       this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('All Fields Are Required !');
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={styles.container}>
          <LogoHeader
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />

          <Toast ref = "hamaoToast"/>
          <Text style={styles.title}>What is your email address?</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              onChangeText={text => this.setState({ email: text })}
              textAlignVertical= 'top' />
          </View>

          {!this.state.loader ?
           <ContinueButton onPress={this.signup} />
           :
           <View style={{paddingTop:5,backgroundColor:'#7265E3',alignSelf:'center',alignItems:'center',width:SCREEN_WIDTH - 100,height:50,borderRadius:60}}>
             <ActivityIndicator size="large" color="white" /> 
           </View>
          }
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserEmail: email => dispatch({ type: 'ADD_USEREMAIL', email })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(EmailAdressScreen);
