import React from 'react';

import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
  <div>
    <div>Login Page</div>

    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
