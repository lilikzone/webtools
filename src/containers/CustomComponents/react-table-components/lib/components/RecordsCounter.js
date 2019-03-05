'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
    }
  } return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  } return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(`Super expression must either be null or a function, not ${  typeof superClass}`);
  } subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}}); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RecordsCounter = function(_Component) {
  _inherits(RecordsCounter, _Component);

  function RecordsCounter() {
    _classCallCheck(this, RecordsCounter);

    return _possibleConstructorReturn(this, (RecordsCounter.__proto__ || Object.getPrototypeOf(RecordsCounter)).apply(this, arguments));
  }

  _createClass(RecordsCounter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
        total = _props.total,
        currentPage = _props.currentPage,
        perPage = _props.perPage;

      var from = Number(currentPage) * Number(perPage) + 1;
      var to = Number(currentPage) * Number(perPage) + Number(perPage);

      return _react2.default.createElement(
        'div',
        {className: 'rtc-records-counter'},
        `Showing ${  from  } to ${  to < total ? to : total  } of ${  total  } records`
      );
    },
  }]);

  return RecordsCounter;
}(_react.Component);

RecordsCounter.defaultProps = {
  perPage: 10,
  currentPage: 0,
};
RecordsCounter.propTypes = {
  perPage: _react.PropTypes.number,
  currentPage: _react.PropTypes.number,
  total: _react.PropTypes.number.isRequired,
};
exports.default = RecordsCounter;
