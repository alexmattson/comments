import CommentConstants from './constants';
import moment from 'moment';
// id should be given by API so harded coded for now
let id = 1234;

export const addComment = ({ body, owner }) => {
  id += 1;
  return {
    type: CommentConstants.ADD_COMMENT,
    payload: {
      owner,
      body,
      id,
      createdAt: moment.now(),
      lastEditedAt: moment.now(),
      likes: []
    }
  };
};

export const deleteComment = commentId => ({
  type: CommentConstants.DELETE_COMMENT,
  payload: commentId
});

export const editComment = comment => ({
  type: CommentConstants.EDIT_COMMENT,
  payload: {
    ...comment,
    lastEditedAt: moment.now()
  }
});

export const likeComment = (userId, comment) => {
  comment = {...comment};
  comment.likes.push(userId);

  return {
    type: CommentConstants.LIKE_COMMENT,
    payload: comment
  }
};

export const unlikeComment = (userId, comment) => {
  comment = {...comment};
  comment.likes = comment.likes.filter(id => id !== userId);

  return {
    type: CommentConstants.LIKE_COMMENT,
    payload: comment
  }
};
