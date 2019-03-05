'use strict';

var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i]; for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  } return target;
};

var _dataEnhancer = require('../dataEnhancer');

var dataEnhancer = _interopRequireWildcard(_dataEnhancer);

var _constants = require('../constants');

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

var columns = [{id: 1, title: 'First name', prop: 'first_name'}, {id: 2, title: 'Last name', prop: 'last_name'}];

var dataArray = [{id: 1, first_name: 'Jhon', last_name: 'Dou'}, {id: 2, first_name: 'Vasily', last_name: 'Pupkin'}, {id: 3, first_name: 'Anna', last_name: 'Lee'}];

var sortBy = {
  prop: 'first_name',
  order: _constants.SORT_ORDERS.ASC,
};

var initialState = {
  dataArray: dataArray,
  sortBy: sortBy,
  payload: {},
  filters: {
    globalSearch: '',
  },
  columns: columns.map(function(col) {
    if (typeof col.visible === 'undefined') {
      return _extends({}, col, {
        visible: true,
      });
    }
    return col;
  }),
};

describe('dataEnhancer', function() {
  it('changes current page', function() {
    var state = _extends({}, initialState, {
      payload: dataEnhancer.calculatePayload(initialState, {sortBy: sortBy, currentPage: 0, perPage: 10}),
    });

    var expected = {
      payload: _extends({}, state.payload, {
        currentPage: 1,
        data: [],
      }),
    };

    expect(dataEnhancer.changePage(state, 1)).toEqual(expected);
  });

  it('changes page size', function() {
    var state = _extends({}, initialState, {
      payload: dataEnhancer.calculatePayload(initialState, {sortBy: sortBy, currentPage: 0, perPage: 10}),
    });

    var expected = {
      payload: _extends({}, state.payload, {
        perPage: 5,
      }),
    };

    expect(dataEnhancer.changePageSize(state, 5)).toEqual(expected);
  });

  it('toogles columns visibility', function() {
    var colId = 1;
    var state = _extends({}, initialState, {
      payload: dataEnhancer.calculatePayload(initialState, {sortBy: sortBy, currentPage: 0, perPage: 10}),
    });

    var expected = {
      columns: [{id: 1, title: 'First name', prop: 'first_name', visible: false}, {id: 2, title: 'Last name', prop: 'last_name', visible: true}],
    };

    expect(dataEnhancer.toggleColumnVisibility(state, colId)).toEqual(expected);
  });

  it('drags column', function() {
    var state = _extends({}, initialState, {
      payload: dataEnhancer.calculatePayload(initialState, {sortBy: sortBy, currentPage: 0, perPage: 10}),
    });

    var expected = {
      columns: [{id: 2, title: 'Last name', prop: 'last_name', visible: true}, {id: 1, title: 'First name', prop: 'first_name', visible: true}],
    };

    expect(dataEnhancer.dragColumn(state, {from: 0, to: 1})).toEqual(expected);
  });

  it('filters data', function() {
    var searchValue = 'vasi';

    var state = _extends({}, initialState, {
      payload: dataEnhancer.calculatePayload(initialState, {sortBy: sortBy, currentPage: 0, perPage: 10}),
    });

    var expected = {
      filters: {
        globalSearch: searchValue,
      },
      payload: _extends({}, state.payload, {
        currentPage: 0,
        total: 1,
        data: [{
          id: 2,
          first_name: 'Vasily',
          last_name: 'Pupkin',
        }],
      }),
    };

    expect(dataEnhancer.filterData(state, 'globalSearch', searchValue)).toEqual(expected);
  });

  it('sorts ascending', function() {
    var state = _extends({}, initialState, {
      payload: dataEnhancer.calculatePayload(initialState, {sortBy: sortBy, currentPage: 0, perPage: 10}),
    });

    var expected = {
      sortBy: {prop: 'last_name', order: _constants.SORT_ORDERS.ASC},
      payload: _extends({}, state.payload, {
        currentPage: 0,
        data: [{id: 1, first_name: 'Jhon', last_name: 'Dou'}, {id: 3, first_name: 'Anna', last_name: 'Lee'}, {id: 2, first_name: 'Vasily', last_name: 'Pupkin'}],
      }),
    };

    expect(dataEnhancer.sortData(state, {prop: 'last_name', order: _constants.SORT_ORDERS.ASC})).toEqual(expected);
  });

  it('sorts descending', function() {
    var state = _extends({}, initialState, {
      payload: dataEnhancer.calculatePayload(initialState, {sortBy: sortBy, currentPage: 0, perPage: 10}),
    });

    var expected = {
      sortBy: {prop: 'last_name', order: _constants.SORT_ORDERS.DESC},
      payload: _extends({}, state.payload, {
        currentPage: 0,
        data: [{id: 2, first_name: 'Vasily', last_name: 'Pupkin'}, {id: 3, first_name: 'Anna', last_name: 'Lee'}, {id: 1, first_name: 'Jhon', last_name: 'Dou'}],
      }),
    };

    expect(dataEnhancer.sortData(state, {prop: 'last_name', order: _constants.SORT_ORDERS.DESC})).toEqual(expected);
  });
});
