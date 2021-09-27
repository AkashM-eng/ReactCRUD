import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="#">
        App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* <NavLink className="nav-link" exact to="/Login">
              Login
            </NavLink> */}
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/home">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/About">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Contact">
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Help">
              Help
            </NavLink>
          </li>
        </ul>
      </div>
      <Link className="btn btn-outline-light" to="/user/add">Add User</Link>
    </nav>
  );
};

export default Navbar;