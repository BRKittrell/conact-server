import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Contacts</h1>
      <ul>
        <Link to="/" className="li">
          Home
        </Link>
        <Link to="/about" className="li">
          About
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
