webpackHotUpdate(0,{

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlikeComment = exports.likeComment = exports.editComment = exports.deleteComment = exports.addComment = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(160);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 1234;
var addComment = exports.addComment = function addComment(comment) {
  id += 1;
  return {
    type: _constants2.default.ADD_COMMENT,
    payload: _extends({}, comment, {
      id: id
    })
  };
};

var deleteComment = exports.deleteComment = function deleteComment(data) {
  return {
    type: _constants2.default.DELETE_COMMENT,
    payload: data
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

/***/ })

})