webpackHotUpdate(0,{

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(83);

var _propTypes = __webpack_require__(66);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Base3 = __webpack_require__(90);

var _Base4 = _interopRequireDefault(_Base3);

var _moment = __webpack_require__(409);

var _moment2 = _interopRequireDefault(_moment);

var _actions = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    dispatchDeleteComment: function dispatchDeleteComment() {
      var comment = props.comment,
          dispatchDeleteComment = props.dispatchDeleteComment;

      dispatch((0, _actions.deleteComment)(comment.id));
    },
    dispatchLikeComment: function dispatchLikeComment(userId) {
      var comment = props.comment;

      (0, _actions.likeComment)(userId, comment);
    },
    dispatchUnlikeComment: function dispatchUnlikeComment(userId) {
      var comment = props.comment;

      (0, _actions.unlikeComment)(userId, comment);
    }
  };
};

var Comment = exports.Comment = function (_Base2) {
  _inherits(Comment, _Base2);

  function Comment(props) {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));

    _this.state = {
      editMode: false,
      comment: props.comment.body
    };
    return _this;
  }

  _createClass(Comment, [{
    key: 'toggleEdit',
    value: function toggleEdit() {
      var editMode = this.state.editMode;

      this.setState({ editMode: !editMode });
    }
  }, {
    key: 'handleLike',
    value: function handleLike() {}
  }, {
    key: 'renderInteractions',
    value: function renderInteractions() {
      var _props = this.props,
          owner = _props.comment.owner,
          currentUser = _props.currentUser,
          dispatchDeleteComment = _props.dispatchDeleteComment,
          toggleEdit = _props.toggleEdit;

      var ownComment = currentUser.id === owner;

      if (!ownComment) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'flex' },
        _react2.default.createElement(
          'button',
          { className: 'flex-grow flex-center', onClick: dispatchDeleteComment },
          'Delete Comment'
        ),
        _react2.default.createElement(
          'button',
          { className: 'flex-grow flex-center', onClick: toggleEdit },
          'Edit Comment'
        )
      );
    }
  }, {
    key: 'likedComment',
    value: function likedComment() {
      var _props2 = this.props,
          likes = _props2.comment.likes,
          currentUser = _props2.currentUser;

      return likes.includes(currentUser.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$comment = this.props.comment,
          body = _props$comment.body,
          owner = _props$comment.owner,
          lastEditedAt = _props$comment.lastEditedAt,
          likes = _props$comment.likes;


      return _react2.default.createElement(
        'div',
        { className: 'comment-container flex-column' },
        _react2.default.createElement(
          'section',
          { className: 'flex' },
          _react2.default.createElement(
            'div',
            { className: 'comment-body' },
            _react2.default.createElement(
              'p',
              null,
              ' ',
              body,
              ' '
            ),
            _react2.default.createElement(
              'sub',
              null,
              (0, _moment2.default)(lastEditedAt).format('MMMM Do YYYY, h:mm:ss a')
            )
          ),
          _react2.default.createElement(
            'div',
            {
              onClick: this.handleLike,
              className: 'like-container flex-column flex-align-center'
            },
            this.likedComment() ? _react2.default.createElement(
              'sub',
              { style: { color: 'blue' } },
              'Liked'
            ) : _react2.default.createElement(
              'sub',
              null,
              'Like'
            ),
            _react2.default.createElement(
              'sub',
              null,
              likes.length
            )
          )
        ),
        this.renderInteractions()
      );
    }
  }]);

  return Comment;
}(_Base4.default);

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Comment);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/ViewComment.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/ViewComment.js');

  __REACT_HOT_LOADER__.register(Comment, 'Comment', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/ViewComment.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/ViewComment.js');
}();

;

/***/ })

})