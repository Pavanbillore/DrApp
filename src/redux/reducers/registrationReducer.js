const registrationState = {
  userPhoto:
    'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-9/14064032_1211439115574722_4008304366512255154_n.jpg?_nc_cat=108&_nc_oc=AQnBE7o9_hppxwN1vTI9pf7psutWjHM8yrRyT8FujlPuDQfSeX6_t7n8L7OU6_G-428&_nc_ht=scontent.fotp1-1.fna&oh=dc47657793c14d6b1697f4e1af37bde6&oe=5DE8E357',
  userName: 'Mark',
  userEmail: '',
  userPassword: '',
  userGender: '',
  userInterests: '',
  userHelp: ''
};

export const registrationReducer = (state = registrationState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'ADD_USEREMAIL': {
      newState.userEmail = action.email;
      break;
    }
    case 'ADD_USERNAME': {
      newState.userName = 'Mark';
      break;
    }
    case 'send': {
      newState.userName = action.userName;
      break;
    }
    case 'ADD_USERPHOTO': {
      newState.userPhoto = action.photo;
      break;
    }
    case 'ADD_USERPASSWORD': {
      newState.userPassword = action.password;
      break;
    }
    case 'ADD_USERGENDER': {
      newState.userGender = action.gender;
      break;
    }
    case 'ADD_USERINTERESTS': {
      newState.userInterests = action.interests;
      break;
    }
    case 'ADD_USERHELP': {
      newState.userHelp = action.help;
      break;
    }
    default:
      return newState;
  }
  return newState;
};
