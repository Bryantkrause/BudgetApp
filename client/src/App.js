import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom'

  import Users from './pages/UserPage'
  import Budgets from './pages/BudgetPage'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Users/>
          </Route>
          <Route exact path="/Budget">
          <Budgets/>
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;
