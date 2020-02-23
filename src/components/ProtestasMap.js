import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import protestasData from "../data/";

const ProtestasMap = () => {
  const [activeProtesta, setActiveProtesta] = useState(null);

  return (
    <Map center={[18.7726333, -69.4162013]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {protestasData.features.map(protesta => (
        <Marker
          key={protesta.properties.PROTESTA_ID}
          position={[
            protesta.geometry.coordinates[1],
            protesta.geometry.coordinates[0]
          ]}
          onClick={() => setActiveProtesta(protesta)}
        />
      ))}
      {activeProtesta && (
        <Popup
          position={[
            activeProtesta.geometry.coordinates[1],
            activeProtesta.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActiveProtesta(null);
          }}
        >
          <div>
            <h2>{activeProtesta.properties.NAME}</h2>
            <p> </p>

            <img
              width="250px"
              height="150px"
              src={activeProtesta.properties.IMAGEN}
              alt="Imagen Lugar"
            />
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default ProtestasMap;
