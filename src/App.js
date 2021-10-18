import "./App.css";
import Topbar from "./Topbar.js";
import MapTool from "./Map.js";

function App() {
  return (
    <>
      <div className="App-header">
        <Topbar />
      </div>
      <div className="leaflet-container">
        <MapTool />
      </div>
    </>
  );
}

export default App;
