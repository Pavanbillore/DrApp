import React from 'react';
import { AsyncStorage,Text, View, TouchableHighlight,TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import MenuImage from '../../components/MenuImage/MenuImage';
import CreatePostScreen from '../CreatePost/CreatePostScreen';
import { profilePictures } from '../../data/dataArrays';
import styles from './styles';
import { connect } from 'react-redux';
import Toast from '../Toast/Toast';

class ArticleScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
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
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      visibleModalId: null,
      userName: 'Babyye Swann',
      loader: false,
      posts: [],
      uid:'',
      userPhoto:
        'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-9/14064032_1211439115574722_4008304366512255154_n.jpg?_nc_cat=108&_nc_oc=AQnBE7o9_hppxwN1vTI9pf7psutWjHM8yrRyT8FujlPuDQfSeX6_t7n8L7OU6_G-428&_nc_ht=scontent.fotp1-1.fna&oh=dc47657793c14d6b1697f4e1af37bde6&oe=5DE8E357'
    };
    this._loginCheck();

  }

  _loginCheck = async () => {
    const userToken = await AsyncStorage.getItem('loginData');
      var data=JSON.parse(userToken);
      if(data != null){
        this.blogs(data);
      }else{
        this.props.navigation.navigate('Landing');
    }
  };


  blogs = (data) => {
     var user_id=data.uid;
     this.setState({loader: true,uid:user_id})
     try {
      fetch(global.api_url+'user/blogs', {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
          //console.warn(responseJson.data.length);
          this.setState({loader: false, posts: responseJson.data})
       })}
      catch (e) {
        this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Something Went Wrong..');
        this.setState({loader:false})
      }
  }  

  toggleModal = () => {
    this.setState({
      visibleModal: null
    });
  };

  renderCard = item => <Image style={styles.cardImg} source={{ uri: item.photo }} />;

  onPressPostComment(commentText, postId) {
    var posts = this.props.posts;
    var comment = {};
    posts.map(post => {
      if (post.id == postId) {
        let id = 2;
        if (post.comments.length != 0) {
          id = post.comments[post.comments.length - 1].id + 1;
        }
        comment = {
          text: commentText,
          authorName: this.props.userName,
          authorPhoto: this.props.userPhoto,
          time: '15 seconds',
          id: id
        };
      }
    });
    this.props.addComment(postId, comment);
  }

  onPressPostPost = postText => {
    var posts = this.props.posts;
    let post = {
      title: postText,
      photoUrl:
        'https://www.trickscity.com/wp-content/uploads/2017/10/facebook-profile-pictures-for-boy-hd.jpg',
      author: this.props.userName,
      authorImg: this.props.userPhoto,
      time: '15 seconds',
      id: posts[posts.length - 1].id + 1,
      likes: 0,
      liked: false,
      comments: []
    };
    this.props.addPost(post);
  };

  onPressLike = postId => {
    this.props.addLike(postId);
  };

 Like=(bid,i)=> {
    // console.warn(this.state.uid);
    var post = this.state.posts;
    if(post[i].like_me == '1'){
      post[i].likes = parseInt(post[i].likes)-1;
      post[i].like_me = '0';
    }else{
      post[i].likes = parseInt(post[i].likes)+1;
      post[i].like_me = '1';
    }
      this.setState({posts: post,});
      var data = new FormData();
      data.append("uid", this.state.uid);
      data.append("bid", bid);
     //console.warn(global.api_url+'user/like');

     fetch(global.api_url+'user/blike', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {console.warn(responseJson);
         if(responseJson.status==1){
            this.refs.hamaoToast.Default_Toast_Top_With_Different_Color('Liked !');
            //this.props.navigation.navigate('NavScreen4');
          }      
       })
      .catch(function(error) {
       console.warn(error);
      });
   }

  renderPost = ({ item,index }) => {
    return (
      <TouchableHighlight
        style={styles.postContainer}
        underlayColor="rgba(73,182,77,1,0.9)"
        onPress={() =>
          this.props.navigation.navigate('Comment', {
            userPhoto: this.props.image,
            userName: this.props.category,
            itemId: item.blog_id,
            item: item,
            pageName: 'blog',
            onPressPostComment: this.onPressPostComment.bind(this),
            onPressLike: this.onPressLike.bind(this)
          })
        }
      >
        <View>
          <View style={styles.rowContainerView}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={styles.authorName}>{item.category}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <Text style={styles.postTitle}>{item.name}</Text>
          <Image style={styles.postImg} source={{ uri: global.media_url+item.image }} />
          <View style={styles.rowContainer}>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.Like(item.blog_id,index)}
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
          <Text style={styles.detailText}>{item.description}</Text>

        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.blog}>Blog</Text>
        </View>
        <Modal
          isVisible={this.state.visibleModal === 'swipeable'}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={['down']}
        >
          <CreatePostScreen
            userPhoto={this.props.userPhoto}
            onPressPostPost={this.onPressPostPost}
            toggleModal={this.toggleModal}
          />
        </Modal>

        <ScrollView
          horizontal={true}
          style={styles.carouselContainer}
          showsHorizontalScrollIndicator={false}
        >
          {profilePictures.map(item => this.renderCard(item))}
        </ScrollView>

       <ScrollView style={{marginTop:20}}>
        <Toast ref = "hamaoToast"/>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={this.state.posts}
            renderItem={this.renderPost}
            extraData={this.state}
            keyExtractor={(item,index) => `${item.blog_id,index}`}
          />
        </View>
       </ScrollView>
    
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.community.posts,
    userName: state.registration.userName,
    userPhoto: state.registration.userPhoto
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: post => dispatch({ type: 'ADD_POST', post }),
    addLike: id => dispatch({ type: 'ADD_LIKE', id }),
    addComment: (postId, comment) => dispatch({ type: 'ADD_COMMENT', postId, comment })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleScreen);
