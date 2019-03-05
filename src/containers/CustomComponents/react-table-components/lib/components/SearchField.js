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

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

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

var fireEvent = (0, _debounce2.default)(function(callback) {
  return callback();
}, 200);

var SearchField = function(_Component) {
  _inherits(SearchField, _Component);

  function SearchField(props) {
    _classCallCheck(this, SearchField);

    var _this = _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call(this, props));

    _this.onChange = function(e) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        filterKey = _this$props.filterKey;

      var value = e.target.value;

      _this.setState({
        value: value,
      });

      fireEvent(function() {
        return onChange(filterKey, value);
      });
    };

    _this.state = {
      value: props.value,
    };
    return _this;
  }

  _createClass(SearchField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
        label = _props.label,
        className = _props.className,
        controlClassName = _props.controlClassName,
        labelClassName = _props.labelClassName,
        activeClassName = _props.activeClassName;


      return _react2.default.createElement(
        'div',
        {className: `rtc-search-field ${  className  } ${  this.state.value ? activeClassName : ''}`},
        label && _react2.default.createElement(
          'label',
          {htmlFor: 'search-field', className: `rtc-search-field-label ${  labelClassName}`},
          label
        ),
        _react2.default.createElement('input', {
          id: 'search-field',
          type: 'search',
          className: `rtc-search-field-label ${  controlClassName}`,
          value: this.state.value,
          onChange: this.onChange,
        })
      );
    },
  }]);

  return SearchField;
}(_react.Component);

SearchField.defaultProps = {
  label: 'Search:',
  value: '',
  className: '',
  controlClassName: '',
  labelClassName: '',
  activeClassName: '',
};
SearchField.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  filterKey: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.string,
  value: _react.PropTypes.string,
  className: _react.PropTypes.string,
  controlClassName: _react.PropTypes.string,
  labelClassName: _react.PropTypes.string,
  activeClassName: _react.PropTypes.string,
};
exports.default = SearchField;
