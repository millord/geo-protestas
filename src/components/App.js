import React from "react";
import ProtestasMap from "./ProtestasMap";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="leaflet-container">
      <NavBar />
      <ProtestasMap />
    </div>
  );
};

export default App;
