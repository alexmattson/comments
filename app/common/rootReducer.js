import { combineReducers } from 'redux';
import CommentReducer from '../modules/Comments/reducer';
import UserReducer from '../modules/Users/reducer';

const RootReducer = combineReducers({
  currentUser: UserReducer,
  comments: CommentReducer,
});

export default RootReducer;
