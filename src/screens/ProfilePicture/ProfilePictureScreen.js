import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import styles from './styles';
import { profileIcons } from '../../data/dataArrays';
import { connect } from 'react-redux';
import Toast from '../Toast/Toast';

class ProfilePictureScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconId: -1,
      customPhoto: -1,
      image:'',
    };
  }

  onPressCard = item => {
    this.setState({
      iconId: item.id,
      image:item.url,
    });
  };

  onPressText = () => {};

  renderCard = item => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.onPressCard(item)}
      style={this.state.iconId == item.id ? styles.selectedCardContainer : styles.cardContainer}
    >
      <Image style={styles.cardImg} source={{ uri: item.url }} />
    </TouchableHighlight>
  );

  onPressButton = () => {
    if(this.state.image){
      global.signupData={
        email:global.signupData.email,
        password:global.signupData.password,
        image:this.state.image
      };
      this.props.navigation.navigate('Gender');
      this.props.addUserPhoto(
        'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-9/14064032_1211439115574722_4008304366512255154_n.jpg?_nc_cat=108&_nc_oc=AQnBE7o9_hppxwN1vTI9pf7psutWjHM8yrRyT8FujlPuDQfSeX6_t7n8L7OU6_G-428&_nc_ht=scontent.fotp1-1.fna&oh=dc47657793c14d6b1697f4e1af37bde6&oe=5DE8E357'
      );
    }else{
       this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Please select default profile !');
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
        <ScrollView
          horizontal={true}
          style={styles.carouselContainer}
          showsHorizontalScrollIndicator={false}
        >
          {profileIcons.map(item => this.renderCard(item))}
        </ScrollView>

        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Profile Picture</Text>
          <Text style={styles.secText}>
            You can select photo from one of this emoji or add your own photo as profile picture
          </Text>
          <TouchableHighlight
            underlayColor="rgba(73,182,77,1,0.9)"
            onPress={() => this.onPressText()}
          >
            <Text style={styles.customText}>Add Custom Photo</Text>
          </TouchableHighlight>
        </View>
        <ContinueButton onPress={this.onPressButton} />
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserPhoto: photo => dispatch({ type: 'ADD_USERPHOTO', photo })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ProfilePictureScreen);
