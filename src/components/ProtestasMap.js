import React, { useState, Fragment } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useSpring, animated } from "react-spring";

import protestasData from "../data/";

const ProtestasMap = () => {
  const [activeProtesta, setActiveProtesta] = useState(null);
  const fade = useSpring({
    from: {
      opacity: 0
    },

    opacity: 1
  });

  return (
    <Fragment>
      <animated.div style={fade}>
        <Map center={[18.7726333, -69.4162013]} zoom={2}>
          <TileLayer
            url="https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=10d143b5e4714d8ab882278a9372df97"
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
      </animated.div>
    </Fragment>
  );
};

export default ProtestasMap;
