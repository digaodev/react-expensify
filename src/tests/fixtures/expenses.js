import moment from 'moment';

export default [
  {
    id: 1,
    description: 'Rent',
    note: 'Pay rent',
    amount: 1500.5,
    createdAt: 0
  },
  {
    id: 2,
    description: 'Groceries',
    note: 'Buy groceries',
    amount: 100,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: 3,
    description: 'Credit card',
    note: 'Pay credit card',
    amount: 150,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
