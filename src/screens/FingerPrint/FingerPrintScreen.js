import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import styles from './styles';

export default class FingerPrintScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <LogoHeader
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={require('../../../assets/icons/fingerprint.png')} />
          <Text style={styles.boldText}>Enable Fingerpint</Text>
          <Text style={styles.normalText}>
            If you enable touch ID, you don't need to enter your password when you login.
          </Text>
        </View>
        <ContinueButton
          onPress={() => {
            this.props.navigation.navigate('ProfilePicture');
          }}
        />
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.9)"
          onPress={() => this.props.navigation.navigate('ProfilePicture')}
        >
          <Text style={styles.notNowText}>Not Now</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
