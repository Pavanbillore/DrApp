import React from 'react';
import {AsyncStorage, Text, View, CheckBox,TouchableOpacity,TextInput, Picker, TouchableHighlight, Image, ScrollView, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';
import { connect } from 'react-redux';
import Toast from '../Toast/Toast';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

class PhotoAlbumScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      headerStyle: {
        backgroundColor: '#F4F6FA',
        elevation: 0,
        height: 60,
        shadowColor: 'transparent',
        borderBottomWidth: 0
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.backIcon} source={require('../../../assets/icons/backIcon.png')} />
        </TouchableOpacity>
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
       paragraph:'',
       checked:true,
       checked3:false,
       unchecked:false,
       photos:[],
       uid:'',
       ImageUrl:null,
       ImageData: null,
       ImageSource: null,
       image: '',
    };
    this._loginCheck();
}

  uploadFile() {
    // first set the isButtonDisabled to true
    this.setState({
      isButtonDisabled: true
    });
    // then do your thing
  }

  _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data != null){
        this.get_photos(data);
      }else{
        this.props.navigation.navigate('Landing');
    }
  };

  get_photos = (data) => {
     var user_id=data.uid;
     this.setState({loader: true,uid:user_id})
     try {
      fetch(global.api_url+'user/get_photo/'+data.uid, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {console.warn();
          this.setState({photos: responseJson})
       })}
      catch (e) {
        //this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        //this.setState({loader:false})
      }
  }  

  selectImage(type) {
    const options = {
       quality: 1.0,
       maxWidth: 500,
       maxHeight: 500,
       title: 'Select Photo',
       mediaType: 'photo',
       storageOptions: {
         skipBackup: true,
       }
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      }
      else if (response.error) {
      }
      else if (response.customButton) {
      }
     else {
        let source = { uri: response.uri };
          //console.warn(source);
          this.setState({
            ImageSource: source,
            ImageUrl: response.uri,
            ImageData: response.data
          });
       }
      this.userImage(type); 
    });    
  }

   userImage = (type) => {
    //console.warn(this.state.post_id);
     RNFetchBlob.fetch('POST', global.api_url+'user/album_uploads', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        {name: 'image', filename: this.state.ImageUrl, type: 'image/png', data: this.state.ImageData},
        {name:'uid',data: String(this.state.uid)},
        {name:'type',data: type},
      ]).then((resp) => {//console.warn(resp);
         var newone= JSON.parse(resp.data);
         if(newone.status === 1){
           //console.warn(newone.data);
          this.setState({
            ImageUrl:null,
            photos:newone.data,
          });
           this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Album Uploaded Successfully !');
         }
      }).catch((err) => {
        // ...
      })
   }
  
  render() {
   return (
    <View style={styles.container}>
      <ScrollView>
         <View style={styles.dailystepview}>
           <Toast ref = "hamaoToast"/>
            <Text style={styles.takepic}>You have yet to take the Photo of the Day! </Text>

             <TouchableOpacity style={styles.filter}>
                <Text style={styles.take}> Take Photo of the day </Text>
              </TouchableOpacity>

              <View style={styles.steps}>
                   <TouchableOpacity onPress={()=>this.selectImage('front')} style={styles.check2}>
                      <Image style={styles.icon} source={require('../../../assets/icons/side_camera.png')} />  
                      <Text style={styles.date}> Front </Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.selectImage('side')} style={styles.check2}>
                      <Image style={styles.icon} source={require('../../../assets/icons/camera.png')} />  
                      <Text style={styles.date}> Side </Text>
                    </TouchableOpacity>
               </View>

              <View style={{width:'97%',height:50,backgroundColor:'#7265E3',alignSelf:'center',justifyContent:'center'}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:15,textAlign:'center',width:'100%'}}> All Albums </Text>
              </View>

               <View style={{flexDirection:'row',width:'100%',flexWrap: 'wrap',marginBottom:30,marginTop:0}}>
                {this.state.photos.map((item,i)=>{
                 return(
                    <View  style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                     <Text style={{textAlign:'center',width:'100%',fontSize:17,marginBottom:5,marginTop:20}}> {item.date} </Text>
                      <TouchableOpacity activeOpacity={0.9} >
                         <Image style={styles.cardImg} source={{ uri: item.photos ? global.media_url+item.photos : global.default_user}} />
                         <Text style={styles.date}> {item.type} </Text>
                      </TouchableOpacity>
                    </View>
                 )})}
               </View>
                {this.state.photos.length ==0 && 
                 <Text style={{color:'gray',fontSize:15,fontWeight:'bold',textAlign:'center',marginTop:100,width:'100%'}}>No Photo Uploaded Yet !</Text>
                }  
              <View style={{backgroundColor:'gray',width:'100%',height:0.7}} />

             <View style={styles.steps}>
                 <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                      />
                 <Text numberOfLines = {5} style={styles.only}> I have ended my weight-loss journey and it has been verified by the clinic.</Text>
             </View>
           <Text style={styles.only}> * This feature will only be for ObesityDocs patients.</Text>
          </View>

    </ScrollView>
 
  </View>

  );
 }
}

export default connect(
  )(PhotoAlbumScreen);
