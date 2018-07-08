import React from 'react';

import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

const LoginPage = ({ handleLogin }) => (
  <div>
    <div>Login Page</div>

    <button onClick={handleLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
