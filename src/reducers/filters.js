import {
  SET_TEXT_FILTER,
  SORTBY_AMOUNT_FILTER,
  SORTBY_DATE_FILTER,
  SET_START_DATE_FILTER,
  SET_END_DATE_FILTER
} from '../actions/filters'

const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filters = (state = filterDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case SORTBY_AMOUNT_FILTER:
      return {
        ...state,
        sortBy: 'amount'
      };
    case SORTBY_DATE_FILTER:
      return {
        ...state,
        sortBy: 'date'
      };
    case SET_START_DATE_FILTER:
      return {
        ...state,
        startDate: action.startDate
      };
    case SET_END_DATE_FILTER:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

export default filters;