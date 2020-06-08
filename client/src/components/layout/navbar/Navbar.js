import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        Contact<span className="logoSpan">Keeper</span>
      </div>
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

export default Navbar;
