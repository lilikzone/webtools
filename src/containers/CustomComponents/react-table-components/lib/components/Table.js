'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i]; for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  } return target;
};

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

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _constants = require('../constants');

var c = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {}; if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    } newObj.default = obj; return newObj;
  }
}

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

var simpleGet = function simpleGet(key) {
  return function(data) {
    return data[key];
  };
};
var keyGetter = function keyGetter(keys) {
  return function(data) {
    return keys.map(function(key) {
      return data[key];
    });
  };
};

var getCellValue = function getCellValue(_ref, row) {
  var prop = _ref.prop,
    defaultContent = _ref.defaultContent,
    render = _ref.render;

  if (render) {
    return render(row);
  }

  if (prop) {
    return (0, _get2.default)(row, prop, defaultContent) || defaultContent;
  }

  return defaultContent;
};

var Table = function(_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.dragStart = function(e) {
      _this.dragged = e.currentTarget;
      // Copy dragged element's content to draggable container
      _this.dragContainer.innerHTML = _this.dragged.innerHTML;
      // FF requires any data in dataTransfer object to make elements draggable
      e.dataTransfer.setData('_data_', '');
      // Set draggable container to dataTransfer
      e.dataTransfer.setDragImage(_this.dragContainer, 0, 0);
    };

    _this.dragEnd = function() {
      var onColumnDrag = _this.props.onColumnDrag;

      var from = Number(_this.dragged.dataset.index);
      var to = Number(_this.over ? _this.over.dataset.index : _this.dragged.dataset.index);

      _this.cleanUpOverElement();
      _this.dragContainer.innerHTML = '';

      onColumnDrag(from, to);
    };

    _this.dragOver = function(e) {
      e.preventDefault();

      if (_this.props.draggable) {
        var target = e.target.closest('th');

        if (target) {
          // Set drop effect
          e.dataTransfer.dropEffect = 'move';

          // Clean previous over heading
          if (_this.over && target !== _this.over) {
            _this.cleanUpOverElement();
          }

          // Set new over heading
          _this.over = target;

          if (_this.over !== _this.dragged) {
            var directionClassName = Number(_this.dragged.dataset.index) < Number(_this.over.dataset.index) ? c.CLASS_NAMES.DRAG_FORWARD : c.CLASS_NAMES.DRAG_BACK;

            _this.over.classList.add(c.CLASS_NAMES.DRAG_OVER, directionClassName);
          }
        }
      }
    };

    _this.dragLeave = function() {
      _this.cleanUpOverElement();
    };

    if (props.draggable) {
      _this.createDragContainer();
    }
    return _this;
  }

  _createClass(Table, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.draggable) {
        document.body.removeChild(this.dragContainer);
      }
    },

    /**
     * Create container for dragged element
     */

  }, {
    key: 'createDragContainer',
    value: function createDragContainer() {
      this.dragContainer = document.createElement('div');
      this.dragContainer.className = c.CLASS_NAMES.DRAG_CONTAINER;

      document.body.appendChild(this.dragContainer);
    },

    /**
     * On drag start
     *
     * @param {object} e - event object
     */


    /**
     * On drag end
     *
     * @param {object} e - event object
     */


    /**
     * On drag over
     *
     * @param {object} e - event object
     */


    /**
     * On drag leave
     */

  }, {
    key: 'cleanUpOverElement',


    /**
     * Cleanup
     */
    value: function cleanUpOverElement() {
      if (this.over) {
        this.over.classList.remove(c.CLASS_NAMES.DRAG_OVER, c.CLASS_NAMES.DRAG_FORWARD, c.CLASS_NAMES.DRAG_BACK);
      }
    },

    /**
     * Header properties
     *
     * @param {object} col - column object
     */

  }, {
    key: 'generateHeaderProps',
    value: function generateHeaderProps(col) {
      var _props = this.props,
        sortable = _props.sortable,
        sortBy = _props.sortBy,
        onSort = _props.onSort,
        draggable = _props.draggable;

      var headerProps = {
        className: col.headerClass ? `${col.headerClass  } heading` : 'heading',
      };

      if (sortable && col.prop && col.sortable !== false) {
        headerProps.onClick = function() {
          return onSort({
            prop: col.prop,
            order: sortBy.order === c.SORT_ORDERS.DESC ? c.SORT_ORDERS.ASC : c.SORT_ORDERS.DESC,
          });
        };

        headerProps.className += ' sortable';

        if (sortBy.prop === col.prop) {
          headerProps.className += ` ${  sortBy.order}`;
        }
      }

      if (draggable) {
        headerProps.draggable = true;
        headerProps.onDragStart = this.dragStart;
        headerProps.onDragEnd = this.dragEnd;
        headerProps.onDragLeave = this.dragLeave;
      }

      return headerProps;
    },

    /**
     * Row properties
     *
     * @param {object} row - row object
     */

  }, {
    key: 'generateRowProps',
    value: function generateRowProps(row) {
      var _props2 = this.props,
        keys = _props2.keys,
        generateRowProps = _props2.generateRowProps;

      var getKeys = Array.isArray(keys) ? keyGetter(keys) : simpleGet(keys);

      var props = {
        key: getKeys(row),
      };

      if (typeof generateRowProps === 'function') {
        return _extends({}, props, generateRowProps(row));
      }

      return props;
    },
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
        dataArray = _props3.dataArray,
        columns = _props3.columns;


      var headers = columns.map(function(col, index) {
        if (col.visible === false) {
          return null;
        }

        var headerProps = _this2.generateHeaderProps(col);

        return _react2.default.createElement(
          'th',
          _extends({
            key: col.id,
            style: {width: col.width},
            'data-index': index,
          }, headerProps),
          _react2.default.createElement(
            'span',
            null,
            col.titleComponent ? col.titleComponent() : col.title
          )
        );
      });

      var rows = dataArray.map(function(row) {
        var rowOptions = _this2.generateRowProps(row);

        return _react2.default.createElement(
          'tr',
          rowOptions,
          columns.map(function(col) {
            if (col.visible === false) {
              return null;
            }

            return _react2.default.createElement(
              'td',
              {key: col.id, className: col.cellClass ? col.cellClass : null},
              getCellValue(col, row)
            );
          })
        );
      });

      return _react2.default.createElement(
        'table',
        {className: `rtc-table ${  this.props.className}`, onDragOver: this.dragOver},
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            headers
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          rows.length ? rows : _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              {colSpan: columns.filter(function(col) {
                return col.visible;
              }).length, className: 'no-data'},
              'No data'
            )
          )
        )
      );
    },
  }]);

  return Table;
}(_react.Component);

Table.defaultProps = {
  draggable: false,
  sortable: false,
  onColumnDrag: null,
  sortBy: null,
  className: null,
  generateRowProps: null,
};
Table.propTypes = {
  sortable: _react.PropTypes.bool,
  sortBy: _react.PropTypes.shape({
    prop: _react.PropTypes.string,
    order: _react.PropTypes.string,
  }),
  onSort: _react.PropTypes.func.isRequired,
  draggable: _react.PropTypes.bool,
  onColumnDrag: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string,
  columns: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  generateRowProps: _react.PropTypes.func,
  dataArray: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])).isRequired,
  keys: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.string]).isRequired,
};
exports.default = Table;
