'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.toggleColumnVisibility = exports.dragColumn = exports.changePageSize = exports.changePage = exports.filterData = exports.sortData = exports.calculatePayload = undefined;

var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i]; for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  } return target;
};

var _orderBy = require('lodash/orderBy');

var _orderBy2 = _interopRequireDefault(_orderBy);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _utils = require('./utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  } return obj;
}

var calculatePayload = exports.calculatePayload = function calculatePayload(state, params) {
  var dataArray = state.dataArray,
    columns = state.columns;

  var filters = params.filters || state.filters;

  var filteredData = [].concat(dataArray);

  if (filters && filters.globalSearch) {
    filteredData = dataArray.filter(function(row) {
      var flag = false;

      for (var i = columns.length - 1; i >= 0; i--) {
        var prop = columns[i].prop;

        if (prop) {
          var value = (0, _get2.default)(row, prop);

          flag = (0, _utils.ignoreCase)(value).indexOf((0, _utils.ignoreCase)(filters.globalSearch)) !== -1;

          if (flag) {
            break;
          }
        }
      }

      return flag;
    });
  }

  var sortBy = params.sortBy || state.sortBy;

  if (sortBy) {
    filteredData = (0, _orderBy2.default)(filteredData, sortBy.prop, sortBy.order);
  }

  var currentPage = Number(typeof params.currentPage !== 'undefined' ? params.currentPage : state.payload.currentPage);

  var perPage = Number(typeof params.perPage !== 'undefined' ? params.perPage : state.payload.perPage);

  var start = perPage * currentPage;

  return {
    perPage: perPage,
    currentPage: currentPage,
    data: filteredData.slice(start, start + perPage),
    total: filteredData.length,
  };
};

/**
 * Data sort
 *
 * @param {object} state
 * @param {object} sortBy - sorting object
 */
var sortData = exports.sortData = function sortData(state, sortBy) {
  return {
    sortBy: sortBy,
    payload: calculatePayload(state, {
      currentPage: 0,
      sortBy: sortBy,
    }),
  };
};

/**
 * Data filter
 *
 * @param {object} state
 * @param {string} key - filter key
 * @param {string|number} value - filter value
 */
var filterData = exports.filterData = function filterData(state, key, value) {
  return {
    filters: _extends({}, state.filters, _defineProperty({}, key, value)),
    payload: calculatePayload(state, {
      filters: _defineProperty({}, key, value),
      currentPage: 0,
    }),
  };
};

/**
 * Change page
 *
 * @param {object} state
 * @param {number} currentPage - new page
 */
var changePage = exports.changePage = function changePage(state, currentPage) {
  return {
    payload: calculatePayload(state, {currentPage: currentPage}),
  };
};

/**
 * Change page size
 *
 * @param {object} state
 * @param {number} perPage - rows per page
 */
var changePageSize = exports.changePageSize = function changePageSize(state, perPage) {
  var currentPage = perPage ? Math.floor(state.payload.currentPage * state.payload.perPage / perPage) : 0;

  return {
    payload: calculatePayload(state, {currentPage: currentPage, perPage: perPage}),
  };
};

/**
 * Drag columns
 *
 * @param {object} state
 * @param {object} order - order object
 */
var dragColumn = exports.dragColumn = function dragColumn(state, order) {
  var from = order.from,
    to = order.to;


  if (from !== to) {
    var columns = [].concat(state.columns);

    // Set new columns order
    columns.splice(to, 0, columns.splice(from, 1)[0]);

    return {columns: columns};
  }

  return state;
};

/**
 * Toggle column's visibility
 *
 * @param {object} state
 * @param {number|string} columnId - column's id
 */
var toggleColumnVisibility = exports.toggleColumnVisibility = function toggleColumnVisibility(state, columnId) {
  var columns = state.columns.map(function(col) {
    if (col.id === columnId) {
      return _extends({}, col, {
        visible: !col.visible,
      });
    }

    return col;
  });

  return {columns: columns};
};
