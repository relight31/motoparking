import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import SearchControl from "./SearchControl";
import LocationList from "./locations.json";

export default function Map(props) {

  let [filteredLocations, setFilteredLocation] = useState(LocationList);

  const Carpark = (props) => {
    let coords = [props.lat, props.long];

    return (
      <Marker position={coords}>
        <Tooltip sticky>
          {props.name} <br /> {props.address}
          <br /> {props.remark}
        </Tooltip>
      </Marker>
    );
  };

  const prov = OpenStreetMapProvider();

  return (
    <div>
      <MapContainer center={props.location} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLocations.map((location, index) => {
          return <Carpark key={index} {...location} />;
        })}

        <SearchControl
          provider={prov}
          showMarker={true}
          showPopup={true}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Enter address, please"}
          keepResult={true}
        />
      </MapContainer>
    </div>
  );
}
