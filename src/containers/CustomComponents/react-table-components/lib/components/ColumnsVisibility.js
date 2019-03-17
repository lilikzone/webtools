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

var ColumnsVisibility = function(_Component) {
  _inherits(ColumnsVisibility, _Component);

  function ColumnsVisibility(props) {
    _classCallCheck(this, ColumnsVisibility);

    var _this = _possibleConstructorReturn(this, (ColumnsVisibility.__proto__ || Object.getPrototypeOf(ColumnsVisibility)).call(this, props));

    _this.handleOutsideClick = function(e) {
      if (!_this.node.contains(e.target)) {
        _this.toggleVisibility(false);
      }
    };

    _this.handleClick = function() {
      _this.toggleVisibility();
    };

    _this.toggleVisibility = function(flag) {
      _this.setState(function(state) {
        return {
          active: typeof flag !== 'undefined' ? flag : !state.active,
        };
      });
    };

    _this.state = {
      active: false,
    };
    return _this;
  }

  _createClass(ColumnsVisibility, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('click', this.handleOutsideClick, false);
    },
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    },
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
        columns = _props.columns,
        onToggleColumnsVisibility = _props.onToggleColumnsVisibility,
        btnClassName = _props.btnClassName,
        iconClassName = _props.iconClassName,
        btnText = _props.btnText;


      return _react2.default.createElement(
        'div',
        {
          className: `rtc-columns-visibility-container ${  this.state.active ? 'active' : ''}`,
          ref: function ref(node) {
            _this2.node = node;
          },
        },
        _react2.default.createElement(
          'button',
          {
            className: `${btnClassName  } ${  this.state.active ? 'active' : ''}`,
            onClick: this.handleClick,
          },
          iconClassName && _react2.default.createElement('span', {className: iconClassName}),
          ' ',
          btnText
        ),
        _react2.default.createElement(
          'div',
          {className: 'rtc-columns-visibility-popup'},
          columns.map(function(col) {
            return _react2.default.createElement(
              'div',
              {className: 'checkbox', key: col.id},
              _react2.default.createElement(
                'label',
                {htmlFor: `col-visibility-${  col.id}`},
                _react2.default.createElement('input', {
                  type: 'checkbox',
                  checked: col.visible,
                  onChange: function onChange() {
                    return onToggleColumnsVisibility(col.id);
                  },
                  id: `col-visibility-${  col.id}`,
                }),
                ' ',
                col.title
              )
            );
          })
        )
      );
    },
  }]);

  return ColumnsVisibility;
}(_react.Component);

ColumnsVisibility.defaultProps = {
  btnClassName: '',
  iconClassName: '',
  btnText: 'Columns',
};
ColumnsVisibility.propTypes = {
  btnClassName: _react.PropTypes.string,
  btnText: _react.PropTypes.string,
  columns: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  iconClassName: _react.PropTypes.string,
  onToggleColumnsVisibility: _react.PropTypes.func.isRequired,
};
exports.default = ColumnsVisibility;
