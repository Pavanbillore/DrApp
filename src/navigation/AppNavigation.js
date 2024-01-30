/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import BmiGraphScreen from '../screens/BmiGraph/BmiGraphScreen';
import LandingScreen from '../screens/Landing/LandingScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import PhotoAlbumScreen from '../screens/PhotoAlbum/PhotoAlbumScreen';
import ArticleScreen from '../screens/Article/ArticleScreen';
import WeightGraphScreen from '../screens/WeightGraph/WeightGraphScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import EmailAdressScreen from '../screens/EmailAdress/EmailAdressScreen';
import FingerPrintScreen from '../screens/FingerPrint/FingerPrintScreen';
import PasswordScreen from '../screens/Password/PasswordScreen';
import HelpScreen from '../screens/Help/HelpScreen';
import ContactScreen from '../screens/Contact/ContactScreen';
import AboutUsScreen from '../screens/Contact/AboutUsScreen';
import GenderScreen from '../screens/Gender/GenderScreen';
import InterestsScreen from '../screens/Interests/InterestsScreen';
import ProfilePictureScreen from '../screens/ProfilePicture/ProfilePictureScreen';
import WaterScreen from '../screens/Water/WaterScreen';
import CommunityScreen from '../screens/Community/CommunityScreen';
import AddCommunityScreen from '../screens/Community/AddCommunityScreen';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import CommentScreen from '../screens/Comment/CommentScreen';
import CreatePostScreen from '../screens/CreatePost/CreatePostScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import CreateCommentScreen from '../screens/CreateComment/CreateCommentScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreeen';
import GoalAchievedScreen from '../screens/GoalAchieved/GoalAchievedScreen';
import NutritionScreen from '../screens/Nutrition/NutritionScreen';
import StepsScreen from '../screens/Steps/StepsScreen';
import PremiumScreen from '../screens/Premium/PremiumScreen';
import SuccessScreen from '../screens/Success/SuccessScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';
console.disableYellowBox = false;
global.user='';
global.default_user='http://curveinfotech.com/Bank/uploads/default_user.png';
global.api_url = 'https://curveinfotech.com/Bank/mobile_api/';
global.media_url = 'https://curveinfotech.com/Bank/uploads/';
global.appname = '';
global.signupData=[];
global.userData = {};

global.getrighttime = (t) => {
   var time = new Date(t+' UTC');
   var am = time.getHours() > '12' ? 'pm' : 'am';
   var hr = time.getHours() > '12' ? time.getHours()-12 : time.getHours();
   var min = time.getMinutes() > '10' ? time.getMinutes() : '0'+time.getMinutes();
   return (time.getMonth()+1)+'/'+time.getDate()+'/'+time.getFullYear()+' '+hr+':'+min+' '+am;
};
global.getrightdate = (t) => {
   var time = new Date(t+' UTC');
   var am = time.getHours() > '12' ? 'pm' : 'am';
   var hr = time.getHours() > '12' ? time.getHours()-12 : time.getHours();
   var min = time.getMinutes() > '10' ? time.getMinutes() : '0'+time.getMinutes();
   return (time.getMonth()+1)+'/'+time.getDate()+'/'+time.getFullYear();
};
global.getColor = {backgroundColor: "#081349",} ;

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Community: CommunityScreen,
    AddCommunity: AddCommunityScreen,
    PhotoAlbum: PhotoAlbumScreen,
    Article: ArticleScreen,
    BmiGraph: BmiGraphScreen,
    Water: WaterScreen,
    Contact: ContactScreen,
    AboutUs: AboutUsScreen,
    WeightGraph: WeightGraphScreen,
    Comment: CommentScreen,
    CreatePost: CreatePostScreen,
    Settings: SettingsScreen,
    CreateComment: CreateCommentScreen,
    Notifications: NotificationsScreen,
    GoalAchieved: GoalAchievedScreen,
    Nutrition: NutritionScreen,
    Calendar:CalendarScreen,
    Steps: StepsScreen,
    Premium: PremiumScreen,
    Success: SuccessScreen
  },
  {
    //initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
      },
      headerRight: <View />
    })
  }
);

const LandingNavigator = createStackNavigator(
  {
    Landing: LandingScreen,
    Email: EmailAdressScreen,
    FingerPrint: FingerPrintScreen,
    Password: PasswordScreen,
    Help: HelpScreen,
    Gender: GenderScreen,
    Interests: InterestsScreen,
    ProfilePicture: ProfilePictureScreen,
    SignIn: SignInScreen
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);
LandingNavigator.navigationOptions = ({ navigation }) => {
    var name = (navigation.state.index !== undefined ? navigation.state.routes[navigation.state.index] : navigation.state.routeName)
    let drawerLockMode = 'locked-closed'
    if (name.routeName != 'Landing' && name.routeName != 'Email' && name.routeName != 'Password' && name.routeName != 'FingerPrint' && name.routeName != 'Help' && name.routeName != 'ProfilePicture' && name.routeName != 'SignIn' && name.routeName != 'Interests' && name.routeName != 'Gender') {
        drawerLockMode = 'unlocked'
    }
    return {
        drawerLockMode,
    };
}

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
    Landing: LandingNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Landing',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);
