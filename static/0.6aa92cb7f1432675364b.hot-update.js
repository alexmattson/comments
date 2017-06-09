webpackHotUpdate(0,{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(89);

var _constants2 = _interopRequireDefault(_constants);

var _moment = __webpack_require__(409);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_COMMENT = _constants2.default.ADD_COMMENT,
    DELETE_COMMENT = _constants2.default.DELETE_COMMENT,
    EDIT_COMMENT = _constants2.default.EDIT_COMMENT,
    LIKE_COMMENT = _constants2.default.LIKE_COMMENT,
    UNLIKE_COMMENT = _constants2.default.UNLIKE_COMMENT;


var initialState = {
  1233: {
    id: 1233,
    body: 'This is a really cool app!',
    owner: 765432,
    createdAt: _moment2.default.now(),
    lastEditedAt: _moment2.default.now(),
    likes: [654321, 765432, 876543]
  },
  1234: {
    id: 1234,
    body: 'I really like what you made here, keep up the good work.',
    owner: 765432,
    createdAt: _moment2.default.now(),
    lastEditedAt: _moment2.default.now(),
    likes: [765432]
  }
};

var CommentsReducer = function CommentsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ADD_COMMENT:
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));
    case DELETE_COMMENT:
      var newState = _extends({}, state);
      delete newState[action.payload];
      return newState;
    case EDIT_COMMENT:
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));
    case LIKE_COMMENT:
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));
    case UNLIKE_COMMENT:
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));
    default:
      return state;
  }
};

var _default = CommentsReducer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ADD_COMMENT, 'ADD_COMMENT', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(DELETE_COMMENT, 'DELETE_COMMENT', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(EDIT_COMMENT, 'EDIT_COMMENT', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(LIKE_COMMENT, 'LIKE_COMMENT', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(UNLIKE_COMMENT, 'UNLIKE_COMMENT', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(CommentsReducer, 'CommentsReducer', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');
}();

;

/***/ })

})