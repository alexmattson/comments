import UserConstants from './constants';

const initialState = {
  id: 654321,
  prefrences: {
    sorting: 'time'
  }
};

const UserReducer = (state = initialState, action) => {
  switch(action.type){
    case UserConstants.CHANGE_SORTING:
      return {
        ...state,
        prefrences: {
          ...state.prefrences,
          sorting: action.payload
        }
      }
    default:
      return state;
  }
};

export default UserReducer;
