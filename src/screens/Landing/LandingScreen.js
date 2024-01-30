import React from 'react';
import {AsyncStorage, Text, View, TouchableHighlight, Image, Dimensions, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';
import { landingArray } from '../../data/dataArrays';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)">
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.photoUrl }} />
      </View>
    </TouchableHighlight>
  );

  onPressGetStarted = () => {
    this.props.navigation.navigate('Email');
  };

  onPressLogin = () => {
    this.props.navigation.navigate('SignIn');
  };

 _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      if(userToken){
         this.props.navigation.navigate('Home');
      }else{
         this.props.navigation.navigate('Landing');
      }
  };

  componentDidMount() {
    this._loginCheck();
  }

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.logo} source={require('../../../assets/icons/logo.png')} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{landingArray[activeSlide].title}</Text>
          <Text style={styles.description}>{landingArray[activeSlide].description}</Text>
        </View>
        <ScrollView style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={c => {
                this.slider1Ref = c;
              }}
              data={landingArray}
              renderItem={this.renderImage}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={index => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={landingArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.slider1Ref}
              tappableDots={!!this.slider1Ref}
            />
          </View>
        </ScrollView>
        <View style={styles.logContainer}>
          <TouchableHighlight
            underlayColor="rgba(73,182,77,1,0.9)"
            style={styles.btnContainer}
            onPress={() => this.onPressGetStarted()}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableHighlight>

          <View style={styles.bottomRowContainer}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressLogin()}
            >
              <Text style={styles.signText}>Sign in</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}
