import React, { Fragment } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/layout/home/Home";
import About from "./components/layout/about/About";
import ContactState from "./context/contact/ContactState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <ContactState>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
            </Switch>
          </div>
        </Router>
      </ContactState>
    </Fragment>
  );
};

export default App;
