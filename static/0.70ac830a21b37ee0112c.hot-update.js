webpackHotUpdate(0,{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Base3 = __webpack_require__(90);

var _Base4 = _interopRequireDefault(_Base3);

var _reactRedux = __webpack_require__(83);

var _Comment = __webpack_require__(163);

var _Comment2 = _interopRequireDefault(_Comment);

var _EditComment = __webpack_require__(526);

var _EditComment2 = _interopRequireDefault(_EditComment);

var _actions = __webpack_require__(88);

var _actions2 = __webpack_require__(528);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    comments: Object.values(state.comments).sort(handleSort(state.currentUser.prefrences.sorting))
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeSorting: function dispatchChangeSorting(type) {
      dispatch((0, _actions2.changeSorting)(type));
    }
  };
};

var handleSort = function handleSort(type) {
  switch (type) {
    case 'likes':
      return sortByLikes;
    default:
      return sortByTime;
  }
};
var sortByTime = function sortByTime(a, b) {
  return a.time < b.time;
};
var sortByLikes = function sortByLikes(a, b) {
  return a.likes.length < b.likes.length;
};

var Comments = exports.Comments = function (_Base2) {
  _inherits(Comments, _Base2);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: 'renderComments',
    value: function renderComments() {
      var comments = this.props.comments;


      return comments.map(function (comment) {
        return _react2.default.createElement(_Comment2.default, { key: comment.id, comment: comment });
      });
    }
  }, {
    key: 'handleChangeSort',
    value: function handleChangeSort(type) {
      var dispatchChangeSorting = this.props.dispatchChangeSorting;

      return function () {
        return dispatchChangeSorting(type);
      };
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'flex-column flex-align-center' },
        _react2.default.createElement(
          'h1',
          null,
          ' COMMENTS '
        ),
        _react2.default.createElement(
          'div',
          { className: 'sort-container' },
          _react2.default.createElement(
            'p',
            { className: 'flex-center' },
            'sort by'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleChangeSort("time") },
            'Time'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleChangeSort("likes") },
            'Likes'
          )
        ),
        this.renderComments(),
        _react2.default.createElement(_EditComment2.default, { newComment: true })
      );
    }
  }]);

  return Comments;
}(_Base4.default);

var _default = (0, _reactRedux.connect)(mapStateToProps)(Comments);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(handleSort, 'handleSort', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(sortByTime, 'sortByTime', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(sortByLikes, 'sortByLikes', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(Comments, 'Comments', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/Containers/Comments.js');
}();

;

/***/ })

})