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

exports.default = dataTableEnhancer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataEnhancer = require('./dataEnhancer');

var dataEnhancer = _interopRequireWildcard(_dataEnhancer);

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

function dataTableEnhancer(WrappedComponent) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function(_Component) {
    _inherits(DataTableEnhancer, _Component);

    function DataTableEnhancer(props) {
      _classCallCheck(this, DataTableEnhancer);

      var _this = _possibleConstructorReturn(this, (DataTableEnhancer.__proto__ || Object.getPrototypeOf(DataTableEnhancer)).call(this, props));

      _initialiseProps.call(_this);

      var dataArray = props.dataArray,
        columns = props.columns,
        sortBy = props.sortBy,
        currentPage = props.currentPage,
        perPage = props.perPage;


      var initialState = {
        columns: columns.map(function(col) {
          if (typeof col.visible === 'undefined') {
            return _extends({}, col, {
              visible: true,
            });
          }
          return col;
        }),
        dataArray: dataArray,
        filters: {
          globalSearch: '',
        },
        payload: {},
        sortBy: sortBy,
      };

      _this.state = _extends({}, initialState, {
        payload: dataEnhancer.calculatePayload(initialState, {
          currentPage: currentPage,
          perPage: perPage,
        }),
      });
      return _this;
    }

    /**
     * On sort
     *
     * @param {object} sortBy - sorting object
     */


    /**
     * On change page
     *
     * @param {number} page - new page
     */


    /**
     * On change page size
     *
     * @param {object} e - event
     */


    /**
     * On filter data
     *
     * @param {string} key - filter key
     * @param {string|number} value - filter value
     */


    /**
     * On column drag
     *
     * @param {number} from - from index
     * @param {number} to - to index
     */


    /**
     * Toggle column visibility
     *
     * @param {number|string} columnId - column id
     */


    _createClass(DataTableEnhancer, [{
      key: 'render',
      value: function render() {
        var newProps = {
          onSort: this.onSort,
          onChangePage: this.onChangePage,
          onPageSizeChange: this.onPageSizeChange,
          onColumnDrag: this.onColumnDrag,
          onToggleColumnsVisibility: this.onToggleColumnsVisibility,
          onFilter: this.onFilter,
        };

        return _react2.default.createElement(WrappedComponent, _extends({}, newProps, this.props, this.state));
      },
    }]);

    return DataTableEnhancer;
  }(_react.Component), _class.defaultProps = {
    currentPage: 0,
    perPage: 10,
    sortBy: null,
    onDragColumn: null,
    onChangeColumnsVisibility: null,
  }, _class.propTypes = {
    perPage: _react.PropTypes.number,
    currentPage: _react.PropTypes.number,
    columns: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
    sortBy: _react.PropTypes.shape({
      prop: _react.PropTypes.string,
      order: _react.PropTypes.string,
    }),
    onDragColumn: _react.PropTypes.func,
    onChangeColumnsVisibility: _react.PropTypes.func,
    dataArray: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])).isRequired,
  }, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onSort = function(sortBy) {
      _this2.setState(function(state) {
        return dataEnhancer.sortData(state, sortBy);
      });
    };

    this.onChangePage = function(page) {
      _this2.setState(function(state) {
        return dataEnhancer.changePage(state, page);
      });
    };

    this.onPageSizeChange = function(e) {
      var perPage = e.target.value;

      _this2.setState(function(state) {
        return dataEnhancer.changePageSize(state, perPage);
      });
    };

    this.onFilter = function(key, value) {
      _this2.setState(function(state) {
        return dataEnhancer.filterData(state, key, value);
      });
    };

    this.onColumnDrag = function(from, to) {
      var onDragColumn = _this2.props.onDragColumn;


      _this2.setState(function(state) {
        return dataEnhancer.dragColumn(state, {from: from, to: to});
      }, function() {
        if (typeof onDragColumn === 'function') {
          onDragColumn(_this2.state.columns);
        }
      });
    };

    this.onToggleColumnsVisibility = function(columnId) {
      var onChangeColumnsVisibility = _this2.props.onChangeColumnsVisibility;


      _this2.setState(function(state) {
        return dataEnhancer.toggleColumnVisibility(state, columnId);
      }, function() {
        if (typeof onChangeColumnsVisibility === 'function') {
          onChangeColumnsVisibility(_this2.state.columns);
        }
      });
    };
  }, _temp;
}
