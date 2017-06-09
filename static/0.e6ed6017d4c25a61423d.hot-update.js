webpackHotUpdate(0,{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),

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

var _EditComment = __webpack_require__(526);

var _EditComment2 = _interopRequireDefault(_EditComment);

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

var sortByTime = function sortByTime(a, b) {
  return a.time < b.time;
};
var sortByLikes = function sortByLikes(a, b) {
  return a.likes.length < b.likes.length;
};

var Comments = exports.Comments = function (_Base2) {
  _inherits(Comments, _Base2);

  function Comments(props) {
    _classCallCheck(this, Comments);

    var _this = _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).call(this, props));

    _this.state = {
      comments: props.comments
    };
    return _this;
  }

  _createClass(Comments, [{
    key: 'renderComments',
    value: function renderComments() {
      var comments = this.props.comments;


      return comments.map(function (comment) {
        return _react2.default.createElement(_Comment2.default, { key: comment.id, comment: comment });
      });
    }
  }, {
    key: 'handleSort',
    value: function handleSort(type) {
      var _this2 = this;

      var comments = this.props.comments;

      return function () {
        switch (type) {
          case 'likes':
            _this2.setState({ comments: comments.sort(sortByLikes) });
            break;
          default:
            _this2.setState({ comments: comments.sort(sortByLikes) });
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-column flex-align-center' },
        _react2.default.createElement(
          'h1',
          null,
          ' COMMENTS '
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            { className: 'flex-center' },
            'sort by'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleSort("time") },
            'Time'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleSort("likes") },
            'Likes'
          )
        ),
        this.renderComments(),
        _react2.default.createElement(_EditComment2.default, { newComment: true })
      );
    }
  }]);

  return Comments;
}(_Base4.default);

var _default = (0, _reactRedux.connect)(mapStateToProps)(Comments);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(sortByTime, 'sortByTime', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(sortByLikes, 'sortByLikes', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(Comments, 'Comments', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');
}();

;

/***/ }),

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
      var comment = this.props.comment;


      if (editMode) {
        return _react2.default.createElement(_EditComment2.default, {
          comment: comment,
          toggleEdit: this.toggleEdit
        });
      } else {
        return _react2.default.createElement(_ViewComment2.default, {
          comment: comment,
          toggleEdit: this.toggleEdit
        });
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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Automatically bind all methods of a class to keep the scope of "this" correct
 *
 * This will loop thorugh all the methods on a given class bind them correctly
 *
 * Optionally, you can pass in individual methods to exdlude from the bind
 *
 * We do not want to bind the native React methods, those are handled
 * internally, so we exclude them
 */
var OUTTA_BOUNDS = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnMount'];

//Spread syntax means just keep passing in the ones you don't want to bind,
//Sit will be turned into an array automatically
function BindIt(what) {
  for (var _len = arguments.length, exclude = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    exclude[_key - 1] = arguments[_key];
  }

  Object.getOwnPropertyNames(Object.getPrototypeOf(what)).forEach(function (method, ind) {
    if (OUTTA_BOUNDS.indexOf(method) === -1) {
      if (exclude.indexOf(method) === -1) {
        try {
          what[method] = what[method].bind(what);
        } catch (e) {
          console.error('Tried to bind: ' + method + '() but it was not found.');
        }
      }
    }
  });
} //end BindIt()

var _default = BindIt;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OUTTA_BOUNDS, 'OUTTA_BOUNDS', '/Users/alexmattson/Desktop/Frontend/app/utils/BindIt.js');

  __REACT_HOT_LOADER__.register(BindIt, 'BindIt', '/Users/alexmattson/Desktop/Frontend/app/utils/BindIt.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/utils/BindIt.js');
}();

;

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["b"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(84);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
  Provider.displayName = 'Provider';

  return Provider;
}

/* harmony default export */ __webpack_exports__["a"] = (createProvider());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

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
      body: props.newComment ? '' : props.comment.body
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
          dispatchAddComment = _props.dispatchAddComment,
          currentUser = _props.currentUser,
          toggleEdit = _props.toggleEdit,
          newComment = _props.newComment,
          comment = _props.comment;


      var entity = {
        body: body,
        owner: currentUser.id
      };

      if (newComment) {
        dispatchAddComment(entity);
        this.setState({ body: '' });
      } else {
        entity.id = comment.id;
        dispatchEditComment(entity);
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
        { className: 'comment-container flex-column' },
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
  newComment: _propTypes2.default.bool
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

/***/ }),

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

