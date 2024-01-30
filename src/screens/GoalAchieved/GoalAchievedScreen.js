import React from 'react';
import { Text, View, TouchableHighlight, Image, Dimensions } from 'react-native';
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = width > height ? width : height;
const SCREEN_WIDTH = width < height ? width : height;
const circleRadius = (SCREEN_HEIGHT - 280 - 200) / 2; // 280 from the footer + header screen and 200 from the footer and header container
export default class GoalAchievedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: 'true',
    headerStyle: {
      height: 40
    }
  });
  constructor(props) {
    super(props);
  }

  onPressShare = () => {};

  onPressNotNow = () => {};

  render() {
    const stepsDone = 10000;
    return (
      <View style={styles.container}>
        <View style={styles.firstHalf}>
          <View style={styles.headerContainer}>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.props.toggleModal()}
              style={styles.deleteIcon}
            >
              <Image source={require('../../../assets/icons/deleteIcon.png')} />
            </TouchableHighlight>

            <Text style={styles.headerText}>Goal Achieved!</Text>
            <Text style={styles.headerText}>Share with friends!</Text>
          </View>
        </View>
        <View style={styles.secondHalf}>
          <View style={styles.footerContainer}>
            <TouchableHighlight
              style={styles.btnContainer}
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressShare()}
            >
              <Text style={styles.btnText}>Share to friend</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressNotNow()}
            >
              <Text style={styles.notNowText}>Not now</Text>
            </TouchableHighlight>
          </View>
        </View>
        <ScrollView style={styles.shareContainer}>
          <View style={styles.shareHeaderContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.userImg}
                source={{
                  uri:
                    'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-9/14064032_1211439115574722_4008304366512255154_n.jpg?_nc_cat=108&_nc_oc=AQnBE7o9_hppxwN1vTI9pf7psutWjHM8yrRyT8FujlPuDQfSeX6_t7n8L7OU6_G-428&_nc_ht=scontent.fotp1-1.fna&oh=dc47657793c14d6b1697f4e1af37bde6&oe=5DE8E357'
                }}
              />
              <Text style={styles.userName}>Chris Sacca</Text>
            </View>
            <Image style={styles.logo} source={require('../../../assets/icons/logo.png')} />
          </View>
          <View style={styles.circleContainer}>
            <ProgressCircle
              percent={100}
              radius={(SCREEN_WIDTH - 180) / 2}
              //radius={circleRadius < SCREEN_WIDTH - 100 ? circleRadius : SCREEN_WIDTH - 100}
              borderWidth={8}
              color="#7265e3"
              shadowColor="#ffff"
              bgColor="#ffff"
            >
              <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                <Image
                  style={styles.circleImg}
                  source={require('../../../assets/icons/walk.png')}
                />
                <Text style={styles.circleText}>{stepsDone} </Text>
                <Text style={{ fontWeight: '500', textAlign: 'center' }}>steps today</Text>
              </View>
            </ProgressCircle>
          </View>
          <View style={styles.rowContainer}>
            <View style={{ width: '40%', alignItems: 'center' }}>
              <Text style={styles.mainText}>1300</Text>
              <Text style={styles.secText}>Cal Burned</Text>
            </View>
            <View style={styles.line} />
            <View style={{ width: '40%', alignItems: 'center' }}>
              <Text style={styles.mainText}>10000</Text>
              <Text style={styles.secText}>Daily goal</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
