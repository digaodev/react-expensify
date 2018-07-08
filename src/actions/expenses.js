import db from '../firebase/firebase';

// CONSTANTS
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SET_EXPENSES = 'SET_EXPENSES';

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
});
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return db
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

export const removeExpense = ({ id }) => ({
  type: REMOVE_EXPENSE,
  id
});
export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return db
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return db
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(ref => {
        dispatch(editExpense(id, updates));
      });
  };
};

export const setExpenses = expenses => ({
  type: SET_EXPENSES,
  expenses
});
export const startSetExpenses = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return db
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(snap => {
          expenses.push({
            id: snap.key,
            ...snap.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};
