webpackHotUpdate(0,{

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(66);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(83);

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

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    dispatchEditComment: function dispatchEditComment(comment) {
      return dispatch((0, _actions.editComment)(comment));
    },
    dispatchAddComment: function dispatchAddComment(comment) {
      return dispatch((0, _actions.addComment)(comment));
    }
  };
};

var Comment = exports.Comment = function (_Base2) {
  _inherits(Comment, _Base2);

  function Comment(props) {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));

    _this.state = {
      body: props.comment.body || ""
    };
    return _this;
  }

  _createClass(Comment, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ body: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var body = this.state.body;
      var _props = this.props,
          dispatchEditComment = _props.dispatchEditComment,
          currentUser = _props.currentUser,
          toggleEdit = _props.toggleEdit,
          newComment = _props.newComment,
          id = _props.comment.id;


      var comment = {
        body: body,
        owner: currentUser.id
      };

      if (newComment) {
        dispatchAddComment(comment);
        this.setState({ body: '' });
      } else {
        comment.id = id;
        dispatchEditComment(comment);
        toggleEdit();
        this.setState({ body: body });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var newComment = this.props.newComment;
      var body = this.state.body;

      var actionText = newComment ? 'Add Comment' : 'Save Comment';

      return _react2.default.createElement(
        'div',
        { className: 'comment-container' },
        _react2.default.createElement('textarea', {
          rows: '4',
          cols: '50',
          value: body,
          onChange: this.handleChange
        }),
        _react2.default.createElement(
          'button',
          { onClick: this.handleSubmit },
          actionText
        )
      );
    }
  }]);

  return Comment;
}(_Base4.default);

Comment.propTypes = {
  newComment: _propTypes2.default.boolean
};
Comment.defaultValues = {
  newComment: false
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Comment);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/EditComment.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/EditComment.js');

  __REACT_HOT_LOADER__.register(Comment, 'Comment', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/EditComment.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/EditComment.js');
}();

;

/***/ })

})