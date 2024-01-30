import React from 'react';
import {ActivityIndicator,AsyncStorage, Text, View, TouchableHighlight,TouchableOpacity,TextInput, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles_form from './styles_form';
import Toast from '../Toast/Toast';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
//import DocumentPicker from 'react-native-document-picker';


export default class AddCommunityScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader:false,
      data:[],
      name:'',
      description:'',
      uid:'',
      ImageUrl:null,
      ImageData: null,
      ImageSource: null,
      image: '',
    };
   this._loginCheck()  
 }

  _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data != null){
        this.set(data);
      }else{
        this.props.navigation.navigate('Landing');
    }
  };
  set(data){ //console.warn(data); 
     var user_id=data.uid;
     this.setState({
        uid: user_id,
     })
  }


  Create = () => {
   if(this.state.name && this.state.description && this.state.ImageUrl){
     this.setState({loader: true})
     var data = new FormData();     
      data.append("uid", this.state.uid);
      data.append("name", this.state.name);
      data.append("description", this.state.description);
      data.append("image",this.state.image);
      try {
      fetch(global.api_url+'user/add_community', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({loader: false})
          if(responseJson.status == 1){
            this.setState({name:'',description:'',ImageUrl:null})
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Community Added Succesffuly..');
          }else{
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Change Something..');
         }
       })}
      catch (e) {
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        this.setState({loader:false})
      }
    }else{
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Fill required fields..');
    }        
  }  

  selectImage() {
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
          console.warn(source);
          this.setState({
            ImageSource: source,
            ImageUrl: response.uri,
            ImageData: response.data
          });
       }
      this.userImage(); 
    });    
  }

   userImage = () => {
    //console.warn(this.state.post_id);
     RNFetchBlob.fetch('POST', global.api_url+'user/file_uploads', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        {name: 'image', filename: this.state.ImageUrl, type: 'image/png', data: this.state.ImageData},
      ]).then((resp) => {
         var newone= JSON.parse(resp.data);
         if(newone.msg!='no'){
           //console.warn(newone.data);
          this.setState({
            image:newone.data,
          });
           //this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Profile Image Updated Successfully !');
         }
      }).catch((err) => {
        // ...
      })
   }


  render() {
    return (
      <ScrollView style={styles_form.container}>
        <Toast ref = "hamaoToast"/>
         <TouchableOpacity onPress={()=>this.selectImage()} style={styles_form.textContainer}>
           {this.state.ImageUrl ==null ?
            <Image
              style={styles_form.proimg}
              source={require('../../../assets/icons/album3.png')}
            />
            :
            <Image
              style={styles_form.proimg}
              source={{uri:this.state.ImageUrl}}
            />
          }
          <Text style={{width:'100%',textAlign:'center',fontSize:20,color:'black'}}>+ Add Photo</Text>
        </TouchableOpacity>

        <View style={{}}>
          <Text style={styles_form.mainText}> </Text>
        </View>
       
          <View style={[styles_form.TextView,{marginTop:20}]}>
             <TextInput
               value={this.state.name}  
               onChangeText={ TextInputValue => this.setState({ name : TextInputValue }) }
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>
          </View>

          <View style={[styles_form.TextView,{height:100}]}>
              <TextInput
               value={this.state.description}  
               onChangeText={ TextInputValue => this.setState({ description : TextInputValue }) }
               underlineColorAndroid = "transparent"
               placeholder = "Description"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>
          </View>
       
          <TouchableOpacity onPress={this.Create} style={styles_form.btnContainer}>
            {this.state.loader ?
              <ActivityIndicator color="white" size="small" />
               :
              <Text style={styles_form.btnText}>Create</Text>
            }              
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserHelp: help => dispatch({ type: 'ADD_USERHELP', help })
  };
}
