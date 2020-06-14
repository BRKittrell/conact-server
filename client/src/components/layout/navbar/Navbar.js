import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <div className="logo">{title}</div>
      <ul>
        <Link to="/" className="li">
          Home
        </Link>
        <Link to="/about" className="li">
          About
        </Link>
        <Link to="/login" className="li">
          Login
        </Link>
        <Link to="/register" className="li">
          Register
        </Link>
      </ul>
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
