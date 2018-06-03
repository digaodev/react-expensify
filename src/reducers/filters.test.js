import moment from 'moment';

import {
  SET_TEXT_FILTER,
  SORTBY_AMOUNT_FILTER,
  SORTBY_DATE_FILTER,
  SET_START_DATE_FILTER,
  SET_END_DATE_FILTER
} from '../actions/filters';

import filtersReducer from './filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set the text filter', () => {
  const action = {
    type: SET_TEXT_FILTER,
    text: 'Rent'
  };

  const state = filtersReducer(undefined, action);

  expect(state.text).toEqual('Rent');
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: SORTBY_AMOUNT_FILTER });

  expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const state = filtersReducer(currentState, { type: SORTBY_DATE_FILTER });

  expect(state.sortBy).toEqual('date');
});

test('should set the startDate filter', () => {
  const action = {
    type: SET_START_DATE_FILTER,
    startDate: moment(0)
  };

  const state = filtersReducer(undefined, action);

  expect(state.startDate).toEqual(moment(0));
});

test('should set the endDate filter', () => {
  const action = {
    type: SET_END_DATE_FILTER,
    endDate: moment(0)
  };

  const state = filtersReducer(undefined, action);

  expect(state.endDate).toEqual(moment(0));
});
