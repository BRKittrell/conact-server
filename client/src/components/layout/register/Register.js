import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";
import "./Register.css";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { registerUser, error, clearErrors, isAuthenticated } = authContext;

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
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { email, password, name, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      setAlert("Please fill out all fields.");
    } else if (password !== password2) {
      setAlert("Passwords do not match");
    } else {
      registerUser({
        name,
        email,
        password,
      });
    }
  };
  return (
    <div className="formContainer">
      <div className="formTitle">
        Account <span className="formTitleHighlight">Register</span>
      </div>
      <form autoComplete="off" onSubmit={onSubmit}>
        {/* {name} */}
        <div className="formGroup">
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            className="formInput"
          />
        </div>
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

        <div className="formGroup">
          <label htmlFor="email" className="formLabel">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            className="formInput"
          />
        </div>
        <input type="submit" value="Submit" className="formSubmit" />
      </form>
    </div>
  );
};

export default Register;
