import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
      <a href="#" className="navbar-brand bg-light">
        Geo - Protestas
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a className="nav-link" href="#">
              Acerca
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
