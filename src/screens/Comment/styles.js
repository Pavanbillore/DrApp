import { StyleSheet } from 'react-native';
import { post } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontFamily: 'Rubik'
  },
  postContainer: { ...post.postContainer },
  rowContainer: post.rowContainer,
  authorImg: post.authorImg,
  authorName: post.authorName,
  date: post.date,
  postImg: post.postImg,
  postTitle: post.postTitle,
  icon: post.icon,
  iconText: post.iconText,
  likesContainer: {
    padding: 10,
    paddingLeft: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    marginTop: 10
  },
  commentsContainer: {
    paddingTop: 0,
    padding: 30
  },
  commentTitle: {
    fontSize: 20,
    color: '#2d3142',
    fontWeight: 'bold'
  },
  commentContainer: {
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#ffffff',
    borderColor: 'silver',
    borderTopWidth: 0.5,
    width: '100%'
  },
  commentContainerBorderless: {
    marginTop: 10,
    paddingTop: 20,
    backgroundColor: '#ffffff',
    width: '100%'
  },
  commentText: {
    color: '#2d3142',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 50
  },
  writeCommentContainer: {
    borderTopWidth: 0.5,
    borderColor: '#9c9eb9',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    padding: 15,
    justifyContent: 'center'
  },
  writeCommentText: {
    fontSize: 14,
    color: '#9c9eb9'
  },
  backArrow: {
    width: 25,
    height: 25,
    margin: 20,
    marginBottom: 0
  }
});

export default styles;
