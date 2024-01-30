import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView, FlatList } from 'react-native';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import styles from './styles';
import { interests } from '../../data/dataArrays';
import { connect } from 'react-redux';

class InterestsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: []
    };
  }

  onPressCard = item => {
    var arr = this.state.selected;
    if (arr.includes(item)) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          break;
        }
      }
    } else {
      arr.push(item);
    }
    this.setState({
      selected: arr
    });
  };

  onPressButton = () => {
    this.props.navigation.navigate('Gender');
    this.props.addUserInterests(this.state.selected);
  };

  renderCard = ({ item }) => (
    <View>
      <TouchableHighlight
        underlayColor="rgba(73,182,77,1,0.9)"
        style={
          this.state.selected.includes(item.id)
            ? styles.selectedCardContainer
            : styles.cardContainer
        }
        onPress={() => this.onPressCard(item.id)}
      >
        <Image style={styles.cardImg} source={{ uri: item.icon }} />
      </TouchableHighlight>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        <LogoHeader
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.middleContainer}>
          <Text style={styles.mainText}>Time to customize your interests</Text>
          <View style={{ alignItems: 'center' }}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={interests}
              renderItem={this.renderCard}
              extraData={this.state}
              keyExtractor={item => `${item.id}`}
            />
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
    addUserInterests: interests => dispatch({ type: 'ADD_USERINTERESTS', interests })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(InterestsScreen);
