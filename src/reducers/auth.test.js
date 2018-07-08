import authReducer from './auth';

import { LOGIN, LOGOUT } from '../actions/auth';

test('should set the id for login', () => {
  const action = {
    type: LOGIN,
    uid: 'abc123'
  };

  const state = authReducer({}, action);

  expect(state.uid).toEqual(action.uid);
});

test('should clear the id for logout', () => {
  const action = {
    type: LOGOUT
  };

  const state = authReducer({ uid: 'abc' }, action);

  expect(state).toEqual({});
});
