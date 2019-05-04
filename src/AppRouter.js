import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './app.scss'

import Playground from './Playground'
import App from './App'

function AppRouter() {
  return (
    <Router>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/playground/">Playground</Link>
        </li>
        <Route path="/" exact component={App} />
        <Route path="/playground/" component={Playground} />
      </div>
    </Router>
  )
}

export default AppRouter