var _moment = __webpack_require__(409);

var _moment2 = _interopRequireDefault(_moment);

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
    dispatchDeleteComment: function dispatchDeleteComment() {
      var comment = props.comment,
          dispatchDeleteComment = props.dispatchDeleteComment;

      dispatch((0, _actions.deleteComment)(comment.id));
    },
    dispatchLikeComment: function dispatchLikeComment(userId) {
      var comment = props.comment;

      dispatch((0, _actions.likeComment)(userId, comment));
    },
    dispatchUnlikeComment: function dispatchUnlikeComment(userId) {
      var comment = props.comment;

      dispatch((0, _actions.unlikeComment)(userId, comment));
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
    value: function handleLike() {
      var _props = this.props,
          dispatchUnlikeComment = _props.dispatchUnlikeComment,
          dispatchLikeComment = _props.dispatchLikeComment,
          currentUser = _props.currentUser;


      if (this.likedComment()) {
        dispatchUnlikeComment(currentUser.id);
      } else {
        dispatchLikeComment(currentUser.id);
      }
    }
  }, {
    key: 'renderInteractions',
    value: function renderInteractions() {
      var _props2 = this.props,
          owner = _props2.comment.owner,
          currentUser = _props2.currentUser,
          dispatchDeleteComment = _props2.dispatchDeleteComment,
          toggleEdit = _props2.toggleEdit;

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
      var _props3 = this.props,
          likes = _props3.comment.likes,
          currentUser = _props3.currentUser;

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

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(123)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(300)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlikeComment = exports.likeComment = exports.editComment = exports.deleteComment = exports.addComment = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(89);

var _constants2 = _interopRequireDefault(_constants);

var _moment = __webpack_require__(409);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// id should be given by API so harded coded for now
var id = 1234;

var addComment = exports.addComment = function addComment(_ref) {
  var body = _ref.body,
      owner = _ref.owner;

  id += 1;
  return {
    type: _constants2.default.ADD_COMMENT,
    payload: {
      owner: owner,
      body: body,
      id: id,
      createdAt: _moment2.default.now(),
      lastEditedAt: _moment2.default.now(),
      likes: []
    }
  };
};

var deleteComment = exports.deleteComment = function deleteComment(commentId) {
  return {
    type: _constants2.default.DELETE_COMMENT,
    payload: commentId
  };
};

var editComment = exports.editComment = function editComment(comment) {
  return {
    type: _constants2.default.EDIT_COMMENT,
    payload: _extends({}, comment, {
      lastEditedAt: _moment2.default.now()
    })
  };
};

var likeComment = exports.likeComment = function likeComment(userId, comment) {
  comment = _extends({}, comment);
  comment.likes.push(userId);

  return {
    type: _constants2.default.LIKE_COMMENT,
    payload: comment
  };
};

var unlikeComment = exports.unlikeComment = function unlikeComment(userId, comment) {
  comment = _extends({}, comment);
  comment.likes = comment.likes.filter(function (id) {
    return id !== userId;
  });

  return {
    type: _constants2.default.LIKE_COMMENT,
    payload: comment
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(id, 'id', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/actions.js');

  __REACT_HOT_LOADER__.register(addComment, 'addComment', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/actions.js');

  __REACT_HOT_LOADER__.register(deleteComment, 'deleteComment', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/actions.js');

  __REACT_HOT_LOADER__.register(editComment, 'editComment', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/actions.js');

  __REACT_HOT_LOADER__.register(likeComment, 'likeComment', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/actions.js');

  __REACT_HOT_LOADER__.register(unlikeComment, 'unlikeComment', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/actions.js');
}();

;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _BindIt = __webpack_require__(166);

var _BindIt2 = _interopRequireDefault(_BindIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Base = function (_React$Component) {
  _inherits(_Base, _React$Component);

  function _Base(props) {
    _classCallCheck(this, _Base);

    var _this = _possibleConstructorReturn(this, (_Base.__proto__ || Object.getPrototypeOf(_Base)).call(this, props));

    (0, _BindIt2.default)(_this);
    return _this;
  }

  return _Base;
}(_react2.default.Component);

var _default = _Base;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_Base, '_Base', '/Users/alexmattson/Desktop/Frontend/app/utils/_Base.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/utils/_Base.js');
}();

;

/***/ })

})