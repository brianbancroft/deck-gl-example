/// app.js
import React from "react";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";

import data from "./data";

// Set your mapbox access token here
const token = process.env.REACT_APP_MAP_TOKEN;
const source = process.env.REACT_APP_MAP_SOURCE;

// Initial viewport settings
const initialViewState = {
  longitude: -79.3970502,
  latitude: 43.6538517,
  zoom: 11,
  pitch: 40,
  bearing: -12
};

const pointLayer = new GeoJsonLayer({
  id: "geojson-layer",
  data,
  pickable: true,
  stroked: false,
  filled: true,
  extruded: true,
  getFillColor: [16, 160, 80, 200],
  getRadius: 100,
  getLineWidth: 1,
  getElevation: 30
});

class App extends React.Component {
  render() {
    const layers = [pointLayer];
    console.log(token);

    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapStyle={source} mapboxApiAccessToken={token} />
      </DeckGL>
    );
  }
}

export default App;
