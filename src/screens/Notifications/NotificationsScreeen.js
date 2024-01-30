import React from 'react';
import {AsyncStorage, Text, View, TouchableHighlight,TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';
import { connect } from 'react-redux';

class NotificationsScreen extends React.Component {
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
    this.state={
      notifications:[],
    }
    this._loginCheck();
  }

_loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data != null){
        this.notification(data);
      }else{
    }
  };

  notification(data){
     try {
      fetch(global.api_url+'user/notification/'+data.uid, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({notifications: responseJson})
       })}
      catch (e) {
        //this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        //this.setState({loader:false})
      }
  }  

  countUnreadNotifications = () => {
    var count = 0;
    this.props.notifications.map(data => {
      if (!data.read) {
        count += 1;
      }
    });
    return count;
  };

  renderUnreadMark = read => {
    if (!read) return <View style={styles.unreadMark}></View>;
  };

  renderNotification = ({ item }) => (
   item !== null ?
    <TouchableHighlight
      style={styles.notificationContainer}
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.props.update(item.nid)}
    >
      <View>
        <View style={styles.rowContainer}>
          <Image style={styles.authorImg} source={{uri:item.profile ? global.media_url+item.profile : global.default_user }} />
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.authorName}>
              {item.username}
              <Text style={styles.notificationText}> {item.text}</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.notificationTime}>{item.dates}</Text>

      </View>
    </TouchableHighlight>
    :
    <Text style={{color:'gray',fontSize:15,textAlign:'center',marginTop:50}}>Notifications not found..</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.secText}> </Text>
        </View>
       
       <ScrollView>
        <View style={styles.notificationsContainer}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={this.state.notifications}
            renderItem={this.renderNotification}
            extraData={this.state}
            keyExtractor={item => `${item.nid}`}
          />
        </View>
       </ScrollView>
      
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    update: id => dispatch({ type: 'UPDATE_NOTIFICATIONS', id })
  };
}

function mapStateToProps(state) {
  return {
    notifications: state.notification.notifications
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsScreen);
