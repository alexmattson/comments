import React from 'react';
import _Base from '../utils/_Base';
import { connect } from 'react-redux';
import Comment from '../components/Comment/Comment';
import EditComment from '../components/Comment/EditComment';
import { addComment } from '../modules/Comments/actions';
import { changeSorting } from '../modules/Users/actions';
import { handleSort } from '../utils/sorting';

const mapStateToProps = state => ({
  sorting: state.currentUser.prefrences.sorting,
  currentUser: state.currentUser,
  comments: Object.values(state.comments).sort(handleSort(state.currentUser.prefrences.sorting))
});

const mapDispatchToProps = dispatch => ({
  dispatchChangeSorting: (type) => {
    dispatch(changeSorting(type));
  }
});

export class Comments extends _Base {

  renderComments() {
    const { comments } = this.props;

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment}/>
    ));
  }

  handleChangeSort(type) {
    const { dispatchChangeSorting } = this.props;
    return () => dispatchChangeSorting(type);
  }

  render() {
    return (
      <div className="flex-column flex-align-center">
        <h1> COMMENTS </h1>
        <div className="sort-container">
          <p className="flex-center">sort by</p>
          <button onClick={this.handleChangeSort("time")}>Time</button>
          <button onClick={this.handleChangeSort("likes")}>Likes</button>
        </div>
        {this.renderComments()}
        <EditComment newComment />
      </div>
    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
