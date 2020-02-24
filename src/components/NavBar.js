import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand">
          <i class="compass outline icon"></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Inicio <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/map">
                Mapa <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
