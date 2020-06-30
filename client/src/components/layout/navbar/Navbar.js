import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import "./Navbar.css";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logOut, user } = authContext;

  const onLogout = () => {
    logOut();
  };

  const authLinks = (
    <Fragment>
      <p id="userName">
        Hello {user && `${user.name[0].toUpperCase()}${user.name.slice(1)} ->`}
      </p>
      <li id="logout">
        <a onClick={onLogout} href="#!">
          Log out
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/login" className="li">
        Login
      </Link>
      <Link to="/register" className="li">
        Register
      </Link>
    </Fragment>
  );

  return (
    <div className="navbar">
      <div className="logo">{title}</div>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
};

export default Navbar;
