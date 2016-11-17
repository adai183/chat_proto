import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { MainContainer } from 'containers'; // eslint-disable-line
import * as Pages from 'pages'; // eslint-disable-line
import { Provider } from 'react-redux';
import store, { history } from '../store';

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={Pages.LandingPage} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
