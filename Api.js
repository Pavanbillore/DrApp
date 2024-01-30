import React from 'react';

class Api {
 _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data){
         //console.warn(data.uid);
         this.setState({data:data});
         //console.warn(this.state.data.uid);
      }
  };
  getdata = async (url) => {
    try {
      var response = await fetch(global.api_url+url);
      var responseJson = await response.json();
      return responseJson;
    }catch (e) {
      return false;
    }
  }
  submitData = async (dataV, url)=>{
     var data = new FormData();   
     dataV.forEach((values)=>{
      data.append(values.name, values.value);
     });
     data.append('userID', global.userdata.uid);
     data.append('Password', global.userdata.password);
      try {
        var response = await fetch(global.api_url+url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: data,
        });
        var responseJson = await response.json();
        return responseJson;
      }catch (e) {
        //console.warn(e);
        return false;
      }
  } 
}
const api = new Api();
export default api;