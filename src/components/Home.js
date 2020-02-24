import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Home() {
  const fade = useSpring({
    from: {
      opacity: 0
    },

    opacity: 1
  });
  return (
    <animated.div className="container" style={fade}>
      <h1 className="title">Geo-Protestas</h1>

      <p id="intro">
        <strong style={{ fontSize: "28px" }}>
          <Link to="/map">Mapa </Link>
        </strong>
        de distribución de los lugares donde se ha protesado desde el 16 de
        febrero 2020.
      </p>
    </animated.div>
  );
}

export default Home;
