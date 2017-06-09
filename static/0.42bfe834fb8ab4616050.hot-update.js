webpackHotUpdate(0,{

/***/ 119:
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
  module.exports = __webpack_require__(118)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(297)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(119);
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

var _Base3 = __webpack_require__(163);

var _Base4 = _interopRequireDefault(_Base3);

var _reactRedux = __webpack_require__(144);

var _Comment = __webpack_require__(407);

var _Comment2 = _interopRequireDefault(_Comment);

var _actions = __webpack_require__(406);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, props) {
  debugger;
  return {
    comments: Object.values(state.comments)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    addComment: function addComment(comment) {
      dispatch((0, _actions.addComment)(comment));
    }
  };
};

var Comments = exports.Comments = function (_Base2) {
  _inherits(Comments, _Base2);

  function Comments() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comments.__proto__ || Object.getPrototypeOf(Comments)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      newComment: ""
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comments, [{
    key: 'renderComments',
    value: function renderComments() {
      var comments = this.props.comments;


      return comments.map(function (_ref2) {
        var body = _ref2.body;
        return _react2.default.createElement(_Comment2.default, {
          body: body
        });
      });
    }
  }, {
    key: 'renderNewComment',
    value: function renderNewComment() {
      var newComment = this.state.newComment;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('textarea', { rows: '4', cols: '50', value: newComment, onChange: this.handleChange }),
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
      var addComment = this.props.addComment;


      addComment(newComment);
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

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(Comments, 'Comments', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');
}();

;

/***/ }),

/***/ 162:
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

var _BindIt = __webpack_require__(162);

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

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["b"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(82);
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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlikeComment = exports.likeComment = exports.editComment = exports.deleteComment = exports.addComment = undefined;

var _constants = __webpack_require__(160);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 1234;

var addComment = exports.addComment = function addComment(comment) {
  id += 1;
  return {
    type: _constants2.default.ADD_COMMENT,
    payload: {
      body: comment,
      id: id
    }
  };
};

var deleteComment = exports.deleteComment = function deleteComment(commentId) {
  return {
    type: _constants2.default.DELETE_COMMENT,
    payload: commentId
  };
};

var editComment = exports.editComment = function editComment(data) {
  return {
    type: _constants2.default.EDIT_COMMENT,
    payload: data
  };
};

var likeComment = exports.likeComment = function likeComment(data) {
  return {
    type: _constants2.default.LIKE_COMMENT,
    payload: data
  };
};

var unlikeComment = exports.unlikeComment = function unlikeComment(data) {
  return {
    type: _constants2.default.UNLIKE_COMMENT,
    payload: data
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

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(119);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Base3 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/_Base\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Base4 = _interopRequireDefault(_Base3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = function (_Base2) {
  _inherits(Comments, _Base2);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: 'render',
    value: function render() {
      var body = this.props.body;

      return _react2.default.createElement(
        'div',
        null,
        body
      );
    }
  }]);

  return Comments;
}(_Base4.default);

var _default = Comments;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Comments, 'Comments', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');
}();

;

/***/ })

})