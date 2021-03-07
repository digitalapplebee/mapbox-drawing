import React, { useState } from "react";
import {
  CircleMode,
  DragCircleMode,
  DirectMode,
  SimpleSelectMode
} from "mapbox-gl-draw-circle";
import turf from "turf";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import ReactMapboxGL from "react-mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import CalcBox from "./Containers/CalcBox";
import Button from "./Components/Button";
import "./App.css";

const Map = ReactMapboxGL({
  accessToken:
    "pk.eyJ1IjoiZGlnaXRhbGFwcGxlYmVlIiwiYSI6ImNqem5zcWtmNjA3MmMzbmx2bXhidG54NnYifQ.-hDI8B2B_HxThJxmzVaicw"
});

const draw = new MapboxDraw({
  userProperties: true,
  displayControlsDefault: false,
  modes: Object.assign(
    {
      draw_circle: CircleMode,
      drag_circle: DragCircleMode,
      direct_select: DirectMode,
      simple_select: SimpleSelectMode
    },
    MapboxDraw.modes
  )
});

function App() {
  const [square, setSquare] = useState(0);
  const mapboxStyleURL = 'mapbox://styles/mapbox/dark-v9';

  const updateArea = () => {
    let data = draw.getAll();
    if (data.features.length > 0) {
      let unionArea, area;
      if (data.features.length > 1) {
        unionArea = turf.union(...data.features);
        area = turf.area(unionArea);
      } else {
        area = turf.area(data);
      }

      let rounded_area = Math.round(area * 100) / 100;
      setSquare(rounded_area);
    } else {
      setSquare(0);
    }
  };

  const handleMapLoaded = map => {
    map.addControl(draw);
    map.on("draw.create", updateArea);
    map.on("draw.delete", updateArea);
    map.on("draw.update", updateArea);
  };

  const onDrawCircle = () => {
    draw.changeMode("draw_circle", { initialRadiusInKm: 0.5 });
  };

  const onDrawPolygon = () => {
    draw.changeMode("draw_polygon");
  };

  const onDelete = () => {
    draw.trash();
  };

  return (
    <div>
      <Map
        // eslint-disable-next-line
        style={mapboxStyleURL}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        onStyleLoad={handleMapLoaded}
        onDrawUpdate={updateArea}
        center={[27.567444, 53.893009]}
        zoom={[14]}
      />
      <div className="control-box">
        <Button name="Circle" event={onDrawCircle} />
        <Button name="Polygon" event={onDrawPolygon} />
        <Button name="Delete" event={onDelete} />
      </div>
      <CalcBox square={square} />
    </div>
  );
}

export default App;
