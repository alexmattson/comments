webpackHotUpdate(0,{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserConstants = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./UserConstants\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _UserConstants2 = _interopRequireDefault(_UserConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  id: 654321,
  prefrences: {
    sorting: 'time'
  }
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

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/alexmattson/Desktop/Frontend/app/modules/Users/reducer.js');

  __REACT_HOT_LOADER__.register(UserReducer, 'UserReducer', '/Users/alexmattson/Desktop/Frontend/app/modules/Users/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/modules/Users/reducer.js');
}();

;

/***/ })

})