import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _Base from '../../utils/_Base';

import { deleteComment, editComment } from '../../modules/Comments/actions';
import ViewComment from './ViewComment';
import EditComment from './EditComment';


export class Comment extends _Base {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };
  }

  toggleEdit() {
    const { editMode } = this.state;
    this.setState({ editMode: !editMode});
  }

  render() {
    const { editMode } = this.state;
    const { comment } = this.props;

    if (editMode) {
      return (
        <EditComment
          comment={comment}
          toggleEdit={this.toggleEdit}
        />
      );
    } else {
      return (
        <ViewComment
          comment={comment}
          toggleEdit={this.toggleEdit}
        />
      );
    }
	}
}

export default Comment;
