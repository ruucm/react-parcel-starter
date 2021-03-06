import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./app.scss";

import App from "./App";
import ReactBasics from "./ReactBasics";
import Framer from "./Framer";
import Flex from "./Flex";
import Redux from "./Redux";
import Context from "./Context/ContextContainer";
import GridItems from "./GridItems";

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
          <li>
            <Link to="/Redux/">Redux</Link>
          </li>
          <li>
            <Link to="/Context/">Context</Link>
          </li>
          <li>
            <Link to="/GridItems/">GridItems</Link>
          </li>
        </ul>

        <Route path="/" exact component={App} />
        <Route path="/react-basics/" component={ReactBasics} />
        <Route path="/framer/" component={Framer} />
        <Route path="/flex/" component={Flex} />
        <Route path="/Redux/" component={Redux} />
        <Route path="/Context/" component={Context} />
        <Route path="/GridItems/" component={GridItems} />
      </div>
    </Router>
  );
}

export default AppRouter;
