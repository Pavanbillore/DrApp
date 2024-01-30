import React from 'react';
import {AsyncStorage, View, Text,Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      username:'',
    }
    setInterval(() => {this._loginCheck()}, 1000);
  }
  
  goto=(s)=>{
    if(s=='Landing'){
      AsyncStorage.clear();
      global.user='';
      this.props.navigation.navigate(s);
    }else{
      this.props.navigation.navigate(s);
    }
  }

  _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data != null){
        this.setData(data);
        //this.props.navigation.navigate('Home');
      }else{
        //this.props.navigation.navigate('Landing');
    }
  };

  setData(data){ //console.warn(data); 
     var user_id=data.uid;
     fetch(global.api_url+'user/get_profile?id='+user_id,{
        method:"GET"
      })
        .then((response) => response.json())
        .then((responseJson) => {//console.warn(responseJson.data[0].profile);
           this.setState({
              data: responseJson.data[0],
           })
        })
       .catch((error) => {
          console.error(error);
       });
  }

  componentDidMount(){
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.header}>
          <Image style={styles.img} source={{uri:this.state.data.profile ? global.media_url+this.state.data.profile : global.default_user}} />
          <Text style={styles.txt}>{this.state.data.username}</Text>
          <Text style={styles.txts}>{this.state.data.email}</Text>
        </View>

        <View style={styles.container}>
          <MenuButton
            title="Home"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              this.goto('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Photo Album"
            source={require('../../../assets/icons/album3.png')}
            onPress={() => {
              this.goto('PhotoAlbum');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Community"
            source={require('../../../assets/icons/community.png')}
            onPress={() => {
              this.goto('Community');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Blogs"
            source={require('../../../assets/icons/articles.png')}
            onPress={() => {
              this.goto('Article');
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="Notifications"
            source={require('../../../assets/icons/notifications.png')}
            onPress={() => {
              this.goto('Notifications');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Settings"
            source={require('../../../assets/icons/settings.png')}
            onPress={() => {
              this.goto('Settings');
              navigation.closeDrawer();
            }}
          />
         
          <MenuButton
            title="Clinic Schedule"
            source={require('../../../assets/icons/schedule.png')}
            onPress={() => {
              this.goto('Calendar');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Contact Us"
            source={require('../../../assets/icons/contact.png')}
            onPress={() => {
              this.goto('Contact');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Logout"
            source={require('../../../assets/icons/logout.png')}
            onPress={() => {this.goto('Landing');navigation.closeDrawer()}}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
