import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles';

export default class CreateCommentScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: 'true',
    headerStyle: {
      height: 60
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onPressPhoto = () => {};
  onPressPoll = () => {};
  onPressPostComment = () => {
    this.props.onPressPostPost(this.state.text);
    this.props.toggleModal();
  };
  onPressSmiley = () => {};

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.middleContainer}>
          <View style={styles.bar}></View>
          <Text style={styles.title}>Create Post</Text>
          <View style={styles.rowContainer}>
            <Image style={styles.authorImg} source={{ uri: this.props.userPhoto }} />
            <TextInput
              style={styles.input}
              placeholder="Share your thoughts"
              onChangeText={text => this.setState({ text: text })}
              value={this.state.text}
            />
          </View>
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 20 }}>
          <View style={styles.confirmContainer}>
            <View style={styles.row}>
              <TouchableHighlight
                underlayColor="rgba(73,182,77,1,0.9)"
                onPress={() => this.onPressPhoto()}
              >
                <Image style={styles.icon} source={require('../../../assets/icons/photo.png')} />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(73,182,77,1,0.9)"
                onPress={() => this.onPressSmiley()}
              >
                <Image style={styles.icon} source={require('../../../assets/icons/smiley.png')} />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(73,182,77,1,0.9)"
                onPress={() => this.onPressPoll()}
              >
                <Image style={styles.icon} source={require('../../../assets/icons/poll.png')} />
              </TouchableHighlight>
            </View>
            <TouchableHighlight
              style={styles.btnContainer}
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressPostComment()}
            >
              <Text style={styles.btnText}>Post</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}
