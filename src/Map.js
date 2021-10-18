import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationList from "./locations.json";

export default function Map() {
  let [currentLocation, setCurrentLocation] = useState([
    1.3172918,
    103.9036111,
  ]);

  let [filteredLocations, setFilteredLocation] = useState(LocationList);

  const Carpark = (props) => {
    let coords = [props.lat, props.long];

    return (
      <Marker position={coords}>
        <Popup>
          {props.name} <br /> {props.address}
          <br /> {props.remark}
        </Popup>
      </Marker>
    );
  };
  return (
    <div>
      <MapContainer center={currentLocation} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLocations.map((location, index) => {
          return <Carpark key={index} {...location} />;
        })}
      </MapContainer>
    </div>
  );
}
