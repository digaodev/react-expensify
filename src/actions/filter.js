// CONSTANTS
export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export const SORTBY_AMOUNT_FILTER = 'SORTBY_AMOUNT_FILTER';
export const SORTBY_DATE_FILTER = 'SORTBY_DATE_FILTER';
export const SET_START_DATE_FILTER = 'SET_START_DATE_FILTER';
export const SET_END_DATE_FILTER = 'SET_END_DATE_FILTER';

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
});

export const sortByAmount = () => ({
  type: SORTBY_AMOUNT_FILTER,
});

export const sortByDate = () => ({
  type: SORTBY_DATE_FILTER,
});

export const setStartDate = (startDate) => ({
  type: SET_START_DATE_FILTER,
  startDate
});

export const setEndDate = (endDate) => ({
  type: SET_END_DATE_FILTER,
  endDate
});