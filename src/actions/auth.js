import { firebase, googleAuthProvider } from '../firebase/firebase';

// CONSTANTS
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
export const login = uid => ({
  type: LOGIN,
  uid
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
export const logout = () => ({
  type: LOGOUT
});
