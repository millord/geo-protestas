import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Geo-Protestas</h1>
      <br />
      <p id="intro">
        <strong style={{ fontSize: "28px" }}>
          <Link to="/map">Mapa </Link>
        </strong>
        de distribución de los lugares donde se ha protesado desde el 16 de
        febrero 2020.
      </p>
    </div>
  );
}

export default Home;
