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

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _ColumnsVisibility = require('./ColumnsVisibility');

var _ColumnsVisibility2 = _interopRequireDefault(_ColumnsVisibility);

var _PageSizeSelector = require('./PageSizeSelector');

var _PageSizeSelector2 = _interopRequireDefault(_PageSizeSelector);

var _RecordsCounter = require('./RecordsCounter');

var _RecordsCounter2 = _interopRequireDefault(_RecordsCounter);

var _SearchField = require('./SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

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

var Container = function(_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
        keys = _props.keys,
        className = _props.className,
        draggable = _props.draggable,
        sortable = _props.sortable,
        sortBy = _props.sortBy,
        columns = _props.columns,
        columnsVisible = _props.columnsVisible,
        onSort = _props.onSort,
        payload = _props.payload,
        onChangePage = _props.onChangePage,
        onPageSizeChange = _props.onPageSizeChange,
        onColumnDrag = _props.onColumnDrag,
        onToggleColumnsVisibility = _props.onToggleColumnsVisibility,
        filters = _props.filters,
        onFilter = _props.onFilter,
        generateRowProps = _props.generateRowProps;


      return _react2.default.createElement(
        'div',
        {className: 'container'},
        _react2.default.createElement(
          'div',
          {className: 'row content-row'},
          _react2.default.createElement(
            'div',
            {className: 'col-md-6'},
            _react2.default.createElement(
              'div',
              {className: 'form-inline'},
              _react2.default.createElement(_SearchField2.default, {
                value: filters.globalSearch,
                onChange: onFilter,
                filterKey: 'globalSearch',
                className: 'form-group',
                controlClassName: 'form-control',
              })
            )
          ),
          _react2.default.createElement(
            'div',
            {className: 'col-md-6'},
            _react2.default.createElement(_ColumnsVisibility2.default, {
              columns: columns,
              columnsVisible: columnsVisible,
              onToggleColumnsVisibility: onToggleColumnsVisibility,
              btnText: 'Columns visibility',
              btnClassName: 'btn btn-default btn-sm',
              iconClassName: 'fa fa-bars',
            })
          )
        ),
        _react2.default.createElement(
          'div',
          {className: 'row content-row'},
          _react2.default.createElement(
            'div',
            {className: 'col-md-12'},
            _react2.default.createElement(
              'div',
              {className: 'table-responsive rtc-table-responsive'},
              _react2.default.createElement(
                'div',
                {className: 'rtc-table-container'},
                _react2.default.createElement(_Table2.default, {
                  keys: keys,
                  className: className,
                  columns: columns,
                  columnsVisible: columnsVisible,
                  dataArray: payload.data,
                  draggable: draggable,
                  sortable: sortable,
                  onSort: onSort,
                  sortBy: sortBy,
                  onColumnDrag: onColumnDrag,
                  generateRowProps: generateRowProps,
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          {className: 'row content-row'},
          _react2.default.createElement(
            'div',
            {className: 'col-md-6'},
            _react2.default.createElement(_PageSizeSelector2.default, {
              onPageSizeChange: onPageSizeChange,
              perPage: payload.perPage,
              pageSizeOptions: [5, 10, 50, 100],
              controlClassName: 'form-control',
            }),
            _react2.default.createElement(_RecordsCounter2.default, {
              total: payload.total,
              currentPage: payload.currentPage,
              perPage: payload.perPage,
            })
          ),
          _react2.default.createElement(
            'div',
            {className: 'col-md-6'},
            _react2.default.createElement(_Pagination2.default, {
              className: 'pagination pull-right',
              currentPage: payload.currentPage,
              total: payload.total,
              perPage: payload.perPage,
              onChangePage: onChangePage,
            })
          )
        )
      );
    },
  }]);

  return Container;
}(_react.Component);

Container.defaultProps = {
  draggable: false,
  sortable: false,
  onColumnDrag: null,
  sortBy: null,
  className: null,
  columnsVisible: null,
  generateRowProps: null,
  filters: null,
};
Container.propTypes = {
  generateRowProps: _react.PropTypes.func,
  onColumnDrag: _react.PropTypes.func.isRequired,
  onSort: _react.PropTypes.func.isRequired,
  onChangePage: _react.PropTypes.func.isRequired,
  onPageSizeChange: _react.PropTypes.func.isRequired,
  onToggleColumnsVisibility: _react.PropTypes.func.isRequired,
  onFilter: _react.PropTypes.func.isRequired,
  columns: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  columnsVisible: _react.PropTypes.arrayOf(_react.PropTypes.number),
  sortBy: _react.PropTypes.shape({
    prop: _react.PropTypes.string,
    order: _react.PropTypes.string,
  }),
  filters: _react.PropTypes.object,
  payload: _react.PropTypes.object.isRequired,
  sortable: _react.PropTypes.bool,
  draggable: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  keys: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.string]).isRequired,
};
exports.default = Container;
