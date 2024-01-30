const waterState = {
  waterDone: 0,
  waterGoal: 0
};

export const waterReducer = (state = waterState, action) => {
  switch (action.type) {
    case 'INCREMENT_WATER': {
      state = { ...state, waterDone: state.waterDone + 1 };
      break;
    }
    case 'update': {
      state = { ...state, waterDone: action.waterDone, waterGoal: action.waterGoal };
      break;
    }
    case 'DECREMENT_WATER': {
      state = { ...state, waterDone: state.waterDone - 1 };
      break;
    }
    default:
      return state;
  }
  return state;
};
