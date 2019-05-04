import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './app.scss'

import ReactBasics from './ReactBasics'
import App from './App'

function AppRouter() {
  return (
    <Router>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ReactBasics/">ReactBasics</Link>
        </li>
        <Route path="/" exact component={App} />
        <Route path="/ReactBasics/" component={ReactBasics} />
      </div>
    </Router>
  )
}

export default AppRouter
