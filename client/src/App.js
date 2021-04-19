import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom'

  import Users from './pages/UserPage'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Users/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
