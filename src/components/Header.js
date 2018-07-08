import React from 'react';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { startLogout } from '../actions/auth';

const Header = ({handleLogout}) => {
  return (
    <header>
      <h1>Expensify</h1>
      <nav>
        <NavLink activeClassName="is-active" exact to="/">
          Dashboard
        </NavLink>
        <NavLink activeClassName="is-active" exact to="/add">
          Add Expense
        </NavLink>
        <button type="button" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

const mapDispatchToProps = (dispatch) =>(
{
  handleLogout: () => dispatch(startLogout())
}
);

export default connect(undefined, mapDispatchToProps)(Header);
