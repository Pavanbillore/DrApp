import React from 'react';
import {AsyncStorage, Text, View, TouchableHighlight,TouchableOpacity, ScrollView, Switch, Image } from 'react-native';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';
import { connect } from 'react-redux';

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#7265E3',
        elevation: 0,
        height: 40,
        shadowColor: 'transparent',
        borderBottomWidth: 0
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.backIcon} source={require('../../../assets/icons/left_arrow.png')} />
        </TouchableOpacity>
      )
  });

  constructor(props) {
    super(props);
  }

  fit=(screen)=>{
    this.props.navigation.navigate(screen);
  }

  logout=()=>{
    AsyncStorage.clear();
    global.user='';
    this.props.navigation.navigate('SignIn');
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity onPress={()=>this.fit('Profile')} style={styles.settingContainer} underlayColor="rgba(73,182,77,1,0.9)">
          <Text style={styles.settingText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableHighlight style={styles.settingContainer} underlayColor="rgba(73,182,77,1,0.9)">
          <Text style={styles.settingText}>Invite Friends</Text>
        </TouchableHighlight>
        <View style={styles.rowContainer}>
          <Text style={styles.settingText}>{this.props.settings[0].title}</Text>
          <Switch
            onValueChange={() => this.props.update(0)}
            value={this.props.settings[0].switch}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.settingText}>{this.props.settings[1].title}</Text>
          <Switch
            onValueChange={() => this.props.update(1)}
            value={this.props.settings[1].switch}
          />
        </View>
        <TouchableHighlight style={styles.settingContainer} underlayColor="rgba(73,182,77,1,0.9)">
          <Text style={styles.settingText}>Connect Device</Text>
        </TouchableHighlight>
        
        <TouchableOpacity onPress={()=>this.fit('AboutUs')} style={styles.settingContainer} underlayColor="rgba(73,182,77,1,0.9)">
          <Text style={styles.settingText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.logout} style={styles.settingContainer} underlayColor="rgba(73,182,77,1,0.9)">
          <Text style={styles.settingText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    update: id => dispatch({ type: 'UPDATE_SETTINGS', id })
  };
}

function mapStateToProps(state) {
  return {
    settings: state.setting.settings
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
