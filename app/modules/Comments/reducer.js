import CommentConstants from './constants';
import moment from 'moment'
const {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
} = CommentConstants;

const initialState = {
  1233: {
    id: 1233,
    body: 'This is a really cool app!',
    owner: 765432,
    createdAt: moment.now(),
    lastEditedAt: moment.now(),
    likes: [765432]
  },
  1234: {
    id: 1234,
    body: 'I really like what you made here, keep up the good work.',
    owner: 765432,
    createdAt: moment.now(),
    lastEditedAt: moment.now(),
    likes: [654321, 765432, 876543]
  }
};

const CommentsReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_COMMENT:
       let newState = { ...state };
       delete newState[action.payload]
       return newState
    case EDIT_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case LIKE_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case UNLIKE_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};

export default CommentsReducer;
