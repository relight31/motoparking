import React, { useState } from "react";
import "./App.css";
import Topbar from "./Topbar.js";
import MapTool from "./Map.js";

function App() {
  let [currentLocation, setCurrentLocation] = useState([
    1.3748807370030796,
    103.81125931254017,
  ]);

  return (
    <>
      <div className="App-header">
        <Topbar />
      </div>
      <div className="leaflet-container">
        <MapTool location={currentLocation} />
      </div>
      <div class="powr-hit-counter" id="40d62e07_1635437299"></div><script src="https://www.powr.io/powr.js?platform=react"></script>
    </>
  );
}

export default App;
