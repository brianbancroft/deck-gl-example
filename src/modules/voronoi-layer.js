import pointData from "../point-data";
import { GeoJsonLayer } from "deck.gl";
import voronoi from "@turf/voronoi";

const bbox = [-79.4449, 43.6325, -79.3617, 43.675];

const layer = new GeoJsonLayer({
  id: "geojson-layer1",
  data: voronoi(pointData, { bbox }),
  pickable: true,
  stroked: true,
  filled: false,
  extruded: false,
  getFillColor: [10, 10, 10, 100],
  getLineColor: [255, 0, 0, 255],
  getRadius: 50,
  getLineWidth: 10,
  getElevation: 30
});

export default layer;
