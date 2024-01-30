import { StyleSheet } from 'react-native';
import { post } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    fontFamily: 'Rubik'
  },
  title: {
    lineHeight: 30,
    fontSize: 30,
    color: '#ffffff',
    width:'90%',
    fontWeight: 'bold'
  },
  header: {
    marginBottom:-118,
    padding:30,
    width:'100%',
    flexDirection:'row',
    backgroundColor: '#7265E3',
    borderColor: '#ffffff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomWidth:1,
    justifyContent: 'flex-start',
    alignSelf:'flex-start',
  },

  titleContainer: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    justifyContent: 'flex-end',
    alignSelf:'flex-end',
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
