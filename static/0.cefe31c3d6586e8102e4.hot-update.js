webpackHotUpdate(0,{

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeSorting = undefined;

var _constants = __webpack_require__(529);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeSorting = exports.changeSorting = function changeSorting(sorting) {
  return {
    type: _constants2.default.CHANGE_SORTING,
    payload: {
      sorting: sorting
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(changeSorting, 'changeSorting', '/Users/alexmattson/Desktop/Frontend/app/modules/Users/actions.js');
}();

;

/***/ })

})