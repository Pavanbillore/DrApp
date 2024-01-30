import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import styles from './styles';
import Toast from '../Toast/Toast';

class GenderScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: '',
    };
  }

  onPressButton = () => {
    if(this.state.gender){
      global.signupData={
        email:global.signupData.email,
        password:global.signupData.password,
        help:global.signupData.help,
        image:global.signupData.image,
        gender:this.state.gender,
      };
      const data = new FormData();
      data.append('email',global.signupData.email);
      data.append('password',global.signupData.password);
     // data.append('help',global.signupData.help);
      data.append('image',global.signupData.image);
      data.append('gender',this.state.gender);
      //this.props.navigation.navigate('Success');

      try {
        fetch(global.api_url+'User/signupMain', {
          method: 'POST',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data'
          },
          body: data,
        }).then((response) => response.json())
        .then((res => {
          if(res.status==1){//console.error(res.data);
            global.userData = res.data[0];
            this.props.navigation.navigate('Success');
            this.props.addUserGender(this.state.gender);
          }else{
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('This User Already Registered !');
          }
        }));
      }
      catch (e) {
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        console.log(e)
      }

    }else{
      this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Please select your gender !');
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LogoHeader
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Toast ref = "hamaoToast"/>
        <View style={styles.middleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Which one are you?</Text>
          </View>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              style={styles.iconContainer}
              onPress={() => this.setState({ gender: 'male' })}
            >
              <View>
                <Image
                  style={styles.circle}
                  source={
                    this.state.gender == 'male'
                      ? require('../../../assets/icons/fullCircle.png')
                      : require('../../../assets/icons/emptyCircle.png')
                  }
                />
                <Image style={styles.icon} source={require('../../../assets/images/male.png')} />
                <Text style={styles.genderText}>Male</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              style={styles.iconContainer}
              onPress={() => this.setState({ gender: 'female' })}
            >
              <View>
                <Image
                  style={styles.circle}
                  source={
                    this.state.gender == 'female'
                      ? require('../../../assets/icons/fullCircle.png')
                      : require('../../../assets/icons/emptyCircle.png')
                  }
                />
                <Image style={styles.icon} source={require('../../../assets/images/female.png')} />
                <Text style={styles.genderText}>Female</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.secText}>
              To give you a better experience we need to know your gender
            </Text>
          </View>
        </View>
        <ContinueButton
          onPress={() => {
            this.onPressButton();
          }}
        />
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserGender: gender => dispatch({ type: 'ADD_USERGENDER', gender })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(GenderScreen);
