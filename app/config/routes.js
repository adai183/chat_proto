import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { MainContainer } from 'containers'
import * as Pages from 'pages'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Pages.LandingPage} />
    </Route>
  </Router>
)

export default routes
