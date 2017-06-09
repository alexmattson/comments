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

var _ViewComment = __webpack_require__(527);

var _ViewComment2 = _interopRequireDefault(_ViewComment);

var _EditComment = __webpack_require__(526);

var _EditComment2 = _interopRequireDefault(_EditComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    key: 'render',
    value: function render() {
      var editMode = this.state.editMode;


      if (editMode) {
        return _react2.default.createElement(_EditComment2.default, { toggleEdit: this.toggleEdit });
      } else {
        return _react2.default.createElement(_ViewComment2.default, { toggleEdit: this.toggleEdit });
      }
    }
  }]);

  return Comment;
}(_Base4.default);

var _default = Comment;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Comment, 'Comment', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');
}();

;

/***/ }),

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

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
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
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ comment: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var comment = this.state.comment;
      var _props = this.props,
          dispatchEditComment = _props.dispatchEditComment,
          currentUser = _props.currentUser,
          toggleEdit = _props.toggleEdit,
          id = _props.comment.id;


      dispatchEditComment({
        id: id,
        body: comment,
        owner: currentUser.id
      });

      toggleEdit();
      this.setState({ comment: comment });
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

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/EditComment.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/EditComment.js');

  __REACT_HOT_LOADER__.register(Comment, 'Comment', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/EditComment.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/EditComment.js');
}();

;

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (59:0)\n\n\u001b[0m \u001b[90m 57 | \u001b[39m    }\n \u001b[90m 58 | \u001b[39m\t}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 59 | \u001b[39m}\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 60 | \u001b[39m\n \u001b[90m 61 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m connect(mapStateToProps\u001b[33m,\u001b[39m mapDispatchToProps)(\u001b[33mComment\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 62 | \u001b[39m\u001b[0m\n");

/***/ })

})