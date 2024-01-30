import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import styles from './styles';

export default class LogoHeader extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor="rgba(73,182,77,1,0.9)"
          style={styles.iconContainer}
        >
          <Image style={styles.backIcon} source={require('../../../assets/icons/backIcon.png')} />
        </TouchableHighlight>

        <Image style={styles.logo} source={require('../../../assets/icons/logo.png')} />
      </View>
    );
  }
}
