webpackHotUpdate(0,{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(160);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  1234: {
    id: 1234,
    body: 'test'
  }
};

var CommentsReducer = function CommentsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.ADD_COMMENT:
      debugger;
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));
    case _constants.DELETE_COMMENT:
      return state;
    case _constants.EDIT_COMMENT:
      return state;
    case _constants.LIKE_COMMENT:
      return state;
    case _constants.UNLIKE_COMMENT:
      return state;
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

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(CommentsReducer, 'CommentsReducer', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/modules/Comments/reducer.js');
}();

;

/***/ })

})