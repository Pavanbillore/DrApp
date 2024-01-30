import React from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import styles from './styles';
import Toast from '../Toast/Toast';

class PasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }

  checkCharacters() {
    if (this.state.password.length < 8) return 1;
    return 0;
  }

  checkUpperCase() {
    if (this.state.password.toUpperCase() == this.state.password) return 1;
    return 0;
  }

  checkNumber() {
    return !/\d/.test(this.state.password);
  }

  onPressButton = () => {
    this.props.navigation.navigate('FingerPrint');
    this.props.addUserPassword(this.state.password);
  };

  next=() => {
    if(this.state.password){ 
       global.signupData={
         email:global.signupData.email,
         password:this.state.password,
       };
       //console.warn(global.signupData); 
       this.props.navigation.navigate('ProfilePicture'); 
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
          <Text style={styles.title}>Now let's set up your password</Text>
          <View style={styles.conditionContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry
                style={styles.input}
                placeholder="Enter your password"
                onChangeText={text => this.setState({ password: text })}
                textAlignVertical= 'top' />
            </View>

            <View style={styles.rowContainer}>
              <View style={this.checkCharacters() ? styles.emptyBox : styles.fullBox} />
              <Text style={styles.conditionText}>8+ characters</Text>
            </View>
            <View style={styles.rowContainer}>
              <View style={this.checkUpperCase() ? styles.emptyBox : styles.fullBox} />
              <Text style={styles.conditionText}>At least 1 uppercase</Text>
            </View>
            <View style={styles.rowContainer}>
              <View style={this.checkNumber() ? styles.emptyBox : styles.fullBox} />
              <Text style={styles.conditionText}>At least 1 number</Text>
            </View>
          </View>
          <ContinueButton
            onPress={this.next}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserPassword: password => dispatch({ type: 'ADD_USERPASSWORD', password })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(PasswordScreen);
