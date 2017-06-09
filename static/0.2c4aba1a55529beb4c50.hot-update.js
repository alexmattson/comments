webpackHotUpdate(0,{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(85);

var _rootReducer = __webpack_require__(158);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _merge = __webpack_require__(287);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  currentUser: {
    id: 654321
  }
};

var configureStore = function configureStore(inputs) {
  return (0, _redux.createStore)(_rootReducer2.default, initialState);
};

var _default = configureStore;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/alexmattson/Desktop/Frontend/app/common/store.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/alexmattson/Desktop/Frontend/app/common/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/common/store.js');
}();

;

/***/ })

})