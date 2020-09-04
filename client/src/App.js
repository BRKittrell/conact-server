import React, { Fragment } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/layout/home/Home";
import About from "./components/layout/about/About";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Login from "./components/layout/login/Login";
import Register from "./components/layout/register/Register";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/alert/Alert";

import PrivateRoute from "./components/routing/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <AuthState>
        <ContactState>
          <AlertState>
            <Router>
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <PrivateRoute exact path="/" component={Home}></PrivateRoute>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/register" component={Register}></Route>
                  <Route exact path="/login" component={Login}></Route>
                </Switch>
              </div>
            </Router>
          </AlertState>
        </ContactState>
      </AuthState>
    </Fragment>
  );
};

export default App;
