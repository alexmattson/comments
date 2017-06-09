webpackHotUpdate(0,{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Base3 = __webpack_require__(90);

var _Base4 = _interopRequireDefault(_Base3);

var _reactRedux = __webpack_require__(83);

var _Comment = __webpack_require__(163);

var _Comment2 = _interopRequireDefault(_Comment);

var _actions = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    currentUser: state.currentUser,
    comments: Object.values(state.comments)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    dispatchAddComment: function dispatchAddComment(comment) {
      dispatch((0, _actions.addComment)(comment));
    }
  };
};

var Comments = exports.Comments = function (_Base2) {
  _inherits(Comments, _Base2);

  function Comments(props) {
    _classCallCheck(this, Comments);

    var _this = _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).call(this, props));

    _this.state = {
      newComment: ""
    };
    return _this;
  }

  _createClass(Comments, [{
    key: 'renderComments',
    value: function renderComments() {
      var comments = this.props.comments;


      return comments.map(function (comment) {
        return _react2.default.createElement(_Comment2.default, { comment: comment });
      });
    }
  }, {
    key: 'renderNewComment',
    value: function renderNewComment() {
      var newComment = this.state.newComment;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('textarea', {
          rows: '4',
          cols: '50',
          value: newComment,
          onChange: this.handleChange
        }),
        _react2.default.createElement(
          'button',
          { onClick: this.handleSubmit },
          ' Add Comment '
        )
      );
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var newComment = this.state.newComment;
      var _props = this.props,
          dispatchAddComment = _props.dispatchAddComment,
          currentUser = _props.currentUser;


      dispatchAddComment({
        body: newComment,
        owner: currentUser.id
      });
      this.setState({ newComment: '' });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ newComment: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderComments(),
        this.renderNewComment()
      );
    }
  }]);

  return Comments;
}(_Base4.default);

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Comments);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(Comments, 'Comments', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');
}();

;

/***/ })

})