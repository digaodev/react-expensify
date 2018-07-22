import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import PrivateRoute from '../Router/PrivateRoute';
import PublicRoute from '../Router/PublicRoute';

import '../../styles/styles.css';

import ExpenseDashboard from '../../components/ExpenseDashboard';
import AddExpense from '../../components/AddExpense';
import EditExpense from '../../components/EditExpense';
import LoginPage from '../../components/LoginPage';
import NotFound from '../../components/NotFound';

export const history = createHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              <PublicRoute exact path="/" component={LoginPage} />
              <PrivateRoute
                exact
                path="/dashboard"
                component={ExpenseDashboard}
              />
              <PrivateRoute path="/add" component={AddExpense} />
              <PrivateRoute path="/edit/:id" component={EditExpense} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
