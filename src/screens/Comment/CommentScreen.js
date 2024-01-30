import React from 'react';
import {AsyncStorage, Text, View, TouchableHighlight, Image, ScrollView, TextInput, FlatList ,ActivityIndicator} from 'react-native';
import styles from './styles';
import styles_popup from './styles_popup';
import Modal from 'react-native-modal';
import CreateCommentScreen from '../CreateComment/CreateCommentScreen';
import { connect } from 'react-redux';
import Toast from '../Toast/Toast';

class CommentScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#ffffff',
      elevation: 0,
      shadowColor: 'transparent',
      borderBottomWidth: 0
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      visibleModalId: null,
      comment:'',
      loader:false,
      blog_id:'',
      community_id:'',
      data:[],
    };
    this._loginCheck();
  }
  
  _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data){
         //console.warn(data.uid);
         this.setState({data:data});
         //console.warn(this.state.data.uid);
      }
  };

  toggleModal = () => {
    this.setState({
      visibleModal: null
    });
  };

  add_comment=(id,page)=>{
   if(this.state.comment){
     this.setState({ loader: true })
     var data = new FormData();     
      data.append("comment", this.state.comment);
      if(page == 'Community'){
        data.append("community_id", id);
      }else {
        data.append("community_id", 0);
      }
      if(page == 'blog'){
        data.append("blog_id", id);
      }else {
        data.append("blog_id", 0);
      }
      data.append("uid", this.state.data.uid);
      data.append("username", this.state.data.username);
      data.append("image", this.state.data.profile);

     try {
      fetch(global.api_url+'user/add_comment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({loader:false,visibleModal:false})
          if(responseJson.status == 1){//console.error(responseJson.user_data[0]);
            this.setState({comment:''})
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Comment Added Succesffuly !');
          }else{
            this.setState({comment:''})
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong !');
         }
       })}
      catch (e) {
        this.setState({comment:'',loader:false})
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        //this.setState({loader:false})
      }
    }else{
      this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Please Write Something.');
    }  

  }

  renderComment = ({ item, index }) => (
    <View style={index == 0 ? styles.commentContainerBorderless : styles.commentContainer}>
      <View style={styles.rowContainer}>
        <Image style={styles.authorImg} source={{ uri: item.image ? global.media_url+item.image : global.default_user}} />
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.authorName}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <Text style={styles.commentText}>{item.comment}</Text>
    </View>
  );

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const pageName = navigation.getParam('pageName');
    const userPhoto = navigation.getParam('userPhoto');
    const userName = navigation.getParam('userName');
    const itemId = navigation.getParam('itemId');
    const item = navigation.getParam('item');
    //console.log(item);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
         <Toast ref = "hamaoToast"/>
          <View>
            <View style={styles.rowContainer}>
              {pageName == 'Community' && 
               <Image style={styles.authorImg} source={{ uri: item.profile ? global.media_url+item.profile : global.default_user}} />
              }
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.authorName}>{userName ? userName : item.category}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
            <Text style={styles.postTitle}>{item.name}</Text>
            <Image style={styles.postImg} source={{ uri: global.media_url+item.image }} />
            <View style={styles.likesContainer}>
              <TouchableHighlight
                underlayColor="rgba(73,182,77,1,0.9)"
                onPress={() => params.onPressLike(item.blog_id)}
              >
                <Image
                  style={styles.icon}
                  source={
                    item.liked
                      ? require('../../../assets/icons/fillLike.png')
                      : require('../../../assets/icons/like.png')
                  }
                />
              </TouchableHighlight>
              <Text style={styles.iconText}>{item.likes}</Text>
              <Image style={styles.icon} source={require('../../../assets/icons/comments.png')} />
              <Text style={styles.iconText}>{item.comments}</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentsContainer}>
          <Text style={styles.commentTitle}>Comments</Text>
          <View style={{ marginBottom: 100 }}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              data={item.comment_list}
              renderItem={this.renderComment}
              extraData={this.state}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        </View>
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.9)"
          style={styles.writeCommentContainer}
          onPress={() => this.setState({ visibleModal: 'swipeable' })}
        >
          <Text style={styles.writeCommentText}>Write comment...</Text>
        </TouchableHighlight>
        <Modal
          isVisible={this.state.visibleModal === 'swipeable'}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={['down']}
        >

          <ScrollView style={styles_popup.container}>
            <Toast ref = "hamaoToast"/>
            <View style={styles_popup.middleContainer}>
              <View style={styles_popup.bar}></View>
              <Text style={styles_popup.title}>Create Comment</Text>
              <View style={styles_popup.rowContainer}>
                <Image style={styles_popup.authorImg} source={{ uri: this.props.userPhoto }} />
                <TextInput
                  style={styles_popup.input}
                  placeholder="Share your thoughts..."
                  onChangeText={text => this.setState({ comment: text })}
                  value={this.state.text}
                />
              </View>
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 20 }}>
              <View style={styles_popup.confirmContainer}>
                <View style={styles_popup.row}>

                </View>
  
                <TouchableHighlight
                  style={styles_popup.btnContainer}
                  underlayColor="rgba(73,182,77,1,0.9)"
                  onPress={() => this.add_comment(itemId,pageName)}
                >
                  {this.state.loader ?
                     <ActivityIndicator size="small" color="white" /> 
                    :
                    <Text style={styles_popup.btnText}>Post</Text>
                  }

                </TouchableHighlight>

              </View>
            </View>
          </ScrollView>

        </Modal>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.community.posts
  };
}

export default connect(mapStateToProps)(CommentScreen);
