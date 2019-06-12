import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './app.scss'

import App from './App'
import ReactBasics from './ReactBasics'
import Framer from './Framer'
import Flex from './Flex'

function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react-basics/">ReactBasics</Link>
          </li>

          <li>
            <Link to="/framer/">Framer</Link>
          </li>

          <li>
            <Link to="/flex/">Flex</Link>
          </li>
        </ul>

        <Route path="/" exact component={App} />
        <Route path="/react-basics/" component={ReactBasics} />
        <Route path="/framer/" component={Framer} />
        <Route path="/flex/" component={Flex} />
      </div>
    </Router>
  )
}

export default AppRouter
