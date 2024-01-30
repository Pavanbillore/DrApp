import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import styles from './styles';

class HelpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nutrition: false,
      weight: false,
      sleep: false,
      fitness: false
    };
  }

  onPressButton = () => {
    this.props.navigation.navigate('Interests');
    var arr = [];
    if (this.state.nutrition) {
      arr.push('nutrition');
    }
    if (this.state.weight) {
      arr.push('weight');
    }
    if (this.state.sleep) {
      arr.push('sleep');
    }
    if (this.state.fitness) {
      arr.push('fitness');
    }
    this.props.addUserHelp(arr);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LogoHeader
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />

        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Let us know how we can help you</Text>
          <Text style={styles.secText}>You always can change this later</Text>
        </View>
        <TouchableHighlight
          style={styles.helpContainer}
          underlayColor="rgba(73,182,77,1,0.9)"
          onPress={() => this.setState(prevState => ({ weight: !prevState.weight }))}
        >
          <View style={styles.rowContainer}>
            <Text style={styles.helpText}>Weight Loss</Text>
            <Image
              style={styles.icon}
              source={
                this.state.weight
                  ? require('../../../assets/icons/fullCircle.png')
                  : require('../../../assets/icons/emptyCircle.png')
              }
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.helpContainer}
          underlayColor="rgba(73,182,77,1,0.9)"
          onPress={() => this.setState(prevState => ({ sleep: !prevState.sleep }))}
        >
          <View style={styles.rowContainer}>
            <Text style={styles.helpText}>Better sleeping habbit</Text>
            <Image
              style={styles.icon}
              source={
                this.state.sleep
                  ? require('../../../assets/icons/fullCircle.png')
                  : require('../../../assets/icons/emptyCircle.png')
              }
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.helpContainer}
          underlayColor="rgba(73,182,77,1,0.9)"
          onPress={() => this.setState(prevState => ({ nutrition: !prevState.nutrition }))}
        >
          <View style={styles.rowContainer}>
            <Text style={styles.helpText}>Track my nutrition</Text>
            <Image
              style={styles.icon}
              source={
                this.state.nutrition
                  ? require('../../../assets/icons/fullCircle.png')
                  : require('../../../assets/icons/emptyCircle.png')
              }
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.helpContainer}
          underlayColor="rgba(73,182,77,1,0.9)"
          onPress={() => this.setState(prevState => ({ fitness: !prevState.fitness }))}
        >
          <View style={styles.rowContainer}>
            <Text style={styles.helpText}>Improve overall fitness</Text>
            <Image
              style={styles.icon}
              source={
                this.state.fitness
                  ? require('../../../assets/icons/fullCircle.png')
                  : require('../../../assets/icons/emptyCircle.png')
              }
            />
          </View>
        </TouchableHighlight>

        <ContinueButton onPress={() => this.onPressButton()} />
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
)(HelpScreen);
