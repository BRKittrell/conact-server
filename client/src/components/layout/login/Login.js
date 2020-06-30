import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";
import { PromiseProvider } from "mongoose";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, error, login, clearErrors } = authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error !== null) {
      setAlert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill out all fields.");
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <div className="formContainer">
      <div className="formTitle">
        Account <span className="formTitleHighlight">Login</span>
      </div>
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            className="formInput"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password" className="formLabel">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            className="formInput"
            minLength="6"
          />
        </div>
        <input type="submit" value="Submit" className="formSubmit" />
      </form>
    </div>
  );
};

export default Login;
