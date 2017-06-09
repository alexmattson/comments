import React from 'react';
import _Base from '../utils/_Base';
import { connect } from 'react-redux';
import Comment from '../components/Comment/Comment';
import EditComment from '../components/Comment/EditComment';
import { addComment } from '../modules/Comments/actions';


const mapStateToProps = (state, props) => ({
  currentUser: state.currentUser,
  comments: Object.values(state.comments)
});

const sortByTime = (a, b) => a.time < b.time;
const sortByLikes = (a, b) => a.likes.length < b.likes.length;

export class Comments extends _Base {
  constructor(props) {
    super(props);

    this.state = {
      comments: props.comments,
    };
  }

  renderComments() {
    const { comments } = this.props;

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment}/>
    ));
  }

  handleSort(type) {
    const { comments } = this.props;
    return () => {
      switch(type) {
        case 'likes':
          this.setState({ comments: comments.sort(sortByLikes) });
          break;
        default:
          this.setState({ comments: comments.sort(sortByLikes) });
      }
    };
  }

  render() {
    return (
      <div className="flex-column flex-align-center">
        <h1> COMMENTS </h1>
        <div className="sort-container">
          <p className="flex-center">sort by</p>
          <button onClick={this.handleSort("time")}>Time</button>
          <button onClick={this.handleSort("likes")}>Likes</button>
        </div>
        {this.renderComments()}
        <EditComment newComment />
      </div>
    );
	}
}

export default connect(mapStateToProps)(Comments);
