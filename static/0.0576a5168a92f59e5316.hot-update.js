webpackHotUpdate(0,{

/***/ 163:
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatchDeleteComment: function dispatchDeleteComment(id) {
      return dispatch((0, _actions.deleteComment)(id));
    },
    dispatchEditComment: function dispatchEditComment(comment) {
      return dispatch((0, _actions.editComment)(comment));
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

  // State Actions


  _createClass(Comment, [{
    key: 'toggleEdit',
    value: function toggleEdit() {
      var editMode = this.state.editMode;

      this.setState({ editMode: !editMode });
    }

    // Redux Actions

  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ comment: event.target.value });
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete() {
      var _props = this.props,
          comment = _props.comment,
          dispatchDeleteComment = _props.dispatchDeleteComment;

      dispatchDeleteComment(comment.id);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var comment = this.state.comment;
      var _props2 = this.props,
          dispatchEditComment = _props2.dispatchEditComment,
          currentUser = _props2.currentUser,
          id = _props2.comment.id;


      dispatchEditComment({
        id: id,
        body: comment,
        owner: currentUser.id
      });
      this.toggleEdit();
      this.setState({ comment: comment });
    }

    // Render Functions

  }, {
    key: 'renderInteractions',
    value: function renderInteractions() {
      var _props3 = this.props,
          _props3$comment = _props3.comment,
          body = _props3$comment.body,
          owner = _props3$comment.owner,
          currentUser = _props3.currentUser;

      var ownComment = currentUser.id === owner;

      if (!ownComment) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.handleDelete },
          ' Delete Comment '
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.toggleEdit },
          ' Edit Comment '
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$comment = this.props.comment,
          body = _props$comment.body,
          owner = _props$comment.owner;
      var _state = this.state,
          editMode = _state.editMode,
          comment = _state.comment;


      if (editMode) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('textarea', {
            rows: '4',
            cols: '50',
            value: comment,
            onChange: this.handleChange
          }),
          _react2.default.createElement(
            'button',
            { onClick: this.handleSubmit },
            ' Save Comment '
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          body,
          this.renderInteractions()
        );
      }
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

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');

  __REACT_HOT_LOADER__.register(Comment, 'Comment', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');
}();

;

/***/ })

})