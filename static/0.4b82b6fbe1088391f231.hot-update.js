webpackHotUpdate(0,{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(144);

var _propTypes = __webpack_require__(119);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Base3 = __webpack_require__(163);

var _Base4 = _interopRequireDefault(_Base3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = function (_Base2) {
  _inherits(Comments, _Base2);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: 'handleDelete',
    value: function handleDelete() {}
  }, {
    key: 'render',
    value: function render() {
      var body = this.props.body;

      return _react2.default.createElement(
        'div',
        null,
        body,
        _react2.default.createElement(
          'button',
          { onClick: this.handleDelete },
          ' Delete Comment '
        )
      );
    }
  }]);

  return Comments;
}(_Base4.default);

var _default = Comments;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Comments, 'Comments', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexmattson/Desktop/Frontend/app/components/Comment/Comment.js');
}();

;

/***/ })

})