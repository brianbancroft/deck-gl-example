import pointData from "../point-data";
import { GeoJsonLayer } from "deck.gl";

console.log("point data => ", pointData);

const layer = new GeoJsonLayer({
  id: "geojson-layer1",
  data: pointData,
  pickable: true,
  stroked: true,
  filled: true,
  extruded: true,
  getFillColor: [255, 0, 0, 255],
  getLineColor: [255, 0, 0, 255],
  getRadius: 50,
  getLineWidth: 1,
  getElevation: 30
});

export default layer;
