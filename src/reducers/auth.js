import { LOGIN, LOGOUT } from '../actions/auth';

const auth = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { uid: action.uid };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default auth;
