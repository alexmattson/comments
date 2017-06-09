import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _Base from '../../utils/_Base';

import { deleteComment, editComment, addComment } from '../../modules/Comments/actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch, props) => ({
  dispatchEditComment: (comment) => dispatch(editComment(comment)),
  dispatchAddComment: (comment) => dispatch(addComment(comment)),
});

export class Comment extends _Base {
  static propTypes = {
    newComment: PropTypes.bool,
  }

  static defaultValues = {
    newComment: false,
  }

  constructor(props) {
    super(props);


    this.state = {
      body: props.newComment? '' : props.comment.body
    };
  }

  handleChange(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit() {
    const { body } = this.state;
    const {
      dispatchEditComment,
      dispatchAddComment,
      currentUser,
      toggleEdit,
      newComment,
      comment
    } = this.props;

    let entity = {
      body,
      owner: currentUser.id,
    }

    if (newComment) {
      dispatchAddComment(entity);
      this.setState({ body: '' });
    } else {
      entity = {...comment, ...entity}
      dispatchEditComment(entity);
      toggleEdit();
      this.setState({ body });
    }

  }

  render() {
    const { newComment } = this.props;
    const { body } = this.state;
    const actionText = newComment ? 'Add Comment' : 'Save Comment'

    return (
      <div className="comment-container flex-column">
        <textarea
          rows="4"
          cols="50"
          value={body}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>
          {actionText}
        </button>
      </div>
    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
