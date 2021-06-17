import React from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";


function App() {
  return (<div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>);
}

export default App();