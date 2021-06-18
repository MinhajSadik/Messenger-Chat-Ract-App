import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import About from "./Components/About/About";
import Athik from "./Components/Athik/Athik";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Joynul from "./Components/Joynul/Joynul";
import Nayeem from "./Components/Nayeem/Nayeem";
import Sajon from "./Components/Sajon/Sajon";


function App() {
  return (<div>
    
      <div>
        <Router>
          
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/joynul">
            <Joynul />
          </Route>
          <Route path="/nayeem">
            <Nayeem />
          </Route>
          <Route path="/sajon">
            <Sajon />
          </Route>
          <Route path="/athik">
            <Athik />
          </Route>

        </Switch>
        </Router>
      </div>
    
  </div>);
}

export default App;