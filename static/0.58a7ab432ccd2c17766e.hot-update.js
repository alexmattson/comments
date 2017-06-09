webpackHotUpdate(0,{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(529);

var _constants2 = _interopRequireDefault(_constants);

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
    case _constants2.default.CHANGE_SORTING:
      return _extends({}, state, {
        prefrences: _extends({}, state.prefrences, {
          sorting: action.payload
        })
      });
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