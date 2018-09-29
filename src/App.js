/// app.js
import React from "react";
import DeckGL from "deck.gl";
import { StaticMap } from "react-map-gl";
import { pointLayer, voronoiLayer, initialViewState } from "./modules";

class App extends React.Component {
  render() {
    const layers = [pointLayer, voronoiLayer];
    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap
          mapStyle={process.env.REACT_APP_MAP_SOURCE}
          mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        />
      </DeckGL>
    );
  }
}

export default App;
