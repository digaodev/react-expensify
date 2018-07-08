import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  addExpense,
  startAddExpense,
  ADD_EXPENSE,
  editExpense,
  startEditExpense,
  EDIT_EXPENSE,
  removeExpense,
  startRemoveExpense,
  REMOVE_EXPENSE,
  setExpenses,
  startSetExpenses,
  SET_EXPENSES
} from './expenses';

import expenses from '../tests/fixtures/expenses';

import db from '../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const uid = 'testuid';
const defaultAuthState = { auth: { uid } };

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  db.ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[0]);

  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: expenses[0]
  });
});

test('should add expense with provided values to database and store', done => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'PC',
    amount: 30000,
    note: 'the best pc',
    createdAt: 1000
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: ADD_EXPENSE,
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return db
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});
test('should add expense with default values to database and store', done => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: ADD_EXPENSE,
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });

      return db
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

test('should setup edit expense action object', () => {
  const id = 1;
  const updates = { note: 'Pay rent', amount: 1500 };
  const action = editExpense(id, updates);

  expect(action).toEqual({
    type: EDIT_EXPENSE,
    id,
    updates
  });
});
test('should edit the expense from firebase', done => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const updates = { amount: 8000 };

  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: EDIT_EXPENSE,
        id,
        updates
      });

      return db.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
});

test('should setup remove expense action object', () => {
  const id = 1;
  const action = removeExpense({ id });

  expect(action).toEqual({
    type: REMOVE_EXPENSE,
    id
  });
});
test('should remove the expense from firebase', done => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;

  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: REMOVE_EXPENSE,
        id
      });

      return db.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: SET_EXPENSES,
    expenses
  });
});
test('should fetch the expenses from firebase', done => {
  const store = createMockStore(defaultAuthState);

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: SET_EXPENSES,
      expenses
    });

    done();
  });
});
