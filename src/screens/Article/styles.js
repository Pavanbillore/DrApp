import { StyleSheet } from 'react-native';
import { post } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    fontFamily: 'Rubik'
  },
  blog: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign:'center',
  },
  rowContainerView: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop:0
  },
   header: {
    marginBottom:-118,
    padding:30,
    width:'100%',
    backgroundColor: '#7265E3',
    borderColor: '#ffffff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomWidth:1,
    justifyContent: 'center',
    alignSelf:'center',
  },
  backIcon:{
    width: 25,
    height: 25,
    margin: 10,
    alignSelf: 'center'
  },
  inscription: {
    height: 20,
    width: 20,
    marginRight: 10
  },
  cardImg: {
    width: 60,
    height: 60,
    borderRadius: 60,
    margin: 10,
    marginLeft: 0,
    marginRight: 20
  },
  carouselContainer: {
    margin: 20
  },
  detailText:{
    fontWeight:'bold',
    fontSize:15,
    color:'#c2c2c1',
    width:350,
  },
  postContainer: post.postContainer,
  rowContainer: post.rowContainer,
  authorImg: post.authorImg,
  authorName: post.authorName,
  date: post.date,
  postImg: post.postImg,
  postTitle: post.postTitle,
  icon: post.icon,
  iconText: post.iconText
});

export default styles;
