import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import _Base from '../../utils/_Base';
import {
  deleteComment,
  editComment,
  likeComment,
  unlikeComment
} from '../../modules/Comments/actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch, props) => ({
  dispatchDeleteComment: () => {
    const { comment, dispatchDeleteComment } = props;
    dispatch(deleteComment(comment.id));
  },
  dispatchLikeComment: (userId) => {
    const { comment } = props;
    dispatch(likeComment(userId, comment));
  },
  dispatchUnlikeComment: (userId) => {
    const { comment } = props;
    dispatch(unlikeComment(userId, comment));
  }
});

export class Comment extends _Base {
  constructor(props) {
    super(props);

    this.state = {
      comment: props.comment.body
    };
  }

  static propTypes = {
    comment: PropTypes.object,
  }

  handleLike() {
    const {
      dispatchUnlikeComment,
      dispatchLikeComment,
      currentUser
    } = this.props;

    if (this.likedComment()) {
      dispatchUnlikeComment(currentUser.id);
    } else {
      dispatchLikeComment(currentUser.id);
    }
  }

  renderInteractions() {
    const {
      comment: { owner },
      currentUser,
      dispatchDeleteComment,
      toggleEdit
    } = this.props;
    const ownComment = currentUser.id === owner;

    if (!ownComment) { return null; }
    return (
      <div className="flex">
        <button className="flex-grow flex-center" onClick={dispatchDeleteComment}>
          Delete Comment
        </button>
        <button className="flex-grow flex-center" onClick={toggleEdit}>
          Edit Comment
        </button>
      </div>
    );
  }

  likedComment() {
    const { comment: { likes }, currentUser } = this.props;
    return likes.includes(currentUser.id);
  }

  render() {
    const { comment: { body, owner, lastEditedAt, likes } } = this.props;

    return (
      <div className="comment-container flex-column">
        <section className="flex">
          <div className="comment-body">
            <p> {body} </p>
            <sub>{moment(lastEditedAt).format('MMMM Do YYYY, h:mm:ss a')}</sub>
          </div>
          <div
            onClick={this.handleLike}
            className="like-container flex-column flex-align-center"
          >
            { this.likedComment() ?
                <sub style={{color: 'blue'}}>Liked</sub> :
                <sub>Like</sub>
            }
            <sub>{likes.length}</sub>
          </div>
        </section>
        {this.renderInteractions()}
      </div>
    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
