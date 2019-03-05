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

var PageSizeSelector = function(_Component) {
  _inherits(PageSizeSelector, _Component);

  function PageSizeSelector() {
    _classCallCheck(this, PageSizeSelector);

    return _possibleConstructorReturn(this, (PageSizeSelector.__proto__ || Object.getPrototypeOf(PageSizeSelector)).apply(this, arguments));
  }

  _createClass(PageSizeSelector, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
        controlClassName = _props.controlClassName,
        label = _props.label,
        onPageSizeChange = _props.onPageSizeChange,
        pageSizeOptions = _props.pageSizeOptions,
        perPage = _props.perPage;


      return _react2.default.createElement(
        'div',
        {className: 'rtc-page-size-selector'},
        _react2.default.createElement(
          'select',
          {
            id: 'page-size-selector',
            className: `rtc-page-size-selector-control ${  controlClassName}`,
            onChange: onPageSizeChange,
            value: perPage,
          },
          pageSizeOptions.map(function(item) {
            return _react2.default.createElement(
              'option',
              {key: item.toString(), value: item},
              item
            );
          })
        ),
        _react2.default.createElement(
          'label',
          {
            htmlFor: 'page-size-selector',
            className: 'rtc-page-size-selector-label',
          },
          label
        )
      );
    },
  }]);

  return PageSizeSelector;
}(_react.Component);

PageSizeSelector.defaultProps = {
  label: 'records per page',
  perPage: 10,
  controlClassName: '',
  pageSizeOptions: [5, 10, 50],
};
PageSizeSelector.propTypes = {
  onPageSizeChange: _react.PropTypes.func.isRequired,
  perPage: _react.PropTypes.number,
  pageSizeOptions: _react.PropTypes.arrayOf(_react.PropTypes.number),
  label: _react.PropTypes.string,
  controlClassName: _react.PropTypes.string,
};
exports.default = PageSizeSelector;
