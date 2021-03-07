import React from "react";
import "./index.css";

function CalcBox({ square }) {

  const convertMtoKM = () => {
    return (square / 1000).toFixed(3);
  };

  return (
    <div className="calculation-box">
      <p>Square figures: {convertMtoKM()} km</p>
    </div>
  );
}

export default CalcBox;
