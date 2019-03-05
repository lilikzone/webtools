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

var cancelEvent = function cancelEvent(e) {
  return e.preventDefault();
};

var Pagination = function(_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.onChangePage = function(pageNumber, e) {
      e.preventDefault();

      _this.props.onChangePage(pageNumber);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pagination, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.total !== nextProps.total || this.props.perPage !== nextProps.perPage || this.props.currentPage !== nextProps.currentPage || this.props.showPages !== nextProps.showPages;
    },
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
        total = _props.total,
        perPage = _props.perPage,
        showPages = _props.showPages,
        currentPage = _props.currentPage,
        btnClassName = _props.btnClassName,
        btnActiveClassName = _props.btnActiveClassName,
        prevBtnComponent = _props.prevBtnComponent,
        nextBtnComponent = _props.nextBtnComponent;


      if (total === 0) {
        return null;
      }

      var totalPages = Math.ceil(total / perPage);
      var diff = Math.floor(showPages / 2);
      var start = Math.max(currentPage - diff, 0);
      var end = Math.min(start + showPages, totalPages);
      var buttons = [];
      var btnEvent = void 0;
      var isCurrent = void 0;
      var btnClass = void 0;

      if (totalPages >= showPages && end >= totalPages) {
        start = totalPages - showPages;
      }

      var _loop = function _loop(i) {
        isCurrent = currentPage === i;
        if (isCurrent) {
          btnEvent = cancelEvent;
        } else {
          btnEvent = function btnEvent(e) {
            return _this2.onChangePage(i, e);
          };
        }

        btnClass = btnClassName || '';

        if (isCurrent) {
          btnClass += ` ${  btnActiveClassName}`;
          btnClass = btnClass.trim();
        }

        buttons.push(_react2.default.createElement(
          'li',
          {key: i, className: isCurrent ? 'active' : null},
          _react2.default.createElement(
            'a',
            {
              href: undefined,
              onClick: btnEvent,
              className: btnClass || null,
              tabIndex: '0',
            },
            _react2.default.createElement(
              'span',
              null,
              i + 1
            ),
            isCurrent ? _react2.default.createElement(
              'span',
              {className: 'sr-only'},
              '(current)'
            ) : null
          )
        ));
      };

      for (var i = start; i < end; i++) {
        _loop(i);
      }

      var isNotFirst = currentPage > 0;
      var isNotLast = currentPage < totalPages - 1;
      var firstHandler = isNotFirst ? function(e) {
        return _this2.onChangePage(0, e);
      } : cancelEvent;
      var prevHandler = isNotFirst ? function(e) {
        return _this2.onChangePage(currentPage - 1, e);
      } : cancelEvent;
      var nextHandler = isNotLast ? function(e) {
        return _this2.onChangePage(currentPage + 1, e);
      } : cancelEvent;
      var lastHandler = isNotLast ? function(e) {
        return _this2.onChangePage(totalPages - 1, e);
      } : cancelEvent;

      if (start >= diff) {
        buttons = [_react2.default.createElement(
          'li',
          {key: 'dotsFirst', className: !isNotFirst ? 'disabled' : null},
          _react2.default.createElement(
            'a',
            {
              href: undefined,
              onClick: prevHandler,
              className: btnClassName || null,
              tabIndex: '0',
            },
            '...'
          )
        )].concat(buttons);
      }

      if (end > showPages) {
        buttons = [_react2.default.createElement(
          'li',
          {key: 'first', className: !isNotFirst ? 'disabled' : null},
          _react2.default.createElement(
            'a',
            {
              href: undefined,
              onClick: firstHandler,
              className: btnClassName || null,
              tabIndex: '0',
            },
            '1'
          )
        )].concat(buttons);
      }

      buttons = [_react2.default.createElement(
        'li',
        {key: 'prev', className: !isNotFirst ? 'disabled' : null},
        _react2.default.createElement(
          'a',
          {
            href: undefined,
            onClick: prevHandler,
            className: btnClassName || null,
            tabIndex: '0',
          },
          prevBtnComponent
        )
      )].concat(buttons);

      if (end <= totalPages - diff) {
        buttons = buttons.concat([_react2.default.createElement(
          'li',
          {key: 'dotsLast', className: !isNotLast ? 'disabled' : null},
          _react2.default.createElement(
            'a',
            {
              href: undefined,
              onClick: nextHandler,
              className: btnClassName || null,
              tabIndex: '0',
            },
            '...'
          )
        )]);
      }

      if (end !== totalPages) {
        buttons = buttons.concat([_react2.default.createElement(
          'li',
          {key: 'last', className: !isNotLast ? 'disabled' : null},
          _react2.default.createElement(
            'a',
            {
              href: undefined,
              onClick: lastHandler,
              className: btnClassName || null,
              tabIndex: '0',
            },
            totalPages
          )
        )]);
      }

      buttons = buttons.concat([_react2.default.createElement(
        'li',
        {key: 'next', className: !isNotLast ? 'disabled' : null},
        _react2.default.createElement(
          'a',
          {
            href: undefined,
            onClick: nextHandler,
            className: btnClassName || null,
            tabIndex: '0',
          },
          nextBtnComponent
        )
      )]);

      return _react2.default.createElement(
        'ul',
        {className: this.props.className},
        buttons
      );
    },
  }]);

  return Pagination;
}(_react.Component);

Pagination.defaultProps = {
  showPages: 5,
  perPage: 10,
  currentPage: 0,
  className: '',
  btnClassName: '',
  btnActiveClassName: '',
  prevBtnComponent: _react2.default.createElement('span', {className: 'fa fa-angle-left'}),
  nextBtnComponent: _react2.default.createElement('span', {className: 'fa fa-angle-right'}),
};
Pagination.propTypes = {
  onChangePage: _react.PropTypes.func.isRequired,
  total: _react.PropTypes.number.isRequired,
  perPage: _react.PropTypes.number.isRequired,
  currentPage: _react.PropTypes.number.isRequired,
  showPages: _react.PropTypes.number,
  className: _react.PropTypes.string,
  btnClassName: _react.PropTypes.string,
  btnActiveClassName: _react.PropTypes.string,
  prevBtnComponent: _react.PropTypes.element,
  nextBtnComponent: _react.PropTypes.element,
};
exports.default = Pagination;
