webpackHotUpdate(0,{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(87);

var _reducer = __webpack_require__(164);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(408);

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootReducer = (0, _redux.combineReducers)({
  currentUser: _reducer4.default,
  comments: _reducer2.default
});

var _default = RootReducer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RootReducer, 'RootReducer', '/Users/alexmattson/Desktop/Frontend/app/common/rootReducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/common/rootReducer.js');
}();

;

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = {
  id: 654321
};

var UserReducer = function UserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

var _default = UserReducer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/alexmattson/Desktop/Frontend/app/modules/Users/reducer.js");

  __REACT_HOT_LOADER__.register(UserReducer, "UserReducer", "/Users/alexmattson/Desktop/Frontend/app/modules/Users/reducer.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/alexmattson/Desktop/Frontend/app/modules/Users/reducer.js");
}();

;

/***/ })

})