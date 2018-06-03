import moment from 'moment';

import {
  setTextFilter,
  SET_TEXT_FILTER,
  sortByAmount,
  SORTBY_AMOUNT_FILTER,
  sortByDate,
  SORTBY_DATE_FILTER,
  setStartDate,
  SET_START_DATE_FILTER,
  setEndDate,
  SET_END_DATE_FILTER
} from './filters';

test('should generate set text filter action object with default values', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: ''
  });
});

test('should generate set text filter action object with text value', () => {
  const text = 'Rent';
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text
  });
});

test('should generate sort by amount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: SORTBY_AMOUNT_FILTER
  });
});

test('should generate sort by date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: SORTBY_DATE_FILTER
  });
});

test('should generate set start date action object', () => {
  const startDate = moment(0);
  const action = setStartDate(startDate);

  expect(action).toEqual({
    type: SET_START_DATE_FILTER,
    startDate
  });
});

test('should generate set end date action object', () => {
  const endDate = moment(1);
  const action = setEndDate(endDate);

  expect(action).toEqual({
    type: SET_END_DATE_FILTER,
    endDate
  });
});
