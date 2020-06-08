import React, { useState, useContext } from "react";
import "./Login.css";
import AlertContext from "../../../context/alert/alertContext";
const Login = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill out all fields.");
    } else {
      console.log("submitted, thank you...");
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
