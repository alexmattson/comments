webpackHotUpdate(0,{

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
      lastEditedAt: _moment2.default.now()
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
  comment = comment.slice(0);
  comment.likes.push(userId);

  return {
    type: _constants2.default.LIKE_COMMENT,
    payload: comment
  };
};

var unlikeComment = exports.unlikeComment = function unlikeComment(userId, comment) {
  comment = _extends({}, comment);
  comment.likes.push(userId);

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

/***/ })

})